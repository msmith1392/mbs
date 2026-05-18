export type SiteNavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export const siteNavLinks: readonly SiteNavLink[] = [
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'Skills', href: '/#skills', sectionId: 'skills' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
];
