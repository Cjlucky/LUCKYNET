import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const team = [
  { name: "Lucky Chatterjee" },
  { name: "Rishav Agarwal" },
  { name: "Subham Mohanty" },
  { name: "Saket Dubey" },
];

const About = () => {
  return (
    <>
      <Seo
        title="About | AI Career Counsellor"
        description="Meet the team behind AI Career Counsellor."
        canonical="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About – AI Career Counsellor",
        }}
      />
      <section className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About</h1>
        <p className="text-muted-foreground max-w-2xl mb-10">We are building an AI-powered career counselling experience to help learners make confident, informed choices.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden card-elev">
              <CardHeader>
                <CardTitle className="text-base tracking-wide uppercase">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={member.name === "Saket Dubey" 
                    ? "/lovable-uploads/1a595641-c74a-4e85-9126-4a474a216b04.png"
                    : member.name === "Lucky Chatterjee"
                    ? "/lovable-uploads/e21ae413-a090-41dd-b8fc-883a29357cde.png"
                    : member.name === "Rishav Agarwal"
                    ? "/lovable-uploads/da8d46a7-f075-46bf-9052-9c94c10b4aee.png"
                    : member.name === "Subham Mohanty"
                    ? "/lovable-uploads/29bba71b-6720-4f5b-bc17-02a830a63b1a.png"
                    : "/placeholder.svg"}
                  alt={(member.name === "Saket Dubey" || member.name === "Lucky Chatterjee" || member.name === "Rishav Agarwal" || member.name === "Subham Mohanty") ? "Team member photo" : `Team member placeholder: ${member.name}`}
                  loading="lazy"
                  className="w-full rounded-md border border-border"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
