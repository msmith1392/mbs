import React, { useRef, useState } from 'react';

type ProjectType = '' | 'Technical Consulting' | 'Custom Website' | 'Not Sure Yet';

type FormState = {
  name: string;
  email: string;
  projectType: ProjectType;
  message: string;
};

type Feedback = {
  type: 'success' | 'error';
  message: string;
};

const initialFormState: FormState = {
  name: '',
  email: '',
  projectType: '',
  message: '',
};

function ContactPage(): React.JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [honeypot, setHoneypot] = useState<string>('');

  function isFormValid(): boolean {
    if (honeypot) {
      setFeedback({ type: 'error', message: 'Submission flagged as spam.' });
      return false;
    }
    if (!form.projectType) {
      setFeedback({ type: 'error', message: 'Please select a project type.' });
      return false;
    }
    if (!/^[a-zA-Z\s'-]{2,}$/.test(form.name.trim())) {
      setFeedback({ type: 'error', message: 'Enter your full name (letters and spaces only).' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setFeedback({ type: 'error', message: 'Enter a valid email address.' });
      return false;
    }
    if (form.message.trim().length < 10) {
      setFeedback({ type: 'error', message: 'Message must be at least 10 characters.' });
      return false;
    }
    setFeedback(null);
    return true;
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    setIsSending(true);

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        website: honeypot,
        time: new Date().toLocaleString(),
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; error?: string }) => {
        if (data.success) {
          setFeedback({ type: 'success', message: 'Your message has been sent. Thank you!' });
          setForm(initialFormState);
          formRef.current?.reset();
        } else {
          setFeedback({
            type: 'error',
            message: data.error ?? 'Something went wrong. Please try again.',
          });
        }
      })
      .catch(() => {
        setFeedback({
          type: 'error',
          message: 'Could not send message. Please try again or email me directly.',
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="bg-dark-light px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-wide text-white">Get in Touch</h1>
          <p className="text-white/60">
            Describe your project in a few sentences. I will follow up with the right questions and
            give you a straight answer on whether I am a good fit.
          </p>
        </div>

        {feedback && (
          <div
            className={`mb-6 rounded border px-4 py-3 text-sm font-medium ${
              feedback.type === 'success'
                ? 'border-green-700/30 bg-green-900/30 text-green-300'
                : 'border-red-700/30 bg-red-900/30 text-red-300'
            }`}
          >
            {feedback.message}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/70">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded border border-white/10 bg-dark px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-lct"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/70">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded border border-white/10 bg-dark px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-lct"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="mb-1 block text-sm font-medium text-white/70">
              What are you looking for?
            </label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={(e) => setForm({ ...form, projectType: e.target.value as ProjectType })}
              className="w-full rounded border border-white/10 bg-dark px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-lct"
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="Technical Consulting">Technical Consulting</option>
              <option value="Custom Website">
                Custom Website (business site, blog, portfolio, online store, etc.)
              </option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/70">
              Tell me about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={10}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded border border-white/10 bg-dark px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-lct"
            />
          </div>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded bg-blue-lct-cta py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:text-zinc-200 disabled:hover:bg-zinc-600"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
