import React from 'react';
import { ShieldCheck, Server, Layers, UserCheck } from 'lucide-react';

type Credential = {
  icon: React.ReactNode;
  label: string;
  description: string;
};

const credentials: Credential[] = [
  {
    icon: <ShieldCheck size={28} />,
    label: 'Regulated Environments',
    description:
      'I have delivered production software in regulated, compliance-driven environments where security and reliability are not optional.',
  },
  {
    icon: <Server size={28} />,
    label: 'Enterprise Engineering',
    description:
      'I have built and maintained systems that run 24/7, serve thousands of users, and cannot afford downtime. I know what it takes to ship software that holds up under pressure.',
  },
  {
    icon: <Layers size={28} />,
    label: 'End-to-End Ownership',
    description:
      'I work across the full stack: frontend, backend, and cloud infrastructure. Every engagement is handled directly by me from scoping through deployment.',
  },
  {
    icon: <UserCheck size={28} />,
    label: 'Direct Access',
    description:
      'You work with the person who built it. Not a support desk, not a rotating team. I know the history of your project and can answer questions without starting from scratch.',
  },
];

function About(): React.JSX.Element {
  return (
    <section id="about" className="scroll-mt-20 bg-dark px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">Who I Am</h2>
          <p className="mx-auto max-w-2xl text-pretty text-white/60">
            Matthew B. Smith Consulting is a software engineering and consulting practice delivering
            professional web presence and serious custom software. My background spans federal
            agencies, universities, and national organizations. Those same engineering standards
            come with every engagement, regardless of size.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {credentials.map((item) => (
            <div key={item.label} className="bg-dark-light rounded-xl p-8 flex gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center text-blue-lct shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2 tracking-wide">{item.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
