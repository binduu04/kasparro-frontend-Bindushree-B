import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollRevealLeft } from '@/components/shared/ScrollRevealLeft';
import { Database, Brain, FileSearch, BarChart, ArrowRight } from 'lucide-react';

export default function PlatformPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center slide-up">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Kasparro Platform
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A comprehensive AI-native SEO intelligence system designed for the 
                future of search: ChatGPT, Perplexity, Gemini, and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Audit Pipeline Flow */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollRevealLeft>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                  The Audit Pipeline
                </h2>
              </ScrollRevealLeft>
              
              <div className="grid md:grid-cols-4 gap-6">
                <ScrollRevealLeft delay={100}>
                  <Card className="relative h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                        <Database className="w-6 h-6" />
                      </div>
                      <CardTitle>Input Assembler</CardTitle>
                      <CardDescription>
                        Crawls and aggregates your digital presence data
                      </CardDescription>
                    </CardHeader>
                    <div className="absolute -right-3 top-1/2 hidden md:block">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  </Card>
                </ScrollRevealLeft>

                <ScrollRevealLeft delay={200}>
                  <Card className="relative h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                        <FileSearch className="w-6 h-6" />
                      </div>
                      <CardTitle>Context Pack</CardTitle>
                      <CardDescription>
                        Enriches data with competitive and industry intelligence
                      </CardDescription>
                    </CardHeader>
                    <div className="absolute -right-3 top-1/2 hidden md:block">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  </Card>
                </ScrollRevealLeft>

                <ScrollRevealLeft delay={300}>
                  <Card className="relative h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                        <Brain className="w-6 h-6" />
                      </div>
                      <CardTitle>Audit Modules</CardTitle>
                      <CardDescription>
                        7 AI agents analyze different performance dimensions
                      </CardDescription>
                    </CardHeader>
                    <div className="absolute -right-3 top-1/2 hidden md:block">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  </Card>
                </ScrollRevealLeft>

                <ScrollRevealLeft delay={400}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                        <BarChart className="w-6 h-6" />
                      </div>
                    <CardTitle>Output Surface</CardTitle>
                    <CardDescription>
                      Actionable insights, scores, and recommendations
                    </CardDescription>
                  </CardHeader>
                </Card>
                </ScrollRevealLeft>
              </div>
            </div>
          </div>
        </section>

        {/* Data Consumption */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                What Data Kasparro Consumes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Website</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <ul className="space-y-2">
                      <li>• Page content and structure</li>
                      <li>• Meta data and schema markup</li>
                      <li>• Technical infrastructure</li>
                      <li>• Internal linking architecture</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>External Signals</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300">
                    <ul className="space-y-2">
                      <li>• AI search engine responses</li>
                      <li>• Competitor content analysis</li>
                      <li>• Industry benchmarks</li>
                      <li>• Citation and mention tracking</li>
                      <li>• Third-party authority signals</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Outputs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                What Brands Receive
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Scores</CardTitle>
                    <CardDescription>
                      AI Visibility, E-E-A-T Trust, Keyword Coverage, and more - all benchmarked 
                      against your industry and competitors.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Insights</CardTitle>
                    <CardDescription>
                      Deep analysis of what&apos;s working, what&apos;s not, and why - with context 
                      specific to AI-first search behavior.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prioritized Issues</CardTitle>
                    <CardDescription>
                      Severity-ranked problems affecting your AI search performance, with clear 
                      explanations of impact and affected areas.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actionable Recommendations</CardTitle>
                    <CardDescription>
                      Step-by-step guidance with effort estimates, expected impact, and 
                      implementation priorities.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiation */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                How Kasparro Differs from Traditional SEO Tools
              </h2>
              
              <div className="space-y-6">
                <ScrollRevealLeft delay={0}>
                  <Card className="border-l-4 border-primary">
                    <CardHeader>
                      <CardTitle>AI-First, Not Google-First</CardTitle>
                      <CardDescription>
                        While traditional tools optimize for Google&apos;s algorithm, Kasparro optimizes 
                        for how AI models understand, process, and cite your content.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollRevealLeft>

                <ScrollRevealLeft delay={100}>
                  <Card className="border-l-4 border-primary">
                    <CardHeader>
                      <CardTitle>Brand-Centric Intelligence</CardTitle>
                      <CardDescription>
                        We don&apos;t just track keyword rankings. We measure how AI models characterize 
                        your brand, understand your expertise, and position you against competitors.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollRevealLeft>

                <ScrollRevealLeft delay={200}>
                  <Card className="border-l-4 border-primary">
                    <CardHeader>
                      <CardTitle>Real AI Search Data</CardTitle>
                      <CardDescription>
                        Direct measurement of your presence in ChatGPT, Perplexity, Gemini, and other 
                        AI search engines - not proxies or estimates.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollRevealLeft>

                <ScrollRevealLeft delay={300}>
                  <Card className="border-l-4 border-primary">
                    <CardHeader>
                      <CardTitle>Context Over Keywords</CardTitle>
                      <CardDescription>
                        AI models care about semantic meaning and topical authority, not exact-match 
                        keywords. Our analysis reflects that reality.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollRevealLeft>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
