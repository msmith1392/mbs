import React from 'react';

interface LabeledEntryProps {
  label: string;
  title: string;
  description: string;
}

function LabeledEntry({ label, title, description }: LabeledEntryProps): React.JSX.Element {
  return (
    <div className="border-t border-border py-10">
      <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">{label}</p>
      <h3 className="mb-2 text-xl text-text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-text-muted">{description}</p>
    </div>
  );
}

export default LabeledEntry;
