import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Seo } from "@/components/Seo";
import { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// First Year Resources
const firstYearResources = {
  "2024-25": [
    { title: "Engineering Chemistry", level: "Beginner" },
    { title: "Engineering Mechanics", level: "Expert" },
    { title: "Engineering Physics", level: "Intermediate" },
    { title: "Engineering Mathematics 1", level: "Expert" },
    { title: "Engineering Drawing", level: "Expert" },
    { title: "Engineering Biology", level: "Beginner" },
    { title: "Programming for Problem Solving", level: "Expert" },
    { title: "Indian Knowledge System", level: "Beginner" },
    { title: "Basic Mechanical Engineering", level: "Intermediate" },
    { title: "Basic Materials Engineering", level: "Intermediate" },
    { title: "Engineering Mathematics 2", level: "Expert" },
    { title: "Basic Electrical & Electronics Engineering", level: "Expert" }
  ],
  "2023-24": [
    { title: "Engineering Chemistry", level: "Beginner" },
    { title: "Engineering Mechanics", level: "Expert" },
    { title: "Engineering Physics", level: "Intermediate" },
    { title: "Engineering Mathematics 1", level: "Expert" },
    { title: "Engineering Drawing", level: "Expert" },
    { title: "Engineering Biology", level: "Beginner" },
    { title: "Programming for Problem Solving", level: "Expert" },
    { title: "Indian Knowledge System", level: "Beginner" },
    { title: "Basic Mechanical Engineering", level: "Intermediate" },
    { title: "Basic Materials Engineering", level: "Intermediate" },
    { title: "Engineering Mathematics 2", level: "Expert" },
    { title: "Basic Electrical & Electronics Engineering", level: "Expert" }
  ]
};

// Placeholder for Second and Third Year
const secondYearResources = {
  "2024-25": [
    // Add second year subjects here when available
  ],
  "2023-24": [
    // Add second year subjects here when available
  ]
};

const thirdYearResources = {
  "2024-25": [
    // Add third year subjects here when available
  ],
  "2023-24": [
    // Add third year subjects here when available
  ]
};

const StudyMaterial = () => {
  const [activeYear, setActiveYear] = useState("first");
  const [activeAcademicYear, setActiveAcademicYear] = useState("2024-25");

  const renderResourceCard = (resource: { title: string; level: string }, year: string, academicYear: string) => {
    // Define download links for specific resources
    const downloadLinks: Record<string, string> = {
      "Engineering Mechanics-2024-25": "https://drive.google.com/uc?export=download&id=1ePewxsXt1QeZY04Vtai3AcBfUZpKj4Bb",
      "Engineering Chemistry-2024-25": "https://drive.google.com/uc?export=download&id=1As8ojKsYcMt18TxahNrGFnnRFlE3gQPc",
      "Basic Electrical & Electronics Engineering-2024-25": "https://drive.google.com/uc?export=download&id=1aMBLxUukDXV0IpfS1tZvtf1ojir8-0Cn",
      "Engineering Mathematics 1-2024-25": "https://drive.google.com/uc?export=download&id=14bLxs6ijMWuxSGT7VbrLHQNmPb-RgfeD"
    };

    const linkKey = `${resource.title}-${academicYear}`;
    const downloadLink = downloadLinks[linkKey];

    return (
      <Card key={`${year}-${academicYear}-${resource.title}`} className="card-elev">
        <CardHeader>
          <CardTitle className="text-lg">{resource.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-muted-foreground">{resource.level}</p>
          <div className="flex items-center gap-2">
            {downloadLink ? (
              <Button variant="secondary" asChild>
                <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                  PYQs
                </a>
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                PYQs
              </Button>
            )}
            {resource.title === "Programming for Problem Solving" ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Notes</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Programming for Problem Solving - Notes</DialogTitle>
                  </DialogHeader>
                  <div className="flex gap-3">
                    <Button variant="secondary">Notes-1</Button>
                    <Button variant="secondary">Notes-2</Button>
                  </div>
                  <DialogFooter />
                </DialogContent>
              </Dialog>
            ) : resource.title === "Engineering Mathematics 2" ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Notes</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Engineering Mathematics 2 - Notes</DialogTitle>
                  </DialogHeader>
                  <div className="flex gap-3">
                    <Button variant="secondary">UNIT 1</Button>
                    <Button variant="secondary">UNIT 2</Button>
                    <Button variant="secondary">UNIT 3</Button>
                  </div>
                  <DialogFooter />
                </DialogContent>
              </Dialog>
            ) : (
              <Button variant="outline" disabled title="Notes link coming soon">
                Notes
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderYearTabs = () => {
    const years = [
      { id: "first", label: "First Year" },
      { id: "second", label: "Second Year" },
      { id: "third", label: "Third Year" }
    ];

    return (
      <TabsList className="grid w-full grid-cols-3 mb-8">
        {years.map((year) => (
          <TabsTrigger
            key={year.id}
            value={year.id}
            onClick={() => setActiveYear(year.id)}
            className={activeYear === year.id ? "font-semibold" : ""}
          >
            {year.label}
          </TabsTrigger>
        ))}
      </TabsList>
    );
  };

  const renderAcademicYearTabs = () => {
    const academicYears = ["2024-25", "2023-24"];
    
    return (
      <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
        {academicYears.map((year) => (
          <TabsTrigger
            key={year}
            value={year}
            onClick={() => setActiveAcademicYear(year)}
            className={activeAcademicYear === year ? "font-semibold" : ""}
          >
            {year}
          </TabsTrigger>
        ))}
      </TabsList>
    );
  };

  const renderYearContent = (year: string) => {
    let resources: Record<string, Array<{title: string, level: string}>>;
    
    switch (year) {
      case "first":
        resources = firstYearResources;
        break;
      case "second":
        resources = secondYearResources;
        break;
      case "third":
        resources = thirdYearResources;
        break;
      default:
        resources = firstYearResources;
    }

    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">
          {year === "first" ? "First" : year === "second" ? "Second" : "Third"} Year
        </h2>
        
        <Tabs defaultValue="2024-25" className="w-full">
          {renderAcademicYearTabs()}
          
          {Object.entries(resources).map(([academicYear, subjects]) => (
            <TabsContent key={academicYear} value={academicYear}>
              {subjects.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {subjects.map((subject) => 
                    renderResourceCard(subject, year, academicYear)
                  )}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-muted-foreground">
                    No papers available for {academicYear} yet.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  };

  return (
    <>
      <Seo 
        title="Study Material | AI Career Counsellor" 
        description="Access study materials and papers from different academic years." 
        canonical="/study" 
        jsonLd={{"@context":"https://schema.org","@type":"CollectionPage"}} 
      />
      
      <section className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Study Material</h1>
        
        <Tabs defaultValue="first" className="w-full">
          {renderYearTabs()}
          <TabsContent value="first">
            {renderYearContent("first")}
          </TabsContent>
          <TabsContent value="second">
            {renderYearContent("second")}
          </TabsContent>
          <TabsContent value="third">
            {renderYearContent("third")}
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default StudyMaterial;