import React from 'react';

interface LabeledEntryProps {
  label: string;
  title: string;
  description: string;
}

function LabeledEntry({ label, title, description }: LabeledEntryProps): React.JSX.Element {
  return (
    <div className="border-t border-border py-8 first:border-t-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-base text-text-primary">{title}</h3>
        <p className="shrink-0 font-mono text-xs text-text-subtle">{label}</p>
      </div>
      <p className="mt-2 text-base leading-relaxed text-text-muted">{description}</p>
    </div>
  );
}

export default LabeledEntry;
