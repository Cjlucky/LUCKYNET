import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const posts = [
  { title: "How AI Shapes Modern Careers", excerpt: "Emerging roles, augmented skills, and smarter paths." },
  { title: "Building a Learning Roadmap", excerpt: "From fundamentals to mastery with measurable steps." },
  { title: "Interview Prep with AI", excerpt: "Targeted practice and feedback loops that work." },
];

const Blogs = () => {
  return (
    <>
      <Seo title="Blogs | AI Career Counsellor" description="Insights and guides on careers, skills, and learning." canonical="/blogs" jsonLd={{"@context":"https://schema.org","@type":"Blog"}} />
      <section className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Blogs</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="card-elev">
              <Card>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{p.excerpt}</p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
