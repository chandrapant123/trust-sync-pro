import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";

interface SitePage {
  id: string;
  slug: string;
  title: string;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  content: any;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

const AdminPages = () => {
  const [pages, setPages] = useState<SitePage[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ slug: "", title: "", seo_title: "", seo_description: "", seo_keywords: "", body: "", is_published: true });
  const [creating, setCreating] = useState(false);

  const fetchPages = async () => {
    const { data } = await supabase.from("site_pages").select("*").order("created_at", { ascending: false });
    setPages(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPages(); }, []);

  const startEdit = (page: SitePage) => {
    setEditing(page.id);
    setForm({
      slug: page.slug,
      title: page.title,
      seo_title: page.seo_title ?? "",
      seo_description: page.seo_description ?? "",
      seo_keywords: page.seo_keywords ?? "",
      body: typeof page.content === "object" && page.content?.body ? page.content.body : "",
      is_published: page.is_published,
    });
  };

  const handleSave = async () => {
    const payload = {
      slug: form.slug,
      title: form.title,
      seo_title: form.seo_title || null,
      seo_description: form.seo_description || null,
      seo_keywords: form.seo_keywords || null,
      content: { body: form.body },
      is_published: form.is_published,
    };

    if (creating) {
      const { error } = await supabase.from("site_pages").insert(payload);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Page created!" });
    } else if (editing) {
      const { error } = await supabase.from("site_pages").update(payload).eq("id", editing);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Page updated!" });
    }
    setEditing(null);
    setCreating(false);
    fetchPages();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this page?")) return;
    await supabase.from("site_pages").delete().eq("id", id);
    toast({ title: "Page deleted" });
    fetchPages();
  };

  const startCreate = () => {
    setCreating(true);
    setEditing(null);
    setForm({ slug: "", title: "", seo_title: "", seo_description: "", seo_keywords: "", body: "", is_published: true });
  };

  const cancel = () => { setEditing(null); setCreating(false); };

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Pages</h1>
          <p className="text-sm text-muted-foreground">Manage website content pages</p>
        </div>
        <Button variant="saffron" size="sm" onClick={startCreate}><Plus className="mr-2 h-4 w-4" /> New Page</Button>
      </div>

      {(editing || creating) && (
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">{creating ? "Create Page" : "Edit Page"}</h2>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Slug</label>
                <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="page-slug" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Title</label>
                <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Page Title" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">SEO Title</label>
              <Input value={form.seo_title} onChange={(e) => setForm({ ...form, seo_title: e.target.value })} placeholder="SEO Page Title | VeriSekure" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">SEO Description</label>
              <Textarea rows={2} value={form.seo_description} onChange={(e) => setForm({ ...form, seo_description: e.target.value })} placeholder="Meta description for search engines..." />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">SEO Keywords</label>
              <Input value={form.seo_keywords} onChange={(e) => setForm({ ...form, seo_keywords: e.target.value })} placeholder="keyword1, keyword2, keyword3" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Body Content</label>
              <Textarea rows={8} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} placeholder="Page content..." />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={form.is_published} onChange={(e) => setForm({ ...form, is_published: e.target.checked })} id="pub" />
              <label htmlFor="pub" className="text-sm text-foreground">Published</label>
            </div>
            <div className="flex gap-2">
              <Button variant="saffron" size="sm" onClick={handleSave}><Save className="mr-2 h-4 w-4" /> Save</Button>
              <Button variant="ghost" size="sm" onClick={cancel}><X className="mr-2 h-4 w-4" /> Cancel</Button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        {pages.length === 0 && !creating ? (
          <p className="text-muted-foreground text-sm">No pages yet. Create your first page.</p>
        ) : (
          <div className="space-y-2">
            {pages.map((page) => (
              <div key={page.id} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
                <div>
                  <p className="font-medium text-foreground">{page.title}</p>
                  <p className="text-xs text-muted-foreground">/{page.slug} · {page.is_published ? "Published" : "Draft"}</p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => startEdit(page)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(page.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPages;
