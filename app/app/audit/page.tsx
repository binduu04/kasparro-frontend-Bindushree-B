'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, AlertCircle, AlertTriangle, XCircle, TrendingUp, Lightbulb, Menu, X } from 'lucide-react';
import auditDataJson from '@/data/audit-data.json';
import brandsData from '@/data/brands.json';
import { AuditModule, Issue, Recommendation, Insight, Brand } from '@/types';

type AuditDataType = {
  [key: string]: {
    brandId: string;
    timestamp: string;
    modules: AuditModule[];
  };
};

const auditData = auditDataJson as AuditDataType;
const typedBrands = brandsData as Brand[];

function ModuleSidebar({ 
  modules, 
  selectedModuleId, 
  onSelectModule 
}: { 
  modules: AuditModule[];
  selectedModuleId: string;
  onSelectModule: (id: string) => void;
}) {
  return (
    <div className="space-y-2">
      {modules.map((module) => {
        const isActive = module.id === selectedModuleId;
        const scorePercentage = (module.score.value / module.score.maxValue) * 100;
        const scoreColor = scorePercentage >= 80 ? 'bg-green-500' : scorePercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500';
        
        return (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className={`w-full text-left p-4 rounded-lg transition-all ${
              isActive
                ? 'bg-gray-800 dark:bg-gray-700 shadow-md border-2 border-primary'
                : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border dark:border-gray-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`font-medium text-sm ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {module.name}
              </span>
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                isActive 
                  ? 'bg-gray-900 dark:bg-gray-600 text-white' 
                  : scoreColor + ' text-white'
              }`}>
                {module.score.value}
              </span>
            </div>
            <div className={`w-full rounded-full h-1.5 ${isActive ? 'bg-gray-600 dark:bg-gray-500' : 'bg-gray-200 dark:bg-gray-600'}`}>
              <div
                className={isActive ? 'bg-primary' : scoreColor}
                style={{ width: `${scorePercentage}%`, height: '100%', borderRadius: '9999px' }}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

function IssueCard({ issue }: { issue: Issue }) {
  const getSeverityIcon = () => {
    switch (issue.severity) {
      case 'critical': return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'high': return <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />;
      case 'low': return <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const getSeverityColor = () => {
    switch (issue.severity) {
      case 'critical': return 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950';
      case 'high': return 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950';
      case 'medium': return 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950';
      case 'low': return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950';
    }
  };

  return (
    <div className={`p-4 rounded-lg border-l-4 ${getSeverityColor()}`}>
      <div className="flex items-start gap-3">
        {getSeverityIcon()}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">{issue.title}</h4>
            <Badge variant="outline" className="text-xs">
              {issue.severity}
            </Badge>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{issue.description}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <strong>Affected:</strong> {issue.affectedArea}
          </p>
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  const getPriorityColor = () => {
    switch (recommendation.priority) {
      case 'high': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case 'low': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
    }
  };

  const getEffortColor = () => {
    switch (recommendation.effort) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-green-600 dark:text-green-400';
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
      <div className="flex items-start gap-3 mb-3">
        <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">{recommendation.title}</h4>
            <Badge className={getPriorityColor()}>
              {recommendation.priority} priority
            </Badge>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{recommendation.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500 dark:text-gray-400">Expected Impact:</span>
              <p className="font-medium text-green-700 dark:text-green-400">{recommendation.expectedImpact}</p>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Effort:</span>
              <p className={`font-medium ${getEffortColor()}`}>
                {recommendation.effort.charAt(0).toUpperCase() + recommendation.effort.slice(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  const getTypeColor = () => {
    switch (insight.type) {
      case 'positive': return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950';
      case 'negative': return 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950';
      case 'neutral': return 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900';
    }
  };

  const getTypeIcon = () => {
    switch (insight.type) {
      case 'positive': return <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'negative': return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'neutral': return <TrendingUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  return (
    <div className={`p-4 rounded-lg border-l-4 ${getTypeColor()}`}>
      <div className="flex items-start gap-3">
        {getTypeIcon()}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{insight.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{insight.description}</p>
        </div>
      </div>
    </div>
  );
}

function AuditSkeleton() {
  return (
    <div className="flex h-[calc(100vh-73px)]">
      <div className="w-80 bg-gray-50 dark:bg-gray-900 border-r dark:border-gray-800 p-6">
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-4 w-48 mb-6" />
        <div className="space-y-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Skeleton key={i} className="h-20 w-full" />
          ))}
        </div>
      </div>
      <div className="flex-1 p-8">
        <Skeleton className="h-10 w-64 mb-4" />
        <Skeleton className="h-6 w-96 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
}

function ErrorState({ error }: { error: string }) {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-73px)] p-8">
      <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950 max-w-md">
        <CardHeader>
          <CardTitle className="text-red-900 dark:text-red-200">Error Loading Audit Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 dark:text-red-300 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AuditPage() {
  const [selectedBrandId, setSelectedBrandId] = useState<string>('brand-1');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const brandAudit = auditData[selectedBrandId];

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Validate data exists
        if (!brandAudit) {
          throw new Error(`No audit data found for brand: ${selectedBrandId}`);
        }
        
        if (brandAudit.modules.length === 0) {
          throw new Error('No modules found in audit data');
        }
        
        // Set first module as selected if none selected
        if (!selectedModuleId && brandAudit.modules.length > 0) {
          setSelectedModuleId(brandAudit.modules[0].id);
        }
        
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load audit data');
        setIsLoading(false);
      }
    };

    loadData();
  }, [selectedBrandId, brandAudit, selectedModuleId]);

  if (error) {
    return <ErrorState error={error} />;
  }

  if (isLoading || !selectedModuleId) {
    return <AuditSkeleton />;
  }
  
  const selectedModule = brandAudit.modules.find(m => m.id === selectedModuleId);

  if (!selectedModule) {
    return <ErrorState error="Selected module not found" />;
  }

  const scorePercentage = (selectedModule.score.value / selectedModule.score.maxValue) * 100;
  const scoreColor = scorePercentage >= 80 ? 'text-green-600' : scorePercentage >= 60 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="flex h-[calc(100vh-73px)] fade-in relative">
      {/* Backdrop Overlay for Mobile */}
      {mobileSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Mobile Menu Button - Fixed in bottom right */}
      <button
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-4 z-50 p-3 bg-white dark:bg-gray-900 text-primary border-2 border-primary rounded-full shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
        aria-label="Toggle module menu"
      >
        {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Left Sidebar - Slides in from left on mobile */}
      <div className={`
        ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:relative
        fixed top-0 left-0 h-full w-80 z-50
        bg-gray-50 dark:bg-gray-900 border-r dark:border-gray-800 
        p-6 overflow-y-auto
        transition-transform duration-300 ease-in-out
      `}>
        <div className="mb-6 slide-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Audit Modules</h2>
            {/* Close button for mobile */}
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          
          {/* Brand Selector */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Brand
            </label>
            <Select value={selectedBrandId} onValueChange={(value) => {
              setSelectedBrandId(value);
              setMobileSidebarOpen(false);
            }}>
              <SelectTrigger className="w-full bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                {typedBrands.map((brand) => (
                  <SelectItem key={brand.id} value={brand.id} className="dark:text-white dark:hover:bg-gray-700">
                    <div className="text-sm">
                      <div className="font-medium">{brand.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{brand.domain}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Select a module to view detailed analysis
          </p>
        </div>
        <ModuleSidebar
          modules={brandAudit.modules}
          selectedModuleId={selectedModuleId}
          onSelectModule={(moduleId) => {
            setSelectedModuleId(moduleId);
            setMobileSidebarOpen(false);
          }}
        />
      </div>

      {/* Main Panel - Module Details */}
      <div className="flex-1 overflow-y-auto">
        <div key={selectedModuleId} className="p-4 sm:p-6 md:p-8 fade-in">
          <div className="max-w-5xl mx-auto">
            {/* Module Header */}
            <div className="mb-6 sm:mb-8 slide-up">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedModule.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{selectedModule.description}</p>
              <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${scoreColor}`}>
                  {selectedModule.score.value}
                </span>
                <span className="text-xl sm:text-2xl text-gray-400 dark:text-gray-500">/ {selectedModule.score.maxValue}</span>
                <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">{selectedModule.score.label}</span>
              </div>
            </div>

            {/* Insights Section */}
            {selectedModule.insights.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Key Insights</h2>
                <div className="space-y-3">
                  {selectedModule.insights.map((insight) => (
                    <InsightCard key={insight.id} insight={insight} />
                  ))}
                </div>
              </div>
            )}

            {/* Issues Section */}
            {selectedModule.issues.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Issues & Flags ({selectedModule.issues.length})
                </h2>
                <div className="space-y-3">
                  {selectedModule.issues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} />
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations Section */}
            {selectedModule.recommendations.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Recommendations ({selectedModule.recommendations.length})
                </h2>
                <div className="space-y-3">
                  {selectedModule.recommendations.map((recommendation) => (
                    <RecommendationCard key={recommendation.id} recommendation={recommendation} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
