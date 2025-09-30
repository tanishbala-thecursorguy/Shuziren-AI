import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}

export function ServiceCard({ title, description, icon: Icon, accentColor }: ServiceCardProps) {
  return (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-opacity-50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <h3 className="text-white mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className={`flex-shrink-0 ${accentColor} p-6 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>
      </div>
      <div className={`absolute inset-0 ${accentColor} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
    </div>
  );
}