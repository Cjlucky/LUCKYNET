import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const team = [
  { name: "Lucky Chatterjee (ADMIN)" },
  { name: "Rishav Agarwal" },
  { name: "Subham Mohanty" },
  { name: "Saket Dubey" },
  { name: "Prajjwal Jha" },
  { name: "LUCKY KUMAR" },
  { name: "Priyanshu Shahdeo" },
  { name: "Rakesh Kumar Mahato" },

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
        <div className="flex flex-col items-center w-full">
          {/* Lucky Chatterjee's Card - Centered and Larger */}
          <div className="w-full max-w-2xl mb-12 mx-auto">
            {team.filter(member => member.name === "Lucky Chatterjee (ADMIN)").map((member, index) => (
              <div key={member.name} className="group relative">
                <div 
                  className="absolute -inset-1 rounded-lg blur opacity-0 group-hover:opacity-70 transition-all duration-300 group-hover:duration-200"
                  style={{
                    background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient 15s ease infinite',
                    animationDelay: '0s',
                  }}
                ></div>
                <Card className="relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold tracking-wide uppercase">
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
                          animationDelay: '0s',
                        }}
                      ></div>
                      <img
                        src="/lovable-uploads/e21ae413-a090-41dd-b8fc-883a29357cde.png"
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-96 object-cover border border-border transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Other Team Members - 2 rows of 2 cards */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {team.filter(member => member.name !== "Lucky Chatterjee (ADMIN)").map((member, index) => {
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
                    <Card className="relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg h-full min-h-[380px] flex flex-col">
                      <CardHeader className="text-center">
                        <CardTitle className="text-sm font-medium tracking-wide uppercase">
                          {member.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="relative overflow-hidden rounded-md flex-1 flex">
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
                            alt={member.name}
                            loading="lazy"
                            className={`w-full h-72 object-cover border border-border transition-transform duration-500 group-hover:scale-105 ${
                              member.name === "LUCKY KUMAR" ? 'object-[center_30%]' : 
                              member.name === "Priyanshu Shahdeo" ? 'object-center' : 'object-top'
                            }`}
                            src={member.name === "LUCKY KUMAR" 
                              ? "/lovable-uploads/Lucky%20Kumar.jpg"
                              : member.name === "Saket Dubey" 
                              ? "/lovable-uploads/1a595641-c74a-4e85-9126-4a474a216b04.png"
                              : member.name === "Rishav Agarwal"
                              ? "/lovable-uploads/da8d46a7-f075-46bf-9052-9c94c10b4aee.png"
                              : member.name === "Subham Mohanty"
                              ? "/lovable-uploads/29bba71b-6720-4f5b-bc17-02a830a63b1a.png"
                              : member.name === "Priyanshu Shahdeo"
                              ? "/lovable-uploads/Priyanshu.jpg"
                              : member.name === "Rakesh Kumar Mahato"
                              ? "/lovable-uploads/RRR.png"
                              : "/lovable-uploads/prajjwal-jha.png.png"}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
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
