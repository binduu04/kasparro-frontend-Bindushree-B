import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollRevealLeft } from '@/components/shared/ScrollRevealLeft';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <div className="p-4 sm:p-8 fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 slide-up">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">System Architecture</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Visual representation of the Kasparro AI-SEO audit pipeline
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="space-y-6 sm:space-y-8">
          {/* Input Assembler */}
          <ScrollRevealLeft delay={0}>
            <Card className="border-l-4 border-blue-500">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl">1. Input Assembler</CardTitle>
                  <CardDescription className="text-sm sm:text-base mt-2">
                    Data collection and normalization layer
                  </CardDescription>
                </div>
                <div className="text-3xl sm:text-4xl flex-shrink-0">📥</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-semibold dark:text-white mb-3">Data Sources</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Website crawling (content, structure, meta)</li>
                    <li>• Technical infrastructure analysis</li>
                    <li>• Schema markup extraction</li>
                    <li>• Performance metrics collection</li>
                    <li>• Sitemap and robots.txt parsing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white mb-3">Output</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded border dark:border-gray-700 text-xs sm:text-sm font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
                    <div>{'{'}</div>
                    <div className="ml-4">domain: &quot;techvision.io&quot;,</div>
                    <div className="ml-4">pages: [&nbsp;&#123;...&#125;,&nbsp;&#123;...&#125;&nbsp;],</div>
                    <div className="ml-4">technical: &#123;...&#125;,</div>
                    <div className="ml-4">content: [&nbsp;&#123;...&#125;&nbsp;]</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollRevealLeft>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>

          {/* Context Pack */}
          <ScrollRevealLeft delay={100}>
            <Card className="border-l-4 border-purple-500">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl">2. Context Pack</CardTitle>
                  <CardDescription className="text-sm sm:text-base mt-2">
                    Data enrichment and competitive intelligence layer
                  </CardDescription>
                </div>
                <div className="text-3xl sm:text-4xl flex-shrink-0">🔍</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-semibold dark:text-white mb-3">Enrichment Sources</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Competitor analysis data</li>
                    <li>• Industry benchmarks</li>
                    <li>• AI model behavior patterns</li>
                    <li>• Citation and mention tracking</li>
                    <li>• Third-party authority signals</li>
                    <li>• Historical performance data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white mb-3">Enriched Context</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded border dark:border-gray-700 text-sm font-mono text-gray-700 dark:text-gray-300">
                    <div>{'{'}</div>
                    <div className="ml-4">inputData: &#123;...&#125;,</div>
                    <div className="ml-4">competitors: [&nbsp;&#123;...&#125;&nbsp;],</div>
                    <div className="ml-4">benchmarks: &#123;...&#125;,</div>
                    <div className="ml-4">aiVisibility: &#123;...&#125;</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollRevealLeft>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>

          {/* Audit Modules */}
          <ScrollRevealLeft delay={200}>
            <Card className="border-l-4 border-green-500">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl">3. Audit Modules (7 Parallel Agents)</CardTitle>
                  <CardDescription className="text-sm sm:text-base mt-2">
                    Specialized AI agents for multi-dimensional analysis
                  </CardDescription>
                </div>
                <div className="text-3xl sm:text-4xl flex-shrink-0">⚙️</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Content Analysis', focus: 'Quality, relevance, AI-friendliness' },
                  { name: 'E-E-A-T Assessment', focus: 'Trust and authority signals' },
                  { name: 'Keyword Optimization', focus: 'AI-first keyword targeting' },
                  { name: 'Technical SEO', focus: 'Infrastructure & crawlability' },
                  { name: 'Competitor Analysis', focus: 'Competitive benchmarking' },
                  { name: 'AI Visibility', focus: 'Presence in AI search results' },
                  { name: 'Brand Sentiment', focus: 'AI model brand characterization' },
                ].map((module, index) => (
                  <div key={index} className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold dark:text-white text-sm mb-1">{module.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{module.focus}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="font-semibold dark:text-white mb-2">Each Module Produces:</h4>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded border dark:border-gray-700 text-sm font-mono text-gray-700 dark:text-gray-300">
                  <div>{'{'}</div>
                  <div className="ml-4">score: &#123;&nbsp;value,&nbsp;maxValue,&nbsp;label&nbsp;&#125;</div>
                  <div className="ml-4">insights: [&nbsp;&#123;...&#125;&nbsp;],</div>
                  <div className="ml-4">issues: [&nbsp;&#123;...&#125;&nbsp;],</div>
                  <div className="ml-4">recommendations: [&nbsp;&#123;...&#125;&nbsp;]</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollRevealLeft>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </div>

          {/* Output Surface */}
          <ScrollRevealLeft delay={300}>
            <Card className="border-l-4 border-orange-500">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl">4. Output Surface</CardTitle>
                  <CardDescription className="text-sm sm:text-base mt-2">
                    User-facing insights and dashboards
                  </CardDescription>
                </div>
                <div className="text-3xl sm:text-4xl flex-shrink-0">📊</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold dark:text-white mb-2">Dashboard</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• AI Visibility Score</li>
                    <li>• Trust / E-E-A-T Score</li>
                    <li>• Keyword Coverage</li>
                    <li>• Audit timestamp</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold dark:text-white mb-2">Audit View</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Module-by-module analysis</li>
                    <li>• Detailed scores</li>
                    <li>• Issues & flags</li>
                    <li>• Prioritized recommendations</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold dark:text-white mb-2">Insights</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Positive findings</li>
                    <li>• Areas of concern</li>
                    <li>• Competitive position</li>
                    <li>• Trend analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollRevealLeft>
        </div>

        {/* Technical Notes */}
        <ScrollRevealLeft delay={400}>
          <Card className="mt-8 bg-gray-50 dark:bg-gray-900">
          <CardHeader>
            <CardTitle>Technical Implementation Notes</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 dark:text-gray-300">
            <ul className="space-y-2">
              <li>
                <strong>Data Flow:</strong> Unidirectional pipeline ensures clean separation of concerns 
                and enables independent scaling of each component.
              </li>
              <li>
                <strong>Parallelization:</strong> All 7 audit modules run in parallel, reducing total 
                analysis time while maintaining comprehensive coverage.
              </li>
              <li>
                <strong>State Management:</strong> Context Pack serves as centralized state for all modules, 
                ensuring consistency and reducing redundant API calls.
              </li>
              <li>
                <strong>Modularity:</strong> Each audit module is independently testable and can be 
                updated without affecting others.
              </li>
              <li>
                <strong>Type Safety:</strong> Strongly typed interfaces throughout ensure data contract 
                integrity across the pipeline.
              </li>
            </ul>
          </CardContent>
        </Card>
        </ScrollRevealLeft>
      </div>
    </div>
  );
}
