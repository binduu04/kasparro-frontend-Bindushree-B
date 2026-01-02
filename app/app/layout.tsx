'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileSearch, Network, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/ThemeToggle';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/app/audit', label: 'Audit', icon: FileSearch },
    { href: '/app/architecture', label: 'Architecture', icon: Network },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Lock body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Top Header */}
      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                Kasparro
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Back to Website
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 top-[73px]"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex relative min-h-[calc(100vh-73px)]">
        {/* Sidebar Navigation - Slides in from left on mobile */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 
          fixed lg:sticky top-[73px] left-0 bottom-0 lg:h-[calc(100vh-73px)] w-64 z-50
          bg-white dark:bg-gray-900 border-r dark:border-gray-800
          transition-transform duration-300 ease-in-out
          overflow-y-auto
        `}>
          <nav className="p-4 space-y-2 pt-12 lg:pt-4">
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-800 dark:bg-gray-700 text-white border-2 border-primary'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full lg:w-auto dark:bg-gray-950">
          {children}
        </main>
      </div>
    </div>
  );
}
