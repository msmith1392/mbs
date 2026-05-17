import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Server, Layers, UserCheck } from 'lucide-react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

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
      'I have delivered production software for federal agency systems and other regulated environments where security, compliance, and reliability are not optional. The same standards apply to every engagement I take on.',
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
      'I work across the full stack: frontend, backend, and cloud infrastructure. Every engagement is handled directly by me from scoping through deployment. No handoffs, no account managers.',
  },
  {
    icon: <UserCheck size={28} />,
    label: 'Direct Access',
    description:
      'You work with the person who built it. Not a support desk, not a rotating team. I know the history of your project and can answer questions without starting from scratch.',
  },
];

function AboutPage(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);

  return (
    <>
      <section className="bg-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-wide text-white">About Me</h1>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-white/60">
              I am a senior software engineer and independent consultant based in Somerset, KY, with{' '}
              {totalYears}+ years delivering production software across federal agencies, enterprise
              organizations, and local businesses. I specialize in project-based engineering
              engagements for technical teams. I also independently own and operate{' '}
              <a
                href="https://lakecumberlandtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-lct transition-colors hover:text-blue-400"
              >
                Lake Cumberland Technology Consulting
              </a>
              , a web services firm serving small businesses across the region.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {credentials.map((item) => (
              <div key={item.label} className="flex gap-5 rounded-xl bg-dark-light p-8 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dark text-blue-lct">
                  {item.icon}
                </div>
                <div>
                  <h2 className="mb-2 text-base font-bold tracking-wide text-white">
                    {item.label}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-lct transition-colors hover:text-blue-400"
            >
              Download my CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-dark-light px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            Send me a short description of your project. No commitment required for the first
            conversation.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded bg-blue-lct-cta px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
