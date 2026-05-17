import React from 'react';
import { MessageCircle, FileText, Code2, Rocket } from 'lucide-react';

type ProcessStep = {
  icon: React.ReactNode;
  step: string;
  label: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    icon: <MessageCircle size={24} />,
    step: 'Step 1',
    label: 'Consult',
    description:
      'I start with a free conversation. No forms, no sales pitch. I learn about your business, what you need, and whether I am the right fit for the job.',
  },
  {
    icon: <FileText size={24} />,
    step: 'Step 2',
    label: 'Scope',
    description:
      'Before any work starts, I define exactly what gets built. You get a clear picture of the deliverables and timeline so there are no surprises on either side.',
  },
  {
    icon: <Code2 size={24} />,
    step: 'Step 3',
    label: 'Build',
    description:
      'I build it. You get regular updates and direct access to me throughout. No black box, no waiting weeks to hear back.',
  },
  {
    icon: <Rocket size={24} />,
    step: 'Step 4',
    label: 'Launch and Support',
    description:
      'I handle the launch and stay available after. For ongoing engagements, your site is monitored, maintained, and updated as your business grows.',
  },
];

function Process(): React.JSX.Element {
  return (
    <section id="process" className="scroll-mt-20 bg-dark-light px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">How I Work</h2>
          <p className="mx-auto max-w-2xl text-pretty text-white/60">
            I keep it simple. Here is what working with me looks like from first contact to launch.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {steps.map((step) => (
            <div key={step.step} className="bg-dark rounded-xl p-8 flex gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-dark-light flex items-center justify-center text-blue-lct shrink-0">
                {step.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-lct mb-1">
                  {step.step}
                </p>
                <h3 className="text-base font-bold text-white mb-2 tracking-wide">{step.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
