import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { ArrowRight, Brain, Target, TrendingUp, Search, Shield, Lightbulb, BarChart3 } from 'lucide-react';

export default function Home() {
  const modules = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Content Analysis',
      description: 'Deep analysis of content quality, relevance, and AI-friendliness'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'E-E-A-T Assessment',
      description: 'Evaluate Experience, Expertise, Authoritativeness, and Trust signals'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Keyword Optimization',
      description: 'AI-first keyword targeting for conversational search'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Technical SEO',
      description: 'Infrastructure audit for AI crawler accessibility'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Competitor Analysis',
      description: 'Benchmark against competitors in AI-powered search'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Visibility',
      description: 'Track presence in ChatGPT, Perplexity, Gemini responses'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Brand Sentiment',
      description: 'Analyze how AI models characterize your brand'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      
      <main className="flex-1 fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center slide-up">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Win the AI-First Search Era
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Kasparro is an AI-native SEO & Brand Intelligence platform that helps you dominate 
                AI-powered search engines like ChatGPT, Perplexity, and Gemini.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/app/dashboard">
                  <Button size="lg" className="gap-2">
                    Run AI-SEO Audit <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI-SEO Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Why AI-SEO is Different
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-8">
                <ScrollReveal delay={100}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Traditional SEO</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-600 dark:text-gray-400">
                      <ul className="space-y-2">
                        <li>• Optimizes for Google&apos;s algorithm</li>
                        <li>• Focuses on keyword rankings</li>
                      <li>• Driven by backlinks and CTR</li>
                      <li>• Page-centric approach</li>
                    </ul>
                  </CardContent>
                </Card>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle className="text-primary">AI-Native SEO</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400">
                    <ul className="space-y-2">
                      <li>• Optimizes for AI model comprehension</li>
                      <li>• Focuses on context and relevance</li>
                      <li>• Driven by E-E-A-T and structured data</li>
                      <li>• Brand-centric approach</li>
                    </ul>
                  </CardContent>
                </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Core Modules Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  7 Core Audit Modules
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
                  Comprehensive analysis across all dimensions of AI-first search performance
                </p>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                          {module.icon}
                        </div>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                  </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                  How Kasparro Works
                </h2>
              </ScrollReveal>
              
              <div className="space-y-8">
                <ScrollReveal delay={100}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Input Assembly</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We crawl your website, analyze your content, and gather comprehensive data about 
                        your digital presence across all relevant channels.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Context Packing</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Our AI enriches your data with competitive intelligence, industry benchmarks, 
                        and AI model behavior patterns.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={300}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Multi-Module Analysis</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        7 specialized AI agents analyze different aspects of your AI-SEO performance, 
                        identifying strengths, weaknesses, and opportunities.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Actionable Insights</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Receive prioritized recommendations with expected impact, effort estimates, 
                        and implementation guidance.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary dark:bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">
                Ready to Dominate AI-Powered Search?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get a comprehensive AI-SEO audit and discover how your brand performs 
                in ChatGPT, Perplexity, and Gemini.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/app/dashboard">
                <Button size="lg" className="gap-2 border-2 border-white animate-pulse-glow hover:scale-105 transition-transform">
                  Start Your Free Audit <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
