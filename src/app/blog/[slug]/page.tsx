import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CTAButton from '@/components/CTAButton';
import '../blog.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  try {
    const post = await getPostBySlug(slug);

    return (
      <>
        <Navbar />
        <main className="blog-post-container">
        <header className="blog-post-header">
          <div className="section-number">Article</div>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}</span>
          </div>
        </header>

        <div 
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="final-cta" style={{ marginTop: '100px', padding: '100px 0' }}>
          <h2 className="cta-title">Ready to build <strong>excellence</strong>?</h2>
          <p className="cta-description">
            Experience the senior-only difference. Let's discuss how we can accelerate your 2026 roadmap.
          </p>
          <CTAButton text="Book a Strategic Review" />
        </div>
      </main>
      </>
    );
  } catch (error) {
    notFound();
  }
}
