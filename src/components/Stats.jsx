import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle, Code, Shield } from 'lucide-react';

export default function Stats() {
  const icons = [Award, Code, CheckCircle, Shield];

  return (
    <section className="py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {stat.value}
                      <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
