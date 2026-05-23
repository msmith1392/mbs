export type SiteNavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export const siteNavLinks: readonly SiteNavLink[] = [
  { label: 'Work', href: '/#work', sectionId: 'work' },
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'About Me', href: '/#about', sectionId: 'about' },
  { label: 'Get In Touch', href: '/#contact', sectionId: 'contact' },
];
