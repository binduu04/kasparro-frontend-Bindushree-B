'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, TrendingDown, Minus, Brain, Shield, Target } from 'lucide-react';
import brandsData from '@/data/brands.json';
import snapshotsData from '@/data/dashboard-snapshots.json';
import { Brand, DashboardSnapshot, Score } from '@/types';

type SnapshotsData = {
  [key: string]: DashboardSnapshot;
};

const typedBrands = brandsData as Brand[];
const typedSnapshots = snapshotsData as SnapshotsData;

function ScoreCard({ score, icon: Icon }: { score: Score; icon: React.ElementType }) {
  const getTrendIcon = () => {
    if (!score.trend) return null;
    if (score.trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />;
    if (score.trend === 'down') return <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />;
    return <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
  };

  const getScoreColor = () => {
    const percentage = (score.value / score.maxValue) * 100;
    if (percentage >= 80) return 'text-green-600 dark:text-green-400';
    if (percentage >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {score.label}
        </CardTitle>
        <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl font-bold ${getScoreColor()}`}>
            {score.value}
          </span>
          <span className="text-gray-500 dark:text-gray-400">/ {score.maxValue}</span>
          {getTrendIcon()}
        </div>
      </CardContent>
    </Card>
  );
}

function DashboardSkeleton() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Skeleton className="h-10 w-48 mb-2" />
          <Skeleton className="h-6 w-96" />
        </div>
        
        <div className="mb-8">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-80" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-32" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-10 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ErrorState({ error }: { error: string }) {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950">
          <CardHeader>
            <CardTitle className="text-red-900 dark:text-red-200">Error Loading Dashboard</CardTitle>
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
    </div>
  );
}

export default function DashboardPage() {
  const [selectedBrandId, setSelectedBrandId] = useState<string>(typedBrands[0].id);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Validate data exists
        const snapshot = typedSnapshots[selectedBrandId];
        if (!snapshot) {
          throw new Error(`No data found for brand: ${selectedBrandId}`);
        }
        
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load dashboard data');
        setIsLoading(false);
      }
    };

    loadData();
  }, [selectedBrandId]);

  if (error) {
    return <ErrorState error={error} />;
  }

  if (isLoading) {
    return <DashboardSkeleton />;
  }
  
  const selectedBrand = typedBrands.find(b => b.id === selectedBrandId);
  const snapshot = typedSnapshots[selectedBrandId];

  if (!selectedBrand || !snapshot) {
    return <ErrorState error="Brand or snapshot data not found" />;
  }

  const lastAuditDate = new Date(snapshot.lastAuditDate);
  const formattedDate = lastAuditDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="p-4 sm:p-8 fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 slide-up">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            High-level brand intelligence snapshot for AI-first search performance
          </p>
        </div>

        {/* Brand Selector */}
        <div className="mb-6 sm:mb-8 slide-up">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Brand
          </label>
          <Select value={selectedBrandId} onValueChange={setSelectedBrandId}>
            <SelectTrigger className="w-full sm:w-80 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
              {typedBrands.map((brand) => (
                <SelectItem key={brand.id} value={brand.id} className="dark:text-white dark:hover:bg-gray-700">
                  <div className="flex flex-col">
                    <span className="font-medium">{brand.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {brand.domain} • {brand.industry}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <ScoreCard score={snapshot.aiVisibilityScore} icon={Brain} />
          <ScoreCard score={snapshot.trustScore} icon={Shield} />
          <ScoreCard score={snapshot.keywordCoverage} icon={Target} />
        </div>

        {/* Last Audit Info */}
        <Card>
          <CardHeader>
            <CardTitle>Audit Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Brand:</span>
                <span className="font-medium dark:text-gray-200">{selectedBrand.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Domain:</span>
                <span className="font-medium dark:text-gray-200">{selectedBrand.domain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Industry:</span>
                <span className="font-medium dark:text-gray-200">{selectedBrand.industry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Last Audit:</span>
                <span className="font-medium dark:text-gray-200">{formattedDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Action */}
        <div className="mt-8 p-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-lg">
          <h3 className="text-lg font-semibold dark:text-white mb-2">Next Steps</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            View detailed audit results to understand your AI-SEO performance across all 7 modules.
          </p>
          <a
            href="/app/audit"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View Full Audit
          </a>
        </div>
      </div>
    </div>
  );
}
