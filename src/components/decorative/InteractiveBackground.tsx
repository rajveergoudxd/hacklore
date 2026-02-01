'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Track mouse position
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Dot grid configuration
        const dotSpacing = 32;
        const baseDotRadius = 1.5;
        const maxDistance = 80; // Smaller splash area
        const primaryColor = { r: 242, g: 162, b: 13 };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cols = Math.ceil(canvas.width / dotSpacing) + 1;
            const rows = Math.ceil(canvas.height / dotSpacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * dotSpacing;
                    const y = j * dotSpacing;

                    // Calculate distance from mouse
                    const dx = mouseRef.current.x - x;
                    const dy = mouseRef.current.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Calculate opacity and SCALE based on distance
                    let opacity = 0.2;
                    let radius = baseDotRadius;

                    if (distance < maxDistance) {
                        const factor = 1 - distance / maxDistance;
                        opacity = 0.2 + factor * 0.8;
                        // Scale dots up near mouse (up to 3x size)
                        radius = baseDotRadius + factor * 4;
                    }

                    // Draw dot
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);

                    if (distance < maxDistance) {
                        // Highlight with primary color near mouse
                        const factor = 1 - distance / maxDistance;
                        ctx.fillStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${opacity})`;

                        // Add glow effect for closest dots
                        if (factor > 0.5) {
                            ctx.shadowColor = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.5)`;
                            ctx.shadowBlur = 8;
                        } else {
                            ctx.shadowBlur = 0;
                        }
                    } else {
                        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.shadowBlur = 0;
                    }

                    ctx.fill();

                    // Draw connecting lines to nearby dots when mouse is close
                    if (distance < maxDistance * 0.7) {
                        ctx.shadowBlur = 0; // Reset shadow for lines

                        // Connect to right neighbor
                        if (i < cols - 1) {
                            const nextX = (i + 1) * dotSpacing;
                            const nextY = y;
                            const nextDx = mouseRef.current.x - nextX;
                            const nextDy = mouseRef.current.y - nextY;
                            const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy);

                            if (nextDistance < maxDistance) {
                                ctx.beginPath();
                                ctx.moveTo(x, y);
                                ctx.lineTo(nextX, nextY);
                                const lineOpacity = (1 - Math.max(distance, nextDistance) / maxDistance) * 0.4;
                                ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${lineOpacity})`;
                                ctx.lineWidth = 1;
                                ctx.stroke();
                            }
                        }

                        // Connect to bottom neighbor
                        if (j < rows - 1) {
                            const nextX = x;
                            const nextY = (j + 1) * dotSpacing;
                            const nextDx = mouseRef.current.x - nextX;
                            const nextDy = mouseRef.current.y - nextY;
                            const nextDistance = Math.sqrt(nextDx * nextDx + nextDy * nextDy);

                            if (nextDistance < maxDistance) {
                                ctx.beginPath();
                                ctx.moveTo(x, y);
                                ctx.lineTo(nextX, nextY);
                                const lineOpacity = (1 - Math.max(distance, nextDistance) / maxDistance) * 0.4;
                                ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${lineOpacity})`;
                                ctx.lineWidth = 1;
                                ctx.stroke();
                            }
                        }
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}
