import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import StudyMaterial from "./pages/StudyMaterial";
import Chat from "./pages/Chat";
import Scholarship from "./pages/Scholarship";
import Layout from "./components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

const YouTube = () => (
  <section className="container py-12">
    <h1 className="text-3xl md:text-4xl font-bold mb-6">YouTube Channels</h1>
    <p className="text-muted-foreground mb-8">Curated channels by subject for first-year students.</p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        "MATHS",
        "PHYSICS",
        "MECHANICS",
        "CHEMISTRY",
        "EDCG",
        "BEEE",
        "MATE",
        "BME",
        "ENGG BIOLOGY",
        "IKS",
        "PPS",
      ].map((subject) => (
        <Card key={subject} className="card-elev">
          <CardHeader>
            <CardTitle className="text-lg">{subject}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Click below to view recommended channels.</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">View Channels</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{subject} — Recommended Channels</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  {subject === "MATHS" ? (
                    <>
                      <a
                        href="https://www.youtube.com/channel/UCbDs7CHAWVtyu81-6WIqZXg?view_as=subscriber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        MKS TUTORIALS
                      </a>
                      <a
                        href="https://www.youtube.com/@gajendrapurohit-GATE-NET-JAM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        GAJENDRA PUROHIT
                      </a>
                    </>
                  ) : subject === "PHYSICS" ? (
                    <>
                      <a
                        href="https://www.youtube.com/@actuallylife2107"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        ACTUALLY LIFE
                      </a>
                      <a
                        href="https://www.youtube.com/@pankajphysicsgulati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        PANKAJ PHYSICS GULATI
                      </a>
                    </>
                  ) : subject === "MECHANICS" ? (
                    <>
                      <a
                        href="https://www.youtube.com/watch?v=F1pqmhQ0Iz8&list=PLjtQ3BMex7huPZ48zpcyxqvCjEqz6EKru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        Physics Wallah — Engineering Mechanics Playlist
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=OvbSR3w61lQ&list=PLT3bOBUU3L9hADhGPsZjSddwAC3BvJDnl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        Engineering Mechanics — Playlist
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=Vb1aMHC1_BM&list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        Tickle's Academy — Engineering Mechanics Playlist
                      </a>
                    </>
                  ) : subject === "EDCG" ? (
                    <>
                      <a
                        href="https://www.youtube.com/watch?v=gp3oKSEnEFM&list=PLDN15nk5uLiD3MEUiqsYPnZOHcVu7um6_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        Tickle's Academy — EDCG Playlist
                      </a>
                    </>
                  ) : subject === "BEEE" ? (
                    <>
                      <a
                        href="https://www.youtube.com/watch?v=Vd2UJiIPbag&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        Engineers Ki Pathshala — BEEE Playlist
                      </a>
                    </>
                  ) : ["MATE", "BME", "ENGG BIOLOGY", "IKS", "CHEMISTRY"].includes(subject) ? (
                    <p className="text-muted-foreground">
                      Since there isn’t a dedicated channel for this subject, you can simply search for the topics and study them directly.
                    </p>
                  ) : (
                    <>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        Channel 1 (add link)
                      </a>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        Channel 2 (add link)
                      </a>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="block p-3 border rounded-md hover:bg-accent/20"
                      >
                        Channel 3 (add link)
                      </a>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/study" element={<StudyMaterial />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Analytics />
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
