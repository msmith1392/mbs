export type SiteNavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export const siteNavLinks: readonly SiteNavLink[] = [
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'Highlights', href: '/#highlights', sectionId: 'highlights' },
  { label: 'About Me', href: '/#about', sectionId: 'about' },
  { label: 'Get In Touch', href: '/#contact', sectionId: 'contact' },
];
