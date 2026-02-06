import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import './blog.css';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navbar />
      <main className="blog-container">
      <header className="blog-header">
        <div className="section-number">04</div>
        <h1 className="section-title">Insights & <strong>Expertise</strong></h1>
        <p className="section-description">
          Strategic perspectives on software engineering, AI integration, and digital transformation in 2026.
        </p>
      </header>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.slug} className="blog-card">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="blog-card-image"
            />
            <div className="blog-card-content">
              <span className="blog-card-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-description">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="blog-card-link">
                Read Article <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
    </>
  );
}
