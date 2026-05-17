export type SiteNavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export const siteNavLinks: readonly SiteNavLink[] = [
  { label: 'Services', href: '/#services', sectionId: 'services' },
  { label: 'Portfolio', href: '/#portfolio', sectionId: 'portfolio' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Process', href: '/#process', sectionId: 'process' },
  { label: 'FAQ', href: '/#faq', sectionId: 'faq' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
];
