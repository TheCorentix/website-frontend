import { Bot, Zap, Globe, Palette, Cloud, Rocket, Hexagon } from 'lucide-react';

const NODES = [
  { icon: Bot, title: 'AI Agents', sub: 'Smart Solutions', pos: 'n' },
  { icon: Globe, title: 'Web', sub: 'Scalable Apps', pos: 'ne' },
  { icon: Palette, title: 'Design', sub: 'Beautiful UI/UX', pos: 'se' },
  { icon: Cloud, title: 'Cloud', sub: 'Secure & Reliable', pos: 's' },
  { icon: Rocket, title: 'Growth', sub: 'Scale Faster', pos: 'sw' },
  { icon: Zap, title: 'Automation', sub: 'Work Smarter', pos: 'nw' },
];

const DUST = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  top: Math.round((Math.sin(i * 12.9898) * 43758.5453 % 1 + 1) % 1 * 100),
  left: Math.round((Math.sin(i * 78.233) * 12543.789 % 1 + 1) % 1 * 100),
  size: 2 + (i % 3),
  delay: (i % 7) * 0.4,
  dur: 3 + (i % 4),
}));

export default function CoreVisual() {
  return (
    <div className="cv-root">
      <style>{`
        .cv-root{
          position:relative; width:100%; height:100%; min-height:100%;
          display:flex; align-items:center; justify-content:center;
          background:radial-gradient(circle at 50% 50%, rgba(255,90,30,0.10), rgba(10,7,6,0.4) 55%, transparent 75%);
        }

        .cv-dust{ position:absolute; inset:0; overflow:hidden; }
        .cv-mote{
          position:absolute; border-radius:50%;
          background:#FFB37A; opacity:0.55;
          box-shadow:0 0 6px 1px rgba(255,138,80,0.6);
          animation:cv-twinkle var(--dur,4s) ease-in-out infinite;
          animation-delay:var(--delay,0s);
        }
        @keyframes cv-twinkle{
          0%,100%{ opacity:.15; transform:scale(0.8); }
          50%{ opacity:.8; transform:scale(1.2); }
        }

        .cv-orbits{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; }
        .cv-ring{
          position:absolute; border-radius:50%;
          border:1px solid rgba(255,138,80,0.22);
        }
        .cv-ring--1{ width:46%; height:46%; }
        .cv-ring--2{ width:66%; height:66%; border-color:rgba(255,138,80,0.15); }
        .cv-ring--3{ width:86%; height:86%; border-color:rgba(255,138,80,0.09); }

        .cv-spin{ position:absolute; inset:0; border-radius:50%; }
        .cv-spin--slow{ animation:cv-rotate 26s linear infinite; }
        .cv-spin--rev{ animation:cv-rotate 34s linear infinite reverse; }
        @keyframes cv-rotate{ from{ transform:rotate(0deg); } to{ transform:rotate(360deg); } }

        .cv-orbit-dot{
          position:absolute; width:8px; height:8px; border-radius:50%;
          background:#FF8A50; box-shadow:0 0 12px 3px rgba(255,138,80,0.85);
        }
        .cv-ring--1 .cv-orbit-dot{ top:-4px; left:calc(50% - 4px); }
        .cv-ring--2 .cv-orbit-dot{ top:calc(50% - 4px); right:-4px; }
        .cv-ring--3 .cv-orbit-dot{ bottom:-4px; left:calc(50% - 4px); }

        .cv-core{
          position:relative; z-index:3;
          width:26%; aspect-ratio:1; min-width:84px;
          display:flex; align-items:center; justify-content:center;
          animation:cv-pulse 3.2s ease-in-out infinite;
        }
        .cv-core-glow{
          position:absolute; inset:-30%; border-radius:50%;
          background:radial-gradient(circle, rgba(255,138,80,0.45), rgba(255,90,30,0.08) 60%, transparent 75%);
          filter:blur(2px);
        }
        .cv-core-hex{
          position:relative; width:60%; height:60%;
          display:flex; align-items:center; justify-content:center;
          border-radius:22%;
          background:linear-gradient(160deg, rgba(255,138,80,0.22), rgba(255,90,30,0.06));
          border:1px solid rgba(255,166,110,0.55);
          box-shadow:0 0 30px rgba(255,90,30,0.35), inset 0 0 18px rgba(255,138,80,0.25);
        }
        .cv-core-hex svg{ color:#FFCBA4; filter:drop-shadow(0 0 6px rgba(255,138,80,0.7)); }
        .cv-core-label{
          position:absolute; bottom:-26px; left:50%; transform:translateX(-50%);
          font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:.18em;
          text-transform:uppercase; color:#FFD3AD; white-space:nowrap;
        }
        @keyframes cv-pulse{
          0%,100%{ transform:scale(1); }
          50%{ transform:scale(1.05); }
        }

        .cv-node{
          display:flex; align-items:center; gap:8px;
          padding:8px 12px; border-radius:12px;
          background:rgba(20,12,8,0.72);
          border:1px solid rgba(255,138,80,0.28);
          box-shadow:0 8px 20px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,138,80,0.05);
          backdrop-filter:blur(6px);
          animation:cv-float 5s ease-in-out infinite;
          white-space:nowrap;
        }
        .cv-node-icon{
          width:26px; height:26px; min-width:26px; border-radius:8px;
          display:flex; align-items:center; justify-content:center;
          background:linear-gradient(160deg, rgba(255,138,80,0.35), rgba(255,90,30,0.12));
          border:1px solid rgba(255,166,110,0.4);
          color:#FFCBA4;
        }
        .cv-node-text{ display:flex; flex-direction:column; line-height:1.15; }
        .cv-node-title{ font-size:11.5px; font-weight:600; color:#F4E7DC; }
        .cv-node-sub{ font-size:9.5px; color:#B99A85; }

        @keyframes cv-float{
          0%,100%{ transform:translateY(0); }
          50%{ transform:translateY(-8px); }
        }

        .cv-slot{
          position:absolute; z-index:4;
          transform:translate(-50%, -50%);
        }

        /* Even hexagon: 1 top, 2 right, 1 bottom, 2 left — all equidistant from center */
        .cv-slot--n{  top:4%;  left:50%; }
        .cv-slot--ne{ top:26%; left:91%; }
        .cv-slot--se{ top:74%; left:91%; }
        .cv-slot--s{  top:96%; left:50%; }
        .cv-slot--sw{ top:74%; left:9%;  }
        .cv-slot--nw{ top:26%; left:9%;  }

        @media (max-width:520px){
          .cv-slot--n{  top:2%;  }
          .cv-slot--ne{ top:27%; left:96%; }
          .cv-slot--se{ top:73%; left:96%; }
          .cv-slot--s{  top:98%; }
          .cv-slot--sw{ top:73%; left:4%; }
          .cv-slot--nw{ top:27%; left:4%; }
        }

        @media (max-width:520px){
          .cv-node{ padding:6px 9px; gap:6px; }
          .cv-node-title{ font-size:10px; }
          .cv-node-sub{ display:none; }
          .cv-node-icon{ width:22px; height:22px; min-width:22px; }
        }
      `}</style>

      <div className="cv-dust">
        {DUST.map((d) => (
          <span
            key={d.id}
            className="cv-mote"
            style={{
              top: `${d.top}%`,
              left: `${d.left}%`,
              width: d.size,
              height: d.size,
              '--delay': `${d.delay}s`,
              '--dur': `${d.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="cv-orbits">
        <div className="cv-ring cv-ring--1"><div className="cv-spin cv-spin--slow"><span className="cv-orbit-dot" /></div></div>
        <div className="cv-ring cv-ring--2"><div className="cv-spin cv-spin--rev"><span className="cv-orbit-dot" /></div></div>
        <div className="cv-ring cv-ring--3"><div className="cv-spin cv-spin--slow"><span className="cv-orbit-dot" /></div></div>
      </div>

      <div className="cv-core">
        <span className="cv-core-glow" aria-hidden="true" />
        <span className="cv-core-hex"><Hexagon size={28} strokeWidth={1.5} /></span>
        <span className="cv-core-label">AI Core</span>
      </div>

      {NODES.map((n, i) => {
        const Icon = n.icon;
        return (
          <div className={`cv-slot cv-slot--${n.pos}`} key={n.title}>
            <div className="cv-node" style={{ animationDelay: `${i * 0.6}s` }}>
              <span className="cv-node-icon"><Icon size={14} strokeWidth={1.75} /></span>
              <span className="cv-node-text">
                <span className="cv-node-title">{n.title}</span>
                <span className="cv-node-sub">{n.sub}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
