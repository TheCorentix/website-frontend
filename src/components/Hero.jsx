import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import CoreVisual from "./CoreVisual";

export default function Hero() {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;

    let raf;
    let ticking = false;

    function apply() {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const h = rect.height || 1;
      const progress = Math.min(1, Math.max(0, -rect.top / h));

      const translateZ = progress * -420;
      const scale = 1 - progress * 0.22;
      const opacity = 1 - progress * 0.85;
      const blur = progress * 4;

      scene.style.transform = `translateZ(${translateZ}px) scale(${scale})`;
      scene.style.opacity = opacity.toFixed(3);
      scene.style.filter = `blur(${blur.toFixed(2)}px)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(apply);
      }
    }

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="cx" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .cx{
          --text:#E9EAF4; --text-dim:#9CA0B8; --text-faint:#6A6E86;
          --cyan:#FF5A1E; --cyan-2:#FF8A50;
          position:relative; color:var(--text);
          font-family:'Inter',sans-serif;
          overflow:hidden;
          padding:96px 0 min(4vw,40px);
        }

        .cx-wrap{ position:relative; z-index:2; width:100%; max-width:1550px; margin:0 auto; padding:0 var(--edge, clamp(24px,7vw,96px)); }
        .cx-hero-grid{ display:grid; grid-template-columns:1fr 1.05fr; gap:40px; align-items:center; padding:36px 0 24px; perspective:1400px; }
        @media (max-width:980px){ .cx-hero-grid{ grid-template-columns:1fr; } }

        .cx-eyebrow{ display:inline-flex; align-items:center; gap:10px; padding:10px 16px; border-radius:999px; background:rgba(255,90,30,0.08); color:var(--cyan); font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.2em; text-transform:uppercase; border:1px solid rgba(255,90,30,0.2); }
        .cx-eyebrow::before{ content:''; width:6px; height:6px; border-radius:50%; background:var(--cyan); box-shadow:0 0 8px 2px var(--cyan); }

        .cx-hero-copy h1{ font-family:'Fraunces',serif; font-weight:400; font-size:clamp(42px,6vw,72px); line-height:1.06; letter-spacing:-0.01em; margin:22px 0 0; }
        .cx-serif-italic{ font-family:'Fraunces',serif; font-style:italic; font-weight:400; color:var(--cyan); }
        .cx-lead{ color:var(--text-dim); font-size:19px; line-height:1.7; max-width:540px; margin-top:24px; }

        .cx-actions{ display:flex; align-items:center; gap:28px; margin-top:32px; flex-wrap:wrap; }

        /* .cx-btn-primary / .cx-link-ghost are defined globally in index.css
           so they stay consistent between the Hero and the service pages. */

        /* scene */
        .cx-scene{ position:relative; aspect-ratio:1/0.95; max-width:500px; margin:0 auto; width:100%; transform-style:preserve-3d; will-change:transform, opacity, filter; }
        .cx-nodegraph{ position:absolute; inset:14%; border-radius:24px; overflow:visible; }
        .cx-scene-caption{
          position:absolute; bottom:-34px; left:50%; transform:translateX(-50%);
          font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.2em; text-transform:uppercase;
          color:var(--text-faint); white-space:nowrap;
        }

        @media (max-width:720px){
          .cx-actions{ gap:18px; }
        }

        @media (prefers-reduced-motion: reduce){
          .cx *{ animation-duration:.001ms !important; animation-iteration-count:1 !important; }
        }
      `}</style>

      <div className="cx-wrap">
        <div className="cx-hero-grid">
          <div className="cx-hero-copy">
            <span className="cx-eyebrow">Corentix · Est. 2024</span>
            <h1>
              Digital systems, <br />
              <span className="cx-serif-italic">engineered with</span> intelligence.
            </h1>
            <p className="cx-lead">
              Corentix Labs builds web platforms, AI agents and automation systems
              for teams who need it done right the first time — one team, every
              skill, zero hand-offs.
            </p>
            <div className="cx-actions">
              <a href="#contact" className="cx-btn-primary">
                Book a Call <ArrowRight size={16} />
              </a>
              <a href="#projects" className="cx-link-ghost">
                <Play size={14} /> See Our Work
              </a>
            </div>
          </div>

          <div className="cx-scene" ref={sceneRef}>
            <div className="cx-nodegraph">
              <CoreVisual />
            </div>
            <span className="cx-scene-caption">AI Core · orchestrating every system</span>
          </div>
        </div>
      </div>
    </section>
  );
}


