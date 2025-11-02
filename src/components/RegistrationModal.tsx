import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Upload } from "lucide-react";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    eventType: "",
  });
  const [abstractFile, setAbstractFile] = useState<File | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim() || !/^\+?[\d\s-()]+$/.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    if (!formData.institution.trim()) {
      toast.error("Please enter your institution name");
      return false;
    }
    if (!formData.eventType) {
      toast.error("Please select an event type");
      return false;
    }
    if (!abstractFile) {
      toast.error("Please upload your abstract document");
      return false;
    }
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf" && file.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        toast.error("Please upload a PDF or DOCX file");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }
      setAbstractFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      let abstractUrl = null;

      // Upload abstract file
      if (abstractFile) {
        const fileExt = abstractFile.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("abstracts")
          .upload(filePath, abstractFile);

        if (uploadError) {
          toast.error("Failed to upload abstract file");
          console.error("Upload error:", uploadError);
          setLoading(false);
          return;
        }

        const { data: urlData } = supabase.storage
          .from("abstracts")
          .getPublicUrl(filePath);

        abstractUrl = urlData.publicUrl;
      }

      // Insert registration data
      const { error: insertError } = await supabase
        .from("registrations")
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          institution: formData.institution,
          event_type: formData.eventType,
          abstract_url: abstractUrl,
        });

      if (insertError) {
        toast.error("Registration failed. Please try again.");
        console.error("Insert error:", insertError);
        setLoading(false);
        return;
      }

      toast.success("Registration successful! We'll contact you soon.");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        institution: "",
        eventType: "",
      });
      setAbstractFile(null);
      onOpenChange(false);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Register for Equilibria 26</DialogTitle>
          <DialogDescription>
            Fill in your details to register for the conference. All fields are required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXXXXXXX"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="institution">Institution *</Label>
            <Input
              id="institution"
              placeholder="Your college/university name"
              value={formData.institution}
              onChange={(e) => handleInputChange("institution", e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventType">Event Type *</Label>
            <Select
              value={formData.eventType}
              onValueChange={(value) => handleInputChange("eventType", value)}
              disabled={loading}
              required
            >
              <SelectTrigger id="eventType" className="bg-background">
                <SelectValue placeholder="Select an event" />
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                <SelectItem value="paper">Paper Presentation</SelectItem>
                <SelectItem value="poster">Poster Presentation</SelectItem>
                <SelectItem value="workshop">Technical Workshop</SelectItem>
                <SelectItem value="panel">Panel Discussion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="abstract">Abstract/Document Upload * (PDF or DOCX, max 10MB)</Label>
            <div className="flex items-center gap-4">
              <Input
                id="abstract"
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileChange}
                disabled={loading}
                className="cursor-pointer"
                required
              />
              {abstractFile && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Upload className="w-4 h-4" />
                  <span className="truncate max-w-[200px]">{abstractFile.name}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-accent hover:bg-accent/90"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
