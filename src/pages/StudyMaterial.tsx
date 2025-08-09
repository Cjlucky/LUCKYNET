import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const resources = [
  { title: "Data Structures Essentials", level: "Beginner" },
  { title: "Machine Learning Primer", level: "Intermediate" },
  { title: "System Design Basics", level: "Intermediate" },
  { title: "Portfolio & Resume Kit", level: "All levels" },
];

const StudyMaterial = () => {
  return (
    <>
      <Seo title="Study Material | AI Career Counsellor" description="Curated learning resources to level up your skills." canonical="/study" jsonLd={{"@context":"https://schema.org","@type":"CollectionPage"}} />
      <section className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Study Material</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r) => (
            <Card key={r.title} className="card-elev">
              <CardHeader>
                <CardTitle className="text-lg">{r.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="text-muted-foreground">{r.level}</p>
                <Button variant="secondary">Open</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default StudyMaterial;
