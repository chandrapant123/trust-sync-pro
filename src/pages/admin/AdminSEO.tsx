import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const AdminSEO = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settingsId, setSettingsId] = useState<string | null>(null);
  const [form, setForm] = useState({
    site_name: "",
    default_meta_description: "",
    default_meta_keywords: "",
    google_analytics_id: "",
  });

  useEffect(() => {
    supabase.from("seo_settings").select("*").limit(1).single().then(({ data }) => {
      if (data) {
        setSettingsId(data.id);
        setForm({
          site_name: data.site_name ?? "",
          default_meta_description: data.default_meta_description ?? "",
          default_meta_keywords: data.default_meta_keywords ?? "",
          google_analytics_id: data.google_analytics_id ?? "",
        });
      }
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    if (settingsId) {
      const { error } = await supabase.from("seo_settings").update(form).eq("id", settingsId);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); }
      else { toast({ title: "SEO settings saved!" }); }
    }
    setSaving(false);
  };

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground">SEO Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">Configure global SEO and analytics settings</p>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Site Name</label>
          <Input value={form.site_name} onChange={(e) => setForm({ ...form, site_name: e.target.value })} placeholder="VeriSekure" />
          <p className="mt-1 text-xs text-muted-foreground">Appears in browser tab and search results</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Default Meta Description</label>
          <Textarea rows={3} value={form.default_meta_description} onChange={(e) => setForm({ ...form, default_meta_description: e.target.value })} placeholder="Default description for pages without custom SEO..." />
          <p className="mt-1 text-xs text-muted-foreground">Used when individual pages don't have custom meta descriptions (max 160 chars recommended)</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Default Meta Keywords</label>
          <Input value={form.default_meta_keywords} onChange={(e) => setForm({ ...form, default_meta_keywords: e.target.value })} placeholder="KYC API, identity verification, India..." />
          <p className="mt-1 text-xs text-muted-foreground">Comma-separated default keywords for SEO</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Google Analytics ID</label>
          <Input value={form.google_analytics_id} onChange={(e) => setForm({ ...form, google_analytics_id: e.target.value })} placeholder="G-XXXXXXXXXX" />
          <p className="mt-1 text-xs text-muted-foreground">Your GA4 measurement ID for tracking</p>
        </div>

        <Button variant="saffron" onClick={handleSave} disabled={saving}>
          <Save className="mr-2 h-4 w-4" /> {saving ? "Saving..." : "Save Settings"}
        </Button>
      </div>
    </div>
  );
};

export default AdminSEO;
