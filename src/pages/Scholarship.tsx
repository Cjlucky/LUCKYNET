import { Seo } from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Scholarship = () => {
  return (
    <div className="container py-8">
      <Seo
        title="Scholarships | Luckynet"
        description="Explore available scholarships and financial aid opportunities for students."
        canonical="/scholarships"
      />

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Scholarships & Financial Aid</h1>
        <p className="text-muted-foreground">Discover opportunities to fund your education</p>
      </div>

      <Tabs defaultValue="government" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="government">Government</TabsTrigger>
            <TabsTrigger value="private">Private</TabsTrigger>
            <TabsTrigger value="institutional">Institutional</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="government">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "National Scholarship Portal",
                description: "Central government scholarships for various categories of students.",
                eligibility: "Varies by scheme",
                amount: "Up to ₹20,000 per year"
              },
              {
                title: "Post Matric Scholarship",
                description: "For SC/ST/OBC students pursuing higher education.",
                eligibility: "SC/ST/OBC students",
                amount: "Full tuition fee + maintenance"
              },
              {
                title: "AICTE Scholarship",
                description: "For students pursuing technical education.",
                eligibility: "Based on JEE rank/merit",
                amount: "Up to ₹50,000 per year"
              }
            ].map((scholarship, index) => (
              <Card 
                key={index} 
                className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-900/30 hover:-translate-y-1 border-border/50 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <CardHeader>
                  <CardTitle>{scholarship.title}</CardTitle>
                  <CardDescription>{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Eligibility:</span> {scholarship.eligibility}</p>
                    <p><span className="font-medium">Amount:</span> {scholarship.amount}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="private">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "TATA Scholarship",
                description: "For meritorious students from underprivileged backgrounds.",
                eligibility: "Family income < 6 LPA (Priority to TATA employees' children and ST category students from regions near TATA plants)",
                amount: "Up to ₹1,00,000 per year"
              },
              {
                title: "Reliance Foundation Scholarship",
                description: "For students with outstanding academic record and leadership potential.",
                eligibility: "Minimum 8.0 CGPA",
                amount: "Up to ₹2,00,000 per year",
                applyLink: "https://scholarships.reliancefoundation.org/UG_Scholarship.aspx"
              },
              {
                title: "Aditya Birla Scholarship",
                description: "For students with excellent academic record and financial need.",
                eligibility: "Minimum 8.5 CGPA",
                amount: "Up to ₹1,80,000 per year"
              },
              {
                title: "FFE Scholarship",
                description: "For first-year engineering students with financial need and academic potential.",
                eligibility: "1st year students, JEE Main rank < 90,000 or JCECEB CML rank < 1,000, Family income < ₹3 LPA, Passed intermediate after 2022",
                amount: "₹50,000 per year",
                benefits: [
                  "Covers tuition fees and academic expenses",
                  "Mentorship program",
                  "Skill development workshops"
                ],
                applyLink: "https://ffe.org/scholarships/#apply"
              },
              {
                title: "Siemens Scholarship Program 2025",
                description: "For first-year engineering students with financial need, with special focus on girl students.",
                eligibility: "1st year students, Age ≤ 20 years, Family income < ₹2,00,000 per year, 50% seats reserved for girls",
                amount: "Full tuition fee coverage + allowances",
                benefits: [
                  "Financial support for all 4 years of engineering",
                  "Laptop provided to scholars",
                  "Opportunity to visit Maharashtra, Karnataka, and Goa",
                  "Internship opportunities at Siemens",
                  "Covers tuition fees and other allowances"
                ],
                applyLink: "https://www.ssp-india.co.in/scholarship/apply"
              }
            ].map((scholarship, index) => (
              <Card 
                key={index} 
                className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-900/30 hover:-translate-y-1 border-border/50 hover:border-blue-200 dark:hover:border-blue-800 cursor-pointer"
                onClick={() => scholarship.applyLink && window.open(scholarship.applyLink, '_blank')}
              >
                <CardHeader>
                  <CardTitle>{scholarship.title}</CardTitle>
                  <CardDescription>{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Eligibility:</span> {scholarship.eligibility}</p>
                    <p><span className="font-medium">Amount:</span> {scholarship.amount}</p>
                    {scholarship.benefits && (
                      <div>
                        <p className="font-medium">Benefits:</p>
                        <ul className="list-disc list-inside">
                          {scholarship.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="institutional">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">BIT Sindri Alumni Association Scholarships</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Toppers Award - Sem 2 & 3",
                    description: "For all 10 branches",
                    eligibility: "1st and 2nd toppers from each branch",
                    amount: "1st: ₹4,000, 2nd: ₹3,000 (Total: ₹70,000)"
                  },
                  {
                    title: "Toppers Award - Sem 4 & 5",
                    description: "For all 10 branches",
                    eligibility: "1st and 2nd toppers from each branch",
                    amount: "1st: ₹4,000, 2nd: ₹3,000 (Total: ₹70,000)"
                  },
                  {
                    title: "Toppers Award - Sem 6 & 7",
                    description: "Across all branches",
                    eligibility: "Top 2 toppers",
                    amount: "1st: ₹4,000, 2nd: ₹3,000 (Total: ₹7,000)"
                  },
                  {
                    title: "Girls' Topper Award - Sem 2 & 3",
                    description: "Across all branches",
                    eligibility: "Top 2 female toppers",
                    amount: "1st: ₹4,000, 2nd: ₹3,000 (Total: ₹7,000)"
                  },
                  {
                    title: "Girls' Topper Award - Sem 4 & 5",
                    description: "Across all branches",
                    eligibility: "Top 2 female toppers",
                    amount: "1st: ₹4,000, 2nd: ₹3,000 (Total: ₹7,000)"
                  },
                  {
                    title: "BITSAA Bermo Chapter Scholarship",
                    description: "For economically weak students",
                    eligibility: "First year students",
                    amount: "2 scholarships of ₹10,000 each (Total: ₹20,000)"
                  },
                  {
                    title: "Sri S S Sahay Award",
                    description: "Instituted by Dr. B S Sahay",
                    eligibility: "Overall batch topper of Production Engineering",
                    amount: "₹10,000 per year"
                  },
                  {
                    title: "Late Padma Bhushan P.S. Sharan Award",
                    description: "Instituted by family members",
                    eligibility: "General topper of final year",
                    amount: "₹10,000 per year"
                  },
                  {
                    title: "Asharfi Singh Scholarship",
                    description: "Instituted by Sri Uma Shankar Singh",
                    eligibility: "Economically weak male student of first year",
                    amount: "₹10,000 per year"
                  },
                  {
                    title: "Ramsakhi Devi Scholarship",
                    description: "Instituted by Sri Uma Shankar Singh",
                    eligibility: "Female student (preference to financially handicapped)",
                    amount: "₹10,000 per year"
                  },
                  {
                    title: "N G Mitra Award",
                    description: "Instituted by Sri Sujit Mitra",
                    eligibility: "Financially handicapped student of any branch",
                    amount: "₹10,000 per year"
                  },
                  {
                    title: "S R Sharma Scholarship",
                    description: "For Electronics department students",
                    eligibility: "Financially handicapped student of Electronics branch",
                    amount: "₹1,000 per month (₹12,000 per year)"
                  }
                ].map((scholarship, index) => (
                  <Card 
                    key={index} 
                    className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-900/30 hover:-translate-y-1 border-border/50 hover:border-blue-200 dark:hover:border-blue-800"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{scholarship.title}</CardTitle>
                      <CardDescription>{scholarship.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Eligibility:</span> {scholarship.eligibility}</p>
                        <p><span className="font-medium">Amount:</span> {scholarship.amount}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">Total Scholarships: 31</p>
                <p className="font-medium">Total Amount: ₹2,43,000</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted/50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
        <ol className="space-y-2 list-decimal list-inside">
          <li>Check your eligibility for the desired scholarship</li>
          <li>Gather all required documents (income certificate, marksheets, etc.)</li>
          <li>Fill out the application form before the deadline</li>
          <li>Submit the form along with required documents</li>
          <li>Track your application status online</li>
        </ol>
      </div>
    </div>
  );
};

export default Scholarship;
