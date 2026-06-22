"use client";

import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  color: string;
  size: number;
}

interface Cube3D {
  x: number;
  y: number;
  z: number;
  size: number;
  rx: number;
  ry: number;
  rz: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default function Canvas3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic sizing helper
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Track mouse coordinates for interactive parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX - width / 2;
      mouseRef.current.targetY = e.clientY - height / 2;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // 3D Particles
    const particlesCount = Math.min(100, Math.floor((width * height) / 15000));
    const particles: Point3D[] = [];
    const colors = ["rgba(225, 29, 72, 0.45)", "rgba(34, 197, 94, 0.35)", "rgba(100, 116, 139, 0.25)"];

    for (let i = 0; i < particlesCount; i++) {
      const z = Math.random() * 800 - 400; // -400 to 400
      const x = Math.random() * width - width / 2;
      const y = Math.random() * height - height / 2;
      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2 + 1,
        color: colors[i % colors.length],
      });
    }

    // Floating Interactive 3D Wireframe Cubes
    const cubes: Cube3D[] = [
      {
        x: -width * 0.25,
        y: -height * 0.15,
        z: 100,
        size: Math.min(100, width * 0.12),
        rx: Math.random() * Math.PI,
        ry: Math.random() * Math.PI,
        rz: Math.random() * Math.PI,
        speedX: 0.005,
        speedY: 0.008,
        color: "rgba(225, 29, 72, 0.85)", // Deep crimson outline
      },
      {
        x: width * 0.25,
        y: height * 0.18,
        z: -50,
        size: Math.min(80, width * 0.09),
        rx: Math.random() * Math.PI,
        ry: Math.random() * Math.PI,
        rz: Math.random() * Math.PI,
        speedX: -0.007,
        speedY: 0.004,
        color: "rgba(34, 197, 94, 0.75)", // Neon green outline
      },
      {
        x: 0,
        y: -height * 0.25,
        z: -150,
        size: Math.min(120, width * 0.15),
        rx: Math.random() * Math.PI,
        ry: Math.random() * Math.PI,
        rz: Math.random() * Math.PI,
        speedX: 0.003,
        speedY: -0.005,
        color: "rgba(156, 163, 175, 0.6)", // Matte grey line
      },
    ];

    // Perspective Projection Settings
    const fov = 450; // Camera focal length

    // 3D rotation logic
    const rotatePoint = (x: number, y: number, z: number, rx: number, ry: number, rz: number) => {
      // Rotation around X
      let cosX = Math.cos(rx);
      let sinX = Math.sin(rx);
      let y1 = y * cosX - z * sinX;
      let z1 = y * sinX + z * cosX;

      // Rotation around Y
      let cosY = Math.cos(ry);
      let sinY = Math.sin(ry);
      let x2 = x * cosY + z1 * sinY;
      let z2 = -x * sinY + z1 * cosY;

      // Rotation around Z
      let cosZ = Math.cos(rz);
      let sinZ = Math.sin(rz);
      let x3 = x2 * cosZ - y1 * sinZ;
      let y3 = x2 * sinZ + y1 * cosZ;

      return { x: x3, y: y3, z: z2 };
    };

    // Main Draw Function
    const render = () => {
      ctx.fillStyle = "rgba(4, 4, 6, 0.12)"; // Matte black with light motion blur trail
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Custom cyber digital matrix style grid on the floor/ceiling
      ctx.strokeStyle = "rgba(225, 29, 72, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render 3D Background Particles with interactive parallax drift
      particles.forEach((p) => {
        // Rotational shift or drift based on hover
        let dx = mouseRef.current.x * (p.z / 800);
        let dy = mouseRef.current.y * (p.z / 800);

        p.x = p.baseX - dx;
        p.y = p.baseY - dy;

        // Project 3D coordinates to 2D Screen
        const depthRatio = fov / (fov + p.z + 400);
        const projectedX = p.x * depthRatio + width / 2;
        const projectedY = p.y * depthRatio + height / 2;

        if (projectedX >= 0 && projectedX <= width && projectedY >= 0 && projectedY <= height) {
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, p.size * depthRatio * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Connect nearby dots with delicate glowing spiderwebs
          particles.forEach((other) => {
            if (p === other) return;
            const distZ = Math.abs(p.z - other.z);
            if (distZ < 40) {
              const distX = Math.abs(p.x - other.x);
              const distY = Math.abs(p.y - other.y);
              if (distX < 90 && distY < 90) {
                const targetRatio = fov / (fov + other.z + 400);
                const ox = other.x * targetRatio + width / 2;
                const oy = other.y * targetRatio + height / 2;
                ctx.strokeStyle = `rgba(225, 29, 72, ${0.1 * (1 - (distX + distY) / 180)})`;
                ctx.beginPath();
                ctx.moveTo(projectedX, projectedY);
                ctx.lineTo(ox, oy);
                ctx.stroke();
              }
            }
          });
        }
      });

      // Render 3D Wireframe Cubes
      cubes.forEach((cube) => {
        cube.rx += cube.speedX;
        cube.ry += cube.speedY;
        cube.rz += 0.002;

        // Interactive mouse tension
        const mouseParallaxX = mouseRef.current.x * 0.15;
        const mouseParallaxY = mouseRef.current.y * 0.15;

        // Vertices of a standard 3D Box centered around (0,0,0) with sizing
        const halfSize = cube.size / 2;
        const localVertices = [
          { x: -halfSize, y: -halfSize, z: -halfSize },
          { x: halfSize, y: -halfSize, z: -halfSize },
          { x: halfSize, y: halfSize, z: -halfSize },
          { x: -halfSize, y: halfSize, z: -halfSize },
          { x: -halfSize, y: -halfSize, z: halfSize },
          { x: halfSize, y: -halfSize, z: halfSize },
          { x: halfSize, y: halfSize, z: halfSize },
          { x: -halfSize, y: halfSize, z: halfSize },
        ];

        // Project vertices to canvas space with rotation and position offset
        const screenVertices = localVertices.map((v) => {
          // Rotate vertex
          const rotated = rotatePoint(v.x, v.y, v.z, cube.rx, cube.ry, cube.rz);
          // Apply world coordinates + mouse drift
          const worldX = rotated.x + cube.x - mouseParallaxX;
          const worldY = rotated.y + cube.y - mouseParallaxY;
          const worldZ = rotated.z + cube.z;

          const projRatio = fov / (fov + worldZ + 200);
          return {
            x: worldX * projRatio + width / 2,
            y: worldY * projRatio + height / 2,
            z: worldZ,
          };
        });

        // Edges connecting the 8 vertices of a cube
        const edges = [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 0], // Back face
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 4], // Front face
          [0, 4],
          [1, 5],
          [2, 6],
          [3, 7], // Connecting edges
        ];

        // Drawing cube faces (Semi-glassmorphic transparency)
        ctx.fillStyle = cube.color === "rgba(225, 29, 72, 0.85)" 
          ? "rgba(225, 29, 72, 0.015)" 
          : "rgba(34, 197, 94, 0.012)";

        // Draw translucent faces to simulate a solid glass shape
        const faces = [
          [0, 1, 2, 3], // Back
          [4, 5, 6, 7], // Front
          [0, 1, 5, 4], // Bottom
          [2, 3, 7, 6], // Top
          [0, 3, 7, 4], // Left
          [1, 2, 6, 5], // Right
        ];

        faces.forEach((face) => {
          ctx.beginPath();
          ctx.moveTo(screenVertices[face[0]].x, screenVertices[face[0]].y);
          for (let f = 1; f < 4; f++) {
            ctx.lineTo(screenVertices[face[f]].x, screenVertices[face[f]].y);
          }
          ctx.closePath();
          ctx.fill();
        });

        // Draw edges with glowing neon accent style
        ctx.lineWidth = 1.6;
        edges.forEach(([p1, p2]) => {
          ctx.strokeStyle = cube.color;
          // Outer neon glow
          ctx.shadowBlur = 10;
          ctx.shadowColor = cube.color;

          ctx.beginPath();
          ctx.moveTo(screenVertices[p1].x, screenVertices[p1].y);
          ctx.lineTo(screenVertices[p2].x, screenVertices[p2].y);
          ctx.stroke();

          // Reset shadow for performance
          ctx.shadowBlur = 0;
        });

        // Add cyber indicators (corner anchors) of the bounding box
        ctx.fillStyle = "#ffffff";
        screenVertices.forEach((sv) => {
          ctx.beginPath();
          ctx.arc(sv.x, sv.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Ambient glowing central nebula
      const grad = ctx.createRadialGradient(
        width / 2 + mouseRef.current.x * 0.3,
        height / 2 + mouseRef.current.y * 0.3,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.6
      );
      grad.addColorStop(0, "rgba(225, 29, 72, 0.05)"); // Central crimson aura
      grad.addColorStop(0.3, "rgba(34, 197, 94, 0.02)");  // Green secondary transition
      grad.addColorStop(1, "rgba(4, 4, 6, 0.01)");        // Outer void
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(render);
    };

    render();

    // Cleanup listeners
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none" />;
}
