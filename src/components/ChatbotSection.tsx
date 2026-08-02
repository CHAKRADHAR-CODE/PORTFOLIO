import { useState, useEffect } from "react";
import { Bot, ExternalLink, Loader2, MessageSquare, Send, Sparkles, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CHAT_URL = "https://porty-eight.vercel.app/p/chakradhar-chowdary-gunnam-ms9sqtd2";

const ChatbotSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) setLoading(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <section id="chat" className="py-24 px-4 relative overflow-hidden accent-chat">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] rounded-full blur-[160px]"
          style={{ background: "hsl(45 100% 55% / 0.06)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full blur-[140px]"
          style={{ background: "hsl(38 95% 48% / 0.05)" }} />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-14 section-header">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-card text-xs font-bold text-primary mb-4 tracking-[0.3em] uppercase border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" />
              // AI Assistant
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Chat With My <span className="gradient-text">AI Assistant</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              An interactive chat experience to explore my profile. Click the window to launch it.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <button
              onClick={() => setIsOpen(true)}
              className="group relative block w-full text-left cursor-pointer"
              aria-label="Open AI chat assistant"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary via-[hsl(38_95%_54%)] to-primary opacity-0 group-hover:opacity-60 transition-all duration-700 blur-sm animate-gradient-shift" />

              <div className="relative glass-card-strong anime-card rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 hover-scan">
                {/* Window title bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/30 bg-background/80">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[hsl(0_70%_55%)]" />
                    <span className="w-3 h-3 rounded-full bg-[hsl(45_90%_50%)]" />
                    <span className="w-3 h-3 rounded-full bg-[hsl(120_45%_45%)]" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground tracking-wider flex items-center gap-2">
                    <Bot className="w-4 h-4 text-primary" />
                    Chakradhar AI — chat.portfolio
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 tracking-widest uppercase">
                    <span className="energy-dot inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                    Online
                  </span>
                </div>

                {/* Chat preview */}
                <div className="p-6 md:p-8 bg-[hsl(0_0%_3%/0.6)]">
                  <div className="flex flex-col gap-4 max-w-md mx-auto">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-[hsl(38_95%_48%)] shrink-0">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="px-4 py-2.5 rounded-2xl rounded-tl-sm bg-muted/40 border border-border/40 text-sm text-foreground/90">
                        Hi there! I'm Chakradhar's AI assistant. Ask me anything about his projects, skills, or experience.
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="px-4 py-2.5 rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary/20 to-[hsl(38_95%_48%/0.2)] border border-primary/25 text-sm text-foreground/90">
                        Show me your projects 🚀
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-[hsl(38_95%_48%)] shrink-0">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="px-4 py-2.5 rounded-2xl rounded-tl-sm bg-muted/40 border border-border/40 text-sm text-foreground/90 flex items-center gap-2">
                        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary/70" style={{ animationDelay: "0ms" }} />
                        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary/70" style={{ animationDelay: "150ms" }} />
                        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary/70" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 md:p-8 text-center bg-background/40 border-t border-border/20">
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-[hsl(38_95%_48%)] text-primary-foreground font-bold tracking-widest uppercase text-sm shadow-[0_10px_30px_-10px_hsl(43_95%_50%/0.7)] transition-transform duration-300 group-hover:scale-105">
                    <MessageSquare className="w-4 h-4" />
                    Launch Chat Assistant
                    <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </div>
              </div>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Chat Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 md:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/85 backdrop-blur-xl animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-4xl h-[88vh] overflow-hidden rounded-3xl glass-card-strong border border-border/50 shadow-2xl animate-scale-in flex flex-col">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 py-3 md:px-5 border-b border-border/30 bg-background/90 backdrop-blur-xl">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-[hsl(38,95%,54%)] shrink-0">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-sm md:text-base truncate">
                    AI Chat Assistant
                  </h3>
                  <p className="text-[11px] text-muted-foreground truncate flex items-center gap-1.5">
                    <span className="energy-dot inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Online · Chakradhar's chat portfolio
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-primary border border-primary/30 hover:bg-primary/10 transition-colors tracking-wider"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open New Tab
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-muted transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Frame */}
            <div className="relative flex-1 bg-[hsl(0_0%_4%)] min-h-0">
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                  <div className="relative">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-primary/20 animate-ping" />
                  </div>
                  <p className="text-muted-foreground animate-pulse text-sm tracking-wider">
                    Connecting to chat assistant...
                  </p>
                </div>
              )}

              <iframe
                src={CHAT_URL}
                title="AI Chat Assistant"
                className="w-full h-full border-0"
                onLoad={() => setLoading(false)}
              />

              {!loading && (
                <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2">
                  <a
                    href={CHAT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border/40 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Not loading? Open the chat in a new tab
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .typing-dot { animation: typing-dot 1.2s ease-in-out infinite; }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default ChatbotSection;
