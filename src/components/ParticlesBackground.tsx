import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const createParticles = (width: number, height: number) => {
    const particleCount = Math.min(Math.floor(width * height / 15000), 100);
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 0.5;
      const color = Math.random() > 0.5 ? '#00f0ff' : '#8e00ff';
      
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: color
      });
    }
    
    return newParticles;
  };

  const drawParticles = (
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number,
    particlesToDraw: Particle[]
  ) => {
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw each particle
    particlesToDraw.forEach(particle => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = 0.7;
      ctx.fill();
      
      // Draw connections between nearby particles
      particlesToDraw.forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = 0.1 * (1 - distance / 150);
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = createParticles(canvas.width, canvas.height);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const animate = () => {
      if (ctx && canvas) {
        drawParticles(ctx, canvas.width, canvas.height, particles.current);
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-[#0a0a23] z-0"
    />
  );
};

export default ParticlesBackground;