import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height, dpr;
    let stars = [];
    let scrollY = window.scrollY;
    let prevScrollY = scrollY;
    let velocity = 0; // smoothed scroll velocity (px/frame)
    let raf;

    const STAR_COUNT_DENSITY = 0.00011; // stars per px^2
    const MAX_STREAK = 140; // px, cap on how long a streak can get
    const VELOCITY_TO_STREAK = 2.6; // how aggressively speed becomes streak length

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(width * height * STAR_COUNT_DENSITY);
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.25,
        baseAlpha: Math.random() * 0.6 + 0.25,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
        depth: Math.random() * 0.6 + 0.2, // parallax depth
        drift: (Math.random() - 0.5) * 0.02,
        color: Math.random() > 0.88 ? '255,138,80' : Math.random() > 0.8 ? '255,90,30' : '255,255,255',
      }));
    }

    function onScroll() {
      scrollY = window.scrollY;
    }

    let t = 0;
    function draw() {
      // smoothed, decaying velocity so thrusters "spool down" instead of
      // cutting off the instant scrolling stops
      const rawDelta = scrollY - prevScrollY;
      prevScrollY = scrollY;
      velocity = reduceMotion ? 0 : velocity * 0.88 + rawDelta * 0.12;

      const speed = Math.min(Math.abs(velocity), 55);
      const dir = velocity >= 0 ? 1 : -1;
      const engaged = speed > 1.2; // thrusters "on" threshold

      ctx.clearRect(0, 0, width, height);
      t += 1;

      for (const s of stars) {
        const alpha = reduceMotion
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.25;
        const py = s.y + (reduceMotion ? 0 : (scrollY * s.depth * 0.06) % height);
        const drawY = ((py % (height + 40)) + (height + 40)) % (height + 40) - 20;
        const drawX = reduceMotion ? s.x : s.x + Math.sin(t * 0.001 + s.twinklePhase) * s.drift * 20;
        const a = Math.max(0, Math.min(1, alpha));

        if (engaged) {
          const streak = Math.min(MAX_STREAK, speed * s.depth * VELOCITY_TO_STREAK);
          const tailY = drawY - dir * streak;
          const grad = ctx.createLinearGradient(drawX, drawY, drawX, tailY);
          grad.addColorStop(0, `rgba(${s.color},${a})`);
          grad.addColorStop(1, `rgba(${s.color},0)`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.max(0.6, s.r * (1 + speed / 40));
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(drawX, drawY);
          ctx.lineTo(drawX, tailY);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${s.color},${a})`;
          ctx.arc(drawX, drawY, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (glowRef.current) {
        const intensity = Math.min(1, speed / 40);
        glowRef.current.style.opacity = intensity.toFixed(3);
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="starfield-layer" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="nebula nebula-c" />
      <div ref={glowRef} className="thruster-glow" />
      <div className="vignette" />
    </div>
  );
}
