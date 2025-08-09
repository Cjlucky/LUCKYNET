import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { useEffect, useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--pointer-x", `${x}px`);
      el.style.setProperty("--pointer-y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <Seo
        title="AI Career Counsellor | Luckynet"
        description="Transforming careers through innovation with AI guidance, blogs, and curated study material."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "AI Career Counsellor",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/search?q={query}",
            "query-input": "required name=query"
          }
        }}
      />
      <section ref={heroRef} className="container py-12 md:py-20 bg-spotlight">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <article>
            <header className="mb-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                <span className="text-accent">AI</span> Career Counsellor
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                Transforming careers through innovation — discover learning paths, insights, and resources tailored for you.
              </p>
            </header>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" className="px-6 py-3">Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </article>
          <aside className="relative w-full">
            {/* Spline 3D Model */}
            <div className="rounded-xl border border-border overflow-hidden card-elev">
              <spline-viewer
                url="https://prod.spline.design/3eBniBFIfLqZQBXZ/scene.splinecode"
                style={{ width: "100%", height: "520px" }}
              ></spline-viewer>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Index;
