import React from 'react';

interface LabeledEntryProps {
  label: string;
  title: string;
  description: string;
}

function LabeledEntry({ label, title, description }: LabeledEntryProps): React.JSX.Element {
  return (
    <div className="border-t border-border py-8">
      <p className="font-mono text-xs text-accent">{label}</p>
      <h3 className="mt-2 text-xl text-text-primary">{title}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">{description}</p>
    </div>
  );
}

export default LabeledEntry;
