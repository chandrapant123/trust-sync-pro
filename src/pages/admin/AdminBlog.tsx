import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Save, X, Eye, EyeOff } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  is_published: boolean | null;
  published_at: string | null;
  author: string | null;
  created_at: string;
  updated_at: string;
}

const emptyForm = {
  title: "", slug: "", excerpt: "", content: "", cover_image: "",
  seo_title: "", seo_description: "", seo_keywords: "",
  is_published: false, author: "VeriSekure Team",
};

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const fetchPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    setPosts(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const startEdit = (post: BlogPost) => {
    setEditing(post.id);
    setCreating(false);
    setForm({
      title: post.title, slug: post.slug,
      excerpt: post.excerpt ?? "", content: post.content ?? "",
      cover_image: post.cover_image ?? "",
      seo_title: post.seo_title ?? "", seo_description: post.seo_description ?? "",
      seo_keywords: post.seo_keywords ?? "",
      is_published: post.is_published ?? false, author: post.author ?? "VeriSekure Team",
    });
  };

  const handleSave = async () => {
    const payload = {
      title: form.title, slug: form.slug,
      excerpt: form.excerpt || null, content: form.content || null,
      cover_image: form.cover_image || null,
      seo_title: form.seo_title || null, seo_description: form.seo_description || null,
      seo_keywords: form.seo_keywords || null,
      is_published: form.is_published, author: form.author || "VeriSekure Team",
      published_at: form.is_published ? new Date().toISOString() : null,
    };

    if (creating) {
      const { error } = await supabase.from("blog_posts").insert(payload);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Blog post created!" });
    } else if (editing) {
      const { error } = await supabase.from("blog_posts").update(payload).eq("id", editing);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Blog post updated!" });
    }
    setEditing(null); setCreating(false); fetchPosts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    toast({ title: "Blog post deleted" }); fetchPosts();
  };

  const startCreate = () => { setCreating(true); setEditing(null); setForm(emptyForm); };
  const cancel = () => { setEditing(null); setCreating(false); };
  const autoSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Blog Posts</h1>
          <p className="text-sm text-muted-foreground">Create and manage blog content</p>
        </div>
        <Button variant="saffron" size="sm" onClick={startCreate}><Plus className="mr-2 h-4 w-4" /> New Post</Button>
      </div>

      {(editing || creating) && (
        <div className="mt-6 rounded-xl border border-border bg-card p-6 space-y-4">
          <h2 className="font-heading text-lg font-semibold text-foreground">{creating ? "Create Post" : "Edit Post"}</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Title</label>
              <Input value={form.title} onChange={(e) => { setForm({ ...form, title: e.target.value, slug: creating ? autoSlug(e.target.value) : form.slug }); }} placeholder="Blog Post Title" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Slug</label>
              <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="blog-post-slug" />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-muted-foreground">Excerpt</label>
            <Textarea rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Short summary for listing pages..." />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-muted-foreground">Content</label>
            <Textarea rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Full blog post content (supports markdown)..." />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Cover Image URL</label>
              <Input value={form.cover_image} onChange={(e) => setForm({ ...form, cover_image: e.target.value })} placeholder="https://..." />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Author</label>
              <Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Author name" />
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <p className="mb-3 text-xs font-semibold uppercase text-muted-foreground">SEO Settings</p>
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">SEO Title</label>
                <Input value={form.seo_title} onChange={(e) => setForm({ ...form, seo_title: e.target.value })} placeholder="SEO title for search engines..." />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">SEO Description</label>
                <Textarea rows={2} value={form.seo_description} onChange={(e) => setForm({ ...form, seo_description: e.target.value })} placeholder="Meta description (max 160 chars)..." />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">SEO Keywords</label>
                <Input value={form.seo_keywords} onChange={(e) => setForm({ ...form, seo_keywords: e.target.value })} placeholder="keyword1, keyword2, keyword3" />
              </div>
            </div>
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
      )}

      <div className="mt-6 space-y-2">
        {posts.length === 0 && !creating ? (
          <p className="text-muted-foreground text-sm">No blog posts yet. Create your first post.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
              <div>
                <p className="font-medium text-foreground">{post.title}</p>
                <p className="text-xs text-muted-foreground">/{post.slug} · {post.author} · {post.is_published ? "Published" : "Draft"}</p>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" onClick={() => startEdit(post)}><Pencil className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
