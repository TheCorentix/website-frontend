import { useEffect, useRef } from 'react';

const NODE_COUNT = 46;
const LINK_DIST = 130;
const CURSOR_RADIUS = 160;

export default function NodeGraph() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let raf;
    const mouse = { x: -9999, y: -9999, active: false };

    function resize() {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1.4 + Math.random() * 1.6,
      }));
    }

    function onMove(e) {
      const rect = wrap.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onLeave() { mouse.active = false; }

    function step() {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const midX = (a.x + b.x) / 2, midY = (a.y + b.y) / 2;
            const dCursor = Math.hypot(midX - mouse.x, midY - mouse.y);
            const near = mouse.active && dCursor < CURSOR_RADIUS;
            const base = 1 - dist / LINK_DIST;
            const alpha = near ? Math.min(1, base + 0.5) : base * 0.35;
            ctx.strokeStyle = near ? `rgba(255,138,80,${alpha})` : `rgba(255,90,30,${alpha})`;
            ctx.lineWidth = near ? 1.1 : 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const dCursor = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const near = mouse.active && dCursor < CURSOR_RADIUS;
        const glow = near ? 1 - dCursor / CURSOR_RADIUS : 0;
        const r = n.r + glow * 2.2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = near ? `rgba(255,235,220,${0.5 + glow * 0.5})` : 'rgba(255,138,80,0.55)';
        ctx.shadowBlur = near ? 14 : 0;
        ctx.shadowColor = 'rgba(255,90,30,0.9)';
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    resize();
    seed();
    step();

    window.addEventListener('resize', resize);
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="cx-nodegraph" ref={wrapRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}
