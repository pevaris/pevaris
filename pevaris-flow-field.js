/**
 * Pevaris Flow Field — interactive hero background
 * --------------------------------------------------
 * Mouse-reactive particle flow. Dependency-free. ~5KB.
 *
 * Usage (vanilla):
 *   <canvas id="hero-bg"></canvas>
 *   <script src="/pevaris-flow-field.js"></script>
 *   <script>
 *     PevarisFlowField.init({ canvas: '#hero-bg' });
 *   </script>
 *
 * Usage (React / Next.js): see README block at bottom of this file.
 *
 * Options:
 *   canvas           CSS selector OR HTMLCanvasElement (required)
 *   density          0.3 – 2.0   particle count multiplier (default 0.5)
 *   response         0.3 – 2.0   mouse attraction strength  (default 0.75)
 *   backgroundColor  hex/rgb string used for the trail-fade overlay.
 *                    MUST match the section's actual background. Default '#0d2818'.
 *   particleColor    rgb triplet "r,g,b" — default '230,233,216' (cream)
 *   highlightColor   rgb triplet "r,g,b" — default '185,165,99'  (gold)
 *   respectReducedMotion  default true. If user prefers reduced motion, falls back
 *                         to a static dot pattern with no animation.
 *
 * Returns a controller: { destroy(), setOption(key, value) }
 */
(function (global) {
  'use strict';

  function hexToRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return { r: 13, g: 40, b: 24 };
    return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16)
    };
  }

  function init(opts) {
    opts = opts || {};
    const canvas = typeof opts.canvas === 'string'
      ? document.querySelector(opts.canvas)
      : opts.canvas;
    if (!canvas || canvas.tagName !== 'CANVAS') {
      console.warn('[PevarisFlowField] canvas not found');
      return { destroy() {}, setOption() {} };
    }

    const ctx = canvas.getContext('2d');
    const state = {
      density: opts.density != null ? opts.density : 0.5,
      response: opts.response != null ? opts.response : 0.75,
      bg: hexToRgb(opts.backgroundColor || '#0d2818'),
      particle: opts.particleColor || '230,233,216',
      highlight: opts.highlightColor || '185,165,99',
      reducedMotion: opts.respectReducedMotion !== false &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const mouse = { x: 0, y: 0, smoothX: 0, smoothY: 0, targetX: 0, targetY: 0, active: false };
    let W = 0, H = 0;
    let particles = [];
    let raf = 0;
    let destroyed = false;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.max(1, Math.floor(W * dpr));
      canvas.height = Math.max(1, Math.floor(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!mouse.active) {
        mouse.x = mouse.smoothX = mouse.targetX = W * 0.62;
        mouse.y = mouse.smoothY = mouse.targetY = H * 0.42;
      }
      seed();
    }

    function seed() {
      particles = [];
      const n = Math.floor(800 * state.density);
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: 0, vy: 0,
          life: Math.random() * 240
        });
      }
    }

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    }

    function frame(t) {
      if (destroyed) return;
      // smooth mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.12;
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.12;

      // trail fade
      ctx.fillStyle = 'rgba(' + state.bg.r + ',' + state.bg.g + ',' + state.bg.b + ',0.07)';
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // noise-ish field (summed sines — cheap & smooth)
        const a = (Math.sin(p.x * 0.006 + t * 0.00035) +
                   Math.cos(p.y * 0.006 + t * 0.00042)) * Math.PI;
        let vx = Math.cos(a) * 0.75;
        let vy = Math.sin(a) * 0.75;

        // mouse attraction
        const dx = mouse.smoothX - p.x;
        const dy = mouse.smoothY - p.y;
        const d2 = dx * dx + dy * dy;
        let mfp = 0;
        if (d2 < 67600 /* 260^2 */ && d2 > 4) {
          const d = Math.sqrt(d2);
          const f = 1 - d / 260;
          vx += (dx / d) * 1.1 * state.response * f;
          vy += (dy / d) * 1.1 * state.response * f;
          mfp = f;
        }

        p.vx = p.vx * 0.92 + vx * 0.08;
        p.vy = p.vy * 0.92 + vy * 0.08;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const size = 0.7 + mfp * 1.5;
        if (mfp > 0.45) {
          ctx.fillStyle = 'rgba(' + state.highlight + ',' + (0.32 + mfp * 0.22) + ')';
        } else {
          ctx.fillStyle = 'rgba(' + state.particle + ',' + (0.4 + mfp * 0.25) + ')';
        }
        ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);

        // respawn off-screen or aged
        if (p.x < -10 || p.x > W + 10 || p.y < -10 || p.y > H + 10 || p.life > 360) {
          p.x = Math.random() * W;
          p.y = Math.random() * H;
          p.vx = 0; p.vy = 0; p.life = 0;
        }
      }

      raf = requestAnimationFrame(frame);
    }

    function staticFallback() {
      // For users who prefer reduced motion: render a single still frame of dots.
      const spacing = 34 / state.density;
      ctx.fillStyle = 'rgba(' + state.particle + ',0.22)';
      for (let x = spacing / 2; x < W; x += spacing) {
        for (let y = spacing / 2; y < H; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);

    if (state.reducedMotion) {
      staticFallback();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return {
      destroy() {
        destroyed = true;
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
        window.removeEventListener('pointermove', onPointerMove);
        ctx.clearRect(0, 0, W, H);
      },
      setOption(key, value) {
        if (key === 'density') { state.density = value; seed(); }
        else if (key === 'response') { state.response = value; }
        else if (key === 'backgroundColor') { state.bg = hexToRgb(value); }
        else if (key === 'particleColor') { state.particle = value; }
        else if (key === 'highlightColor') { state.highlight = value; }
      }
    };
  }

  // Expose
  if (typeof module === 'object' && module.exports) {
    module.exports = { init: init };
  }
  global.PevarisFlowField = { init: init };
})(typeof window !== 'undefined' ? window : this);

/* ============================================================
 * REACT / NEXT.JS USAGE
 * ============================================================
 *
 * import { useEffect, useRef } from 'react';
 *
 * function HeroBackground() {
 *   const ref = useRef(null);
 *   useEffect(() => {
 *     let controller;
 *     // dynamic import keeps it out of SSR
 *     import('./pevaris-flow-field.js').then(mod => {
 *       controller = mod.init({
 *         canvas: ref.current,
 *         density: 0.5,
 *         response: 0.75,
 *         backgroundColor: '#0d2818',
 *       });
 *     });
 *     return () => controller && controller.destroy();
 *   }, []);
 *   return (
 *     <canvas
 *       ref={ref}
 *       style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
 *     />
 *   );
 * }
 * ============================================================ */
