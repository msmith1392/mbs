export type SiteNavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export const siteNavLinks: readonly SiteNavLink[] = [
  { label: 'Highlights', href: '/#highlights', sectionId: 'highlights' },
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
];
