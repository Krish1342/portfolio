import React, { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";

export function Contact() {
  const email = "lodhakrish11@gmail.com";
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false });

  const handleCopy = (e) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    // Fire subtle celebratory confetti
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ff6b35", "#00f2fe", "#f59e0b"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false });

    try {
      const publicKey = "YOUR_PUBLIC_KEY";
      if (publicKey === "YOUR_PUBLIC_KEY") {
        await new Promise((r) => setTimeout(r, 700));
      } else {
        await emailjs.send(
          "service_portfolio",
          "template_contact",
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          publicKey
        );
      }
      setStatus({ loading: false, success: true });
      setForm({ name: "", email: "", message: "" });
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ff6b35", "#10b981", "#00f2fe"],
      });
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 relative">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Let's Collaborate
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-fg tracking-tight">
            Start a conversation.
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base text-body leading-relaxed">
            Whether you want to build an AI product, discuss a summer/fall internship opportunity, or talk agent architecture — feel free to reach out.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Outreach */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card with One-Click Copy */}
            <div className="glass-card rounded-2xl p-6 border border-surface-border">
              <span className="font-mono text-xs text-muted uppercase tracking-wider block mb-2">
                Primary Inbox
              </span>
              <a
                href={`mailto:${email}`}
                className="font-display font-bold text-xl sm:text-2xl text-fg hover:text-accent transition-colors block break-all"
              >
                {email}
              </a>

              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface border border-surface-border text-xs font-mono text-fg hover:border-accent transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                      <span className="text-cyber-emerald font-semibold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-accent" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/Krish1342"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 flex flex-col justify-between border border-surface-border group"
              >
                <div className="flex items-center justify-between text-muted group-hover:text-accent">
                  <Github className="w-5 h-5" />
                  <span className="text-xs font-mono">/Krish1342</span>
                </div>
                <div className="mt-4">
                  <p className="font-display font-bold text-sm text-fg">GitHub</p>
                  <p className="font-sans text-xs text-muted mt-0.5">Repositories & Code</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/krish-lodha-6b2b06343/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 flex flex-col justify-between border border-surface-border group"
              >
                <div className="flex items-center justify-between text-muted group-hover:text-accent">
                  <Linkedin className="w-5 h-5" />
                  <span className="text-xs font-mono">/krish-lodha</span>
                </div>
                <div className="mt-4">
                  <p className="font-display font-bold text-sm text-fg">LinkedIn</p>
                  <p className="font-sans text-xs text-muted mt-0.5">Professional Network</p>
                </div>
              </a>
            </div>

            {/* Location & Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-surface border border-surface-border flex items-center gap-3">
                <div className="p-2 rounded-xl bg-bg text-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs font-sans">
                  <p className="text-fg font-medium">Pune, Maharashtra</p>
                  <p className="text-muted font-mono mt-0.5">India (UTC+5:30)</p>
                </div>
              </div>

              <a
                href="tel:+918286331234"
                className="p-4 rounded-2xl bg-surface border border-surface-border hover:border-accent/40 transition-colors flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-bg text-cyber-emerald shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs font-sans">
                  <p className="text-fg font-medium">+91-8286331234</p>
                  <p className="text-muted font-mono mt-0.5">Direct Line</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-surface-border">
            <h3 className="font-display font-bold text-xl text-fg mb-1">
              Send a quick message
            </h3>
            <p className="font-sans text-xs sm:text-sm text-body mb-6">
              Drop a note and I will get back to you within 24 hours.
            </p>

            {status.success && (
              <div className="mb-6 p-4 rounded-xl bg-cyber-emerald/15 border border-cyber-emerald/30 text-cyber-emerald text-sm flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Message received! Thank you, I'll follow up shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-surface-border text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-surface-border text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-surface-border text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold bg-accent text-bg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status.loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
