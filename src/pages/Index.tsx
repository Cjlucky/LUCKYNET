import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    // Force a full page reload after navigation to ensure the page loads correctly
    navigate('/chat');
    window.location.reload();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen Spline background */}
      <div className="fixed inset-0 h-[110vh] w-full">
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-background">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          </div>
        )}
        <iframe
          src="https://my.spline.design/pushittothelimit-ZqqPumfncgBQB6FcB3mfmBhO/"
          className={`h-[110vh] w-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          title="3D Scene"
          frameBorder="0"
          allowFullScreen
          style={{ transform: 'scale(1.1)', transformOrigin: 'top center' }}
        />
      </div>

      {/* Content container with conditional blur */}
      <div 
        className={`fixed inset-0 transition-all duration-300 ${
          isHovered 
            ? 'bg-background/70 backdrop-blur-sm' 
            : 'pointer-events-none bg-transparent backdrop-blur-none'
        }`}
      >
        <div 
          ref={heroRef}
          className="container relative mx-auto flex h-full flex-col items-start justify-center px-4 py-24 md:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 max-w-2xl rounded-2xl bg-background/80 p-8 backdrop-blur-sm">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              AI-Powered Career Guidance
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                
              </span>
            </h1>
            <p className="mb-8 text-lg text-foreground md:text-xl">
              Discover your career path with personalized AI guidance and resources
              to help you succeed in your professional journey.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/chat"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12"
              >
                Get Started
              </a>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
