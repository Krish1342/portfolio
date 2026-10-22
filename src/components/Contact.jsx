import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

/*
  Contact — NO cards around email/social. NO two-column card layout.
  Massive heading. Email as a big link. Socials as raw text links.
  Form is stripped: just fields on the page, no containers.
*/

export function Contact() {
  const email = "lodhakrish11@gmail.com";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const publicKey = "YOUR_PUBLIC_KEY";
      if (publicKey === "YOUR_PUBLIC_KEY") {
        await new Promise((r) => setTimeout(r, 800));
      } else {
        await emailjs.send("service_portfolio", "template_contact", {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }, publicKey);
      }
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-xs text-muted uppercase tracking-[0.3em] mb-3">
          Contact
        </p>

        {/* Big statement */}
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-fg tracking-tight leading-tight max-w-4xl">
          Have an idea?{" "}
          <span className="text-muted">Let's make it real.</span>
        </h2>

        <div className="divider my-14" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — Direct reach-out, raw text links */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Email</p>
              <a
                href={`mailto:${email}`}
                className="link-hover font-heading font-bold text-xl sm:text-2xl text-fg hover:text-accent transition-colors break-all"
              >
                {email}
              </a>
            </div>

            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Links</p>
              <div className="space-y-3">
                <a
                  href="https://github.com/Krish1342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover font-body text-base text-muted hover:text-fg transition-colors block"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/krish-lodha-6b2b06343/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover font-body text-base text-muted hover:text-fg transition-colors block"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}KrishLodhaResume.pdf`}
                  download
                  className="link-hover font-body text-base text-muted hover:text-fg transition-colors block"
                >
                  Download Resume ↗
                </a>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">Location</p>
              <p className="font-body text-base text-fg">Pune, Maharashtra, India</p>
              <p className="font-mono text-xs text-muted mt-1">Open to relocation & remote roles</p>
            </div>
          </div>

          {/* Right — Minimal form, no wrapper card */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="py-20">
                <p className="font-heading font-bold text-2xl sm:text-3xl text-fg">
                  Got it. <span className="text-accent">I'll be in touch.</span>
                </p>
                <p className="font-body text-muted mt-3">Usually within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-[#1a1a1a] focus:border-accent text-fg font-body text-lg py-3 outline-none transition-colors placeholder:text-[#252525]"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full bg-transparent border-b border-[#1a1a1a] focus:border-accent text-fg font-body text-lg py-3 outline-none transition-colors placeholder:text-[#252525]"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-3">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-b border-[#1a1a1a] focus:border-accent text-fg font-body text-lg py-3 outline-none transition-colors resize-none placeholder:text-[#252525]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="font-heading font-bold text-lg text-bg bg-fg hover:bg-accent px-10 py-4 transition-colors duration-300 disabled:opacity-40 cursor-pointer"
                >
                  {sending ? "Sending..." : "Send it →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
