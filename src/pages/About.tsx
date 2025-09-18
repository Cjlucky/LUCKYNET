import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const team = [
  { name: "Lucky Chatterjee (ADMIN)" },
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
        <div className="space-y-4 max-w-3xl mb-10">
          <h2 className="text-2xl font-semibold">About LUCKYNET</h2>
          <p className="text-muted-foreground">
            Welcome to LUCKYNET – a platform built with first-year students in mind. Starting your college journey can feel overwhelming, but you don’t have to do it alone. LUCKYNET is here to connect juniors with the resources, guidance, and community they need to thrive.
          </p>
          <p className="text-muted-foreground">
            Our mission is simple: to make the transition into college life smoother, easier, and more empowering. Whether you’re looking for academic tips, campus navigation support, mentorship opportunities, or a safe space to share your questions, LUCKYNET is your go-to hub.
          </p>
          <p className="text-muted-foreground">
            At LUCKYNET, we believe every student deserves a lucky start. By bridging the gap between experience and curiosity, we help juniors gain confidence, find direction, and build lasting connections.
          </p>
          <p className="text-muted-foreground">
            Together, let’s turn your first year into the foundation of something great.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => {
            // Different animation delays for each card
            const delay = index * 0.2;
            return (
              <div key={member.name} className="group relative">
                <div 
                  className="absolute -inset-1 rounded-lg blur opacity-0 group-hover:opacity-70 transition-all duration-300 group-hover:duration-200"
                  style={{
                    background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient 15s ease infinite',
                    animationDelay: `${delay}s`,
                  }}
                ></div>
                <Card className="relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-base tracking-wide uppercase">
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative overflow-hidden rounded-md">
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                          backgroundSize: '400% 400%',
                          animation: 'gradient 15s ease infinite',
                          animationDelay: `${delay}s`,
                        }}
                      ></div>
                      <img
                        src={member.name === "Saket Dubey" 
                          ? "/lovable-uploads/1a595641-c74a-4e85-9126-4a474a216b04.png"
                          : member.name === "Lucky Chatterjee (ADMIN)"
                          ? "/lovable-uploads/e21ae413-a090-41dd-b8fc-883a29357cde.png"
                          : member.name === "Rishav Agarwal"
                          ? "/lovable-uploads/da8d46a7-f075-46bf-9052-9c94c10b4aee.png"
                          : member.name === "Subham Mohanty"
                          ? "/lovable-uploads/29bba71b-6720-4f5b-bc17-02a830a63b1a.png"
                          : "/placeholder.svg"}
                        alt={member.name}
                        loading="lazy"
                        className="w-full border border-border transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
                <style jsx global>{`
                  @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                `}</style>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Email us at{" "}
                <a href="mailto:cjluckybit@gmail.com" className="underline underline-offset-4">
                  cjluckybit@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default About;
