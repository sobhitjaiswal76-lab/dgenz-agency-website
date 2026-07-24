"use client";

import React, { useEffect, useRef } from "react";

interface Canvas3DProps {
  currentScene?: number;
}

export default function Canvas3D({ currentScene = 0 }: Canvas3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ target: 0, current: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive canvas resizing
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track mouse for 3D camera parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - width / 2) / (width / 2);
      mouseRef.current.targetY = (e.clientY - height / 2) / (height / 2);
    };

    // Track smooth scroll
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollRef.current.target = window.scrollY / maxScroll;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 3D Particles Data
    const particleCount = width < 768 ? 60 : 140;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 1600,
      y: (Math.random() - 0.5) * 1600,
      z: Math.random() * 2000 - 1000,
      size: Math.random() * 2 + 0.8,
      color: Math.random() > 0.4 ? "rgba(217, 4, 41, 0.45)" : "rgba(245, 245, 245, 0.25)",
      speedZ: Math.random() * 0.4 + 0.1,
    }));

    // Scene 03 Connected Nodes Data
    const ecosystemNodes = [
      { name: "BRAND", angle: 0, radius: 180 },
      { name: "WEB", angle: Math.PI / 3, radius: 180 },
      { name: "MARKETING", angle: (2 * Math.PI) / 3, radius: 180 },
      { name: "GOOGLE", angle: Math.PI, radius: 180 },
      { name: "SEO", angle: (4 * Math.PI) / 3, radius: 180 },
      { name: "AI", angle: (5 * Math.PI) / 3, radius: 180 },
    ];

    // Helper: 3D Point Projection onto 2D Canvas
    const fov = 600;
    const project = (x: number, y: number, z: number, cameraZ: number) => {
      const relZ = z - cameraZ;
      if (relZ <= 10) return null;
      const scale = fov / relZ;
      return {
        x: x * scale + width / 2,
        y: y * scale + height / 2,
        scale,
      };
    };

    // 3D Cube Edge Indices
    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    // Main Render Loop
    let rotAngle = 0;
    const render = () => {
      // Smooth lerp scroll & mouse
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.08;
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const p = scrollRef.current.current; // 0.0 to 1.0
      rotAngle += 0.008;

      // Dark metallic void background with slight crimson trail
      ctx.fillStyle = "rgba(3, 3, 3, 0.22)";
      ctx.fillRect(0, 0, width, height);

      // Camera Z Position travels deeply based on scroll progress
      const cameraZ = p * -4500 + (mouseRef.current.y * 40);
      const cameraX = mouseRef.current.x * 60;
      const cameraY = mouseRef.current.y * 40;

      // 1. Render Floating Particles in 3D Space
      particles.forEach((pt) => {
        pt.z -= pt.speedZ;
        if (pt.z < cameraZ - 500) pt.z += 2000;

        const proj = project(pt.x - cameraX, pt.y - cameraY, pt.z, cameraZ);
        if (proj && proj.x >= 0 && proj.x <= width && proj.y >= 0 && proj.y <= height) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, pt.size * proj.scale, 0, Math.PI * 2);
          ctx.fillStyle = pt.color;
          ctx.fill();
        }
      });

      // 2. SCENE 01 / 13: Central Metallic 3D DGEN Z Logo Object
      const emblemZ = -200;
      const emblemProj = project(0 - cameraX, 0 - cameraY, emblemZ, cameraZ);

      if (emblemProj && p < 0.18) {
        const logoOpacity = Math.max(0, 1 - (p / 0.15));
        ctx.save();
        ctx.globalAlpha = logoOpacity;

        // Render Chrome 3D Wireframe Hexagonal Emblem
        const size = Math.min(140, width * 0.12) * emblemProj.scale;
        const cx = emblemProj.x;
        const cy = emblemProj.y;

        // Draw Outer Chrome Hexagon
        ctx.strokeStyle = "rgba(245, 245, 245, 0.6)";
        ctx.lineWidth = 2 * emblemProj.scale;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#D90429";

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i * Math.PI) / 3 + rotAngle * 0.5;
          const px = cx + size * Math.cos(a);
          const py = cy + size * Math.sin(a);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        // Inner Red Light Core
        ctx.fillStyle = "rgba(217, 4, 41, 0.15)";
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.restore();
      }

      // 3. SCENE 03: Connected 3D Ecosystem Node Grid (p around 0.15 to 0.35)
      if (p >= 0.12 && p <= 0.38) {
        const ecoZ = -1200;
        const centerProj = project(0 - cameraX, 0 - cameraY, ecoZ, cameraZ);
        const sceneOpacity = Math.sin(((p - 0.12) / 0.26) * Math.PI);

        if (centerProj && sceneOpacity > 0.01) {
          ctx.save();
          ctx.globalAlpha = sceneOpacity;

          // Central "YOUR BUSINESS" Node
          ctx.fillStyle = "#D90429";
          ctx.shadowBlur = 20;
          ctx.shadowColor = "#D90429";
          ctx.beginPath();
          ctx.arc(centerProj.x, centerProj.y, 16 * centerProj.scale, 0, Math.PI * 2);
          ctx.fill();

          // Orbiting Nodes & Beziers
          ecosystemNodes.forEach((node, i) => {
            const angle = node.angle + rotAngle * 0.6;
            const nx = Math.cos(angle) * node.radius;
            const ny = Math.sin(angle) * node.radius;
            const nodeProj = project(nx - cameraX, ny - cameraY, ecoZ, cameraZ);

            if (nodeProj) {
              // Glowing Crimson Connection Line
              ctx.strokeStyle = i % 2 === 0 ? "rgba(217, 4, 41, 0.4)" : "rgba(245, 245, 245, 0.25)";
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(centerProj.x, centerProj.y);
              ctx.lineTo(nodeProj.x, nodeProj.y);
              ctx.stroke();

              // Node Dot
              ctx.fillStyle = i % 2 === 0 ? "#F5F5F5" : "#D90429";
              ctx.beginPath();
              ctx.arc(nodeProj.x, nodeProj.y, 6 * nodeProj.scale, 0, Math.PI * 2);
              ctx.fill();
            }
          });

          ctx.shadowBlur = 0;
          ctx.restore();
        }
      }

      // 4. SCENE 07 & 08: 3D Transparent Computational AI Core Cube (p around 0.45 to 0.68)
      if (p >= 0.42 && p <= 0.70) {
        const coreZ = -2800;
        const coreOpacity = Math.sin(((p - 0.42) / 0.28) * Math.PI);

        if (coreOpacity > 0.01) {
          ctx.save();
          ctx.globalAlpha = coreOpacity;

          const cubeSize = 120;
          const rx = rotAngle * 0.8;
          const ry = rotAngle * 1.2;

          // Vertices of 3D Cube
          const rawVerts = [
            [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
            [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
          ];

          const screenVerts = rawVerts.map(([vx, vy, vz]) => {
            // Rotate 3D point
            let y1 = vy * Math.cos(rx) - vz * Math.sin(rx);
            let z1 = vy * Math.sin(rx) + vz * Math.cos(rx);
            let x2 = vx * Math.cos(ry) + z1 * Math.sin(ry);
            let z2 = -vx * Math.sin(ry) + z1 * Math.cos(ry);

            const wx = x2 * cubeSize - cameraX;
            const wy = y1 * cubeSize - cameraY;
            const wz = z2 * cubeSize + coreZ;

            return project(wx, wy, wz, cameraZ);
          });

          // Draw Glowing Edges
          ctx.strokeStyle = "rgba(217, 4, 41, 0.8)";
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 12;
          ctx.shadowColor = "#D90429";

          cubeEdges.forEach(([i, j]) => {
            const v1 = screenVerts[i];
            const v2 = screenVerts[j];
            if (v1 && v2) {
              ctx.beginPath();
              ctx.moveTo(v1.x, v1.y);
              ctx.lineTo(v2.x, v2.y);
              ctx.stroke();
            }
          });

          ctx.shadowBlur = 0;
          ctx.restore();
        }
      }

      // 5. SCENE 11: 3D Tunnel Perspective (p around 0.75 to 0.88)
      if (p >= 0.72 && p <= 0.89) {
        const tunnelOpacity = Math.sin(((p - 0.72) / 0.17) * Math.PI);
        if (tunnelOpacity > 0.01) {
          ctx.save();
          ctx.globalAlpha = tunnelOpacity;
          ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
          ctx.lineWidth = 1;

          // Tunnel Rings
          for (let z = -3200; z <= -3900; z += 120) {
            const ringProj = project(0 - cameraX, 0 - cameraY, z, cameraZ);
            if (ringProj) {
              const ringRadius = 250 * ringProj.scale;
              ctx.beginPath();
              ctx.arc(ringProj.x, ringProj.y, ringRadius, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
          ctx.restore();
        }
      }

      // Volumetric Radial Red Fog Ambient Mask
      const bgGrad = ctx.createRadialGradient(
        width / 2 + mouseRef.current.x * 40,
        height / 2 + mouseRef.current.y * 40,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7
      );
      bgGrad.addColorStop(0, "rgba(217, 4, 41, 0.04)");
      bgGrad.addColorStop(0.5, "rgba(117, 0, 20, 0.02)");
      bgGrad.addColorStop(1, "rgba(3, 3, 3, 0.01)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScene]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-500"
    />
  );
}
