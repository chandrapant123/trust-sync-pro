import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  cover_image: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  author: string | null;
  published_at: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    supabase.from("blog_posts").select("*").eq("slug", slug).eq("is_published", true).single().then(({ data, error }) => {
      if (error || !data) setNotFound(true);
      else setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <Layout><div className="flex min-h-[60vh] items-center justify-center"><p className="text-muted-foreground">Loading...</p></div></Layout>;
  if (notFound || !post) return <Navigate to="/blog" replace />;

  return (
    <Layout>
      <SEOHead
        title={post.seo_title || `${post.title} | VeriSekure Blog`}
        description={post.seo_description || post.excerpt || ""}
        keywords={post.seo_keywords || undefined}
      />

      <article>
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl text-center">
              <Link to="/blog" className="mb-4 inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-accent">
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
              </Link>
              <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">{post.title}</h1>
              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-primary-foreground/70">
                {post.author && <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>}
                {post.published_at && <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(post.published_at).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>}
              </div>
            </motion.div>
          </div>
        </section>

        {post.cover_image && (
          <div className="container mx-auto px-4 lg:px-8 -mt-8">
            <img src={post.cover_image} alt={post.title} className="mx-auto max-w-3xl w-full rounded-xl shadow-lg" />
          </div>
        )}

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="prose prose-lg mx-auto max-w-3xl text-foreground">
              {post.content?.split("\n").map((p, i) => p.trim() ? <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p> : null)}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
