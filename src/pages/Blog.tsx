import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  author: string | null;
  published_at: string | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("blog_posts").select("id, title, slug, excerpt, cover_image, author, published_at").eq("is_published", true).order("published_at", { ascending: false }).then(({ data }) => {
      setPosts(data ?? []);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <SEOHead title="Blog — VeriSekure | KYC, Verification & Compliance Insights" description="Read the latest articles on identity verification, KYC compliance, fraud prevention, and digital trust from VeriSekure experts." keywords="KYC blog, verification insights, identity fraud, compliance articles, VeriSekure blog" />

      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            VeriSekure Blog
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Insights on KYC, identity verification, fraud prevention, and compliance best practices for modern businesses.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No blog posts published yet. Check back soon!</p>
          ) : (
            <div className="mx-auto max-w-4xl grid gap-8">
              {posts.map((post, i) => (
                <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-lg">
                  {post.cover_image && (
                    <img src={post.cover_image} alt={post.title} className="h-48 w-full object-cover" />
                  )}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                      {post.author && <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>}
                      {post.published_at && <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.published_at).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>}
                    </div>
                    <h2 className="font-heading text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    {post.excerpt && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>}
                    <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
