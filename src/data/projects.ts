import sproutkyDemo from '../assets/demo-cards/sproutky-demo.png';

export type ProjectStatus = 'demo' | 'live' | 'coming-soon';

export type Project = {
  name: string;
  tagline: string;
  description: string;
  industry: string;
  location: string;
  status: ProjectStatus;
  demoUrl?: string;
  liveUrl?: string;
  tags: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
};

export const statusConfig: Record<ProjectStatus, { label: string; classes: string }> = {
  demo: {
    label: 'Demo - In Development',
    classes: 'bg-amber-500/15 text-amber-200 ring-1 ring-amber-400/35',
  },
  live: {
    label: 'Live',
    classes: 'bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/35',
  },
  'coming-soon': {
    label: 'Coming Soon',
    classes: 'bg-white/10 text-white/55 ring-1 ring-white/15',
  },
};

export const projects: Project[] = [
  {
    name: 'Sprout and Learn',
    tagline: 'Pediatric therapy clinic — Radcliff, KY',
    description:
      'React and TypeScript multi-page application for a pediatric therapy clinic, deployed to Cloudflare Workers at the edge. Replaced a GoDaddy-hosted template with a fully custom design system, animated transitions, service pages, and a spam-protected contact form.',
    industry: 'Healthcare',
    location: 'Radcliff, KY',
    status: 'demo',
    demoUrl: 'https://sproutky-demo.matthewbsmith.com',
    tags: ['React', 'TypeScript', 'Tailwind', 'Cloudflare'],
    image: sproutkyDemo,
    imageAlt: 'Sprout and Learn website hero section showing pediatric therapy clinic homepage',
    featured: true,
  },
];
