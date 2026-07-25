const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const width = 1280;
const height = 720;
const fps = 30;
const durationSec = 6;
const totalFrames = fps * durationSec;

const outputMp4 = path.join(__dirname, "../public/videos/hero-cgi.mp4");
const outputWebm = path.join(__dirname, "../public/videos/hero-dgenz.webm");

console.log(`Generating cinematic 3D CGI video (${width}x${height}, ${totalFrames} frames)...`);

function renderFrame(frameIdx) {
  const t = frameIdx / totalFrames; // 0.0 to 1.0
  const loopAngle = t * Math.PI * 2;
  
  const buffer = Buffer.alloc(width * height * 3);
  
  // Camera slow cinematic drift
  const camX = Math.sin(loopAngle) * 15;
  const camY = Math.cos(loopAngle) * 8;

  // Particle positions
  const numParticles = 60;
  const particles = [];
  for (let p = 0; p < numParticles; p++) {
    const seed = p * 1337.7;
    const px = ((Math.sin(seed) * 0.5 + 0.5) * width + Math.sin(loopAngle + seed) * 30 + camX) % width;
    const py = ((Math.cos(seed * 1.3) * 0.5 + 0.5) * height - (t * 80 + seed * 10) % height + height) % height;
    const pz = (p % 5) + 1;
    particles.push({ x: px, y: py, z: pz, red: p % 3 === 0 });
  }

  // Server racks specification (6 vertical towers in 3D perspective on right side)
  const racks = [];
  for (let r = 0; r < 6; r++) {
    const depth = 1 - r * 0.12; // z scale
    const rx = width * 0.52 + r * 110 * depth - camX * (1 - depth * 0.5);
    const rw = 75 * depth;
    const ry1 = 80 * depth - camY;
    const ry2 = height * 0.85;
    racks.push({ x: rx, w: rw, y1: ry1, y2: ry2, depth });
  }

  let offset = 0;
  for (let y = 0; y < height; y++) {
    const isFloor = y > height * 0.72;
    const floorFactor = isFloor ? (y - height * 0.72) / (height * 0.28) : 0;

    for (let x = 0; x < width; x++) {
      let r = 3;
      let g = 3;
      let b = 5; // Deep dark void background

      // Radial background ambient glow
      const dx = x - (width * 0.75 + camX);
      const dy = y - (height * 0.4 + camY);
      const distSq = dx * dx + dy * dy;
      const bgGlow = Math.exp(-distSq / (400 * 400));
      r += Math.floor(bgGlow * 35);
      g += Math.floor(bgGlow * 4);
      b += Math.floor(bgGlow * 8);

      // Render 3D Server Racks & Crimson Neon Strips
      for (let i = 0; i < racks.length; i++) {
        const rack = racks[i];
        if (x >= rack.x && x <= rack.x + rack.w && y >= rack.y1 && y <= rack.y2) {
          // Metallic Dark Body
          const relX = (x - rack.x) / rack.w;
          const metalShade = Math.floor((0.08 + relX * 0.08 + (y % 12 === 0 ? 0.05 : 0)) * 255 * rack.depth);
          r = Math.max(r, metalShade);
          g = Math.max(g, metalShade);
          b = Math.max(b, metalShade + 5);

          // Internal server rack horizontal detail lines
          if (y % 16 < 2 && relX > 0.15 && relX < 0.85) {
            r = Math.min(255, r + 25);
            g = Math.min(255, g + 25);
            b = Math.min(255, b + 30);
          }
        }

        // Left vertical glowing red neon strip on front of each rack tower
        const stripX = rack.x;
        const distToStrip = Math.abs(x - stripX);
        if (y >= rack.y1 && y <= rack.y2) {
          if (distToStrip < 3) {
            // Intense Red Core
            r = 240;
            g = 20;
            b = 45;
          } else if (distToStrip < 24) {
            // Neon Bloom
            const bloom = Math.exp(-distToStrip * 0.18) * rack.depth;
            r = Math.min(255, r + Math.floor(bloom * 210));
            g = Math.min(255, g + Math.floor(bloom * 20));
            b = Math.min(255, b + Math.floor(bloom * 35));
          }
        }

        // Right vertical glowing red neon edge
        const stripX2 = rack.x + rack.w;
        const distToStrip2 = Math.abs(x - stripX2);
        if (y >= rack.y1 && y <= rack.y2) {
          if (distToStrip2 < 2) {
            r = 220;
            g = 15;
            b = 35;
          } else if (distToStrip2 < 16) {
            const bloom = Math.exp(-distToStrip2 * 0.22) * rack.depth;
            r = Math.min(255, r + Math.floor(bloom * 160));
            g = Math.min(255, g + Math.floor(bloom * 15));
            b = Math.min(255, b + Math.floor(bloom * 25));
          }
        }
      }

      // Metallic Reflective Floor Effect
      if (isFloor) {
        const mirrorY = Math.floor(height * 0.72 - (y - height * 0.72) * 0.8);
        if (mirrorY >= 0 && mirrorY < height) {
          const reflectFactor = (0.35 - floorFactor * 0.25);
          // Simple floor reflection sampling
          const reflDist = Math.abs(x - width * 0.7);
          const floorGlow = Math.exp(-reflDist * 0.005) * reflectFactor;
          r = Math.min(255, r + Math.floor(floorGlow * 180));
          g = Math.min(255, g + Math.floor(floorGlow * 15));
          b = Math.min(255, b + Math.floor(floorGlow * 30));
        }
      }

      // Drifting Particles
      for (let p = 0; p < particles.length; p++) {
        const pt = particles[p];
        const pdx = x - pt.x;
        const pdy = y - pt.y;
        const pdistSq = pdx * pdx + pdy * pdy;
        if (pdistSq < 12) {
          const pIntensity = Math.exp(-pdistSq / 3);
          if (pt.red) {
            r = Math.min(255, r + Math.floor(pIntensity * 230));
            g = Math.min(255, g + Math.floor(pIntensity * 30));
            b = Math.min(255, b + Math.floor(pIntensity * 50));
          } else {
            r = Math.min(255, r + Math.floor(pIntensity * 200));
            g = Math.min(255, g + Math.floor(pIntensity * 200));
            b = Math.min(255, b + Math.floor(pIntensity * 220));
          }
        }
      }

      // Soft vignette on screen borders
      const vx = (x - width / 2) / (width / 2);
      const vy = (y - height / 2) / (height / 2);
      const vignette = 1 - (vx * vx + vy * vy) * 0.28;
      r = Math.floor(Math.max(0, r * vignette));
      g = Math.floor(Math.max(0, g * vignette));
      b = Math.floor(Math.max(0, b * vignette));

      buffer[offset++] = r;
      buffer[offset++] = g;
      buffer[offset++] = b;
    }
  }

  return buffer;
}

// Generate MP4 with ffmpeg
const ffmpegMp4 = spawn("ffmpeg", [
  "-y",
  "-f", "rawvideo",
  "-pix_fmt", "rgb24",
  "-s", `${width}x${height}`,
  "-r", `${fps}`,
  "-i", "-",
  "-c:v", "libx264",
  "-preset", "fast",
  "-pix_fmt", "yuv420p",
  outputMp4
]);

ffmpegMp4.stderr.on("data", (data) => {
  // console.log(data.toString());
});

let currentFrame = 0;
function writeFrames() {
  let ok = true;
  while (currentFrame < totalFrames && ok) {
    const buf = renderFrame(currentFrame);
    currentFrame++;
    ok = ffmpegMp4.stdin.write(buf);
  }
  if (currentFrame < totalFrames) {
    ffmpegMp4.stdin.once("drain", writeFrames);
  } else {
    ffmpegMp4.stdin.end();
  }
}

writeFrames();

ffmpegMp4.on("close", (code) => {
  console.log(`MP4 generated successfully! Exit code: ${code}`);

  // Create WebM version as well
  const ffmpegWebm = spawn("ffmpeg", [
    "-y",
    "-i", outputMp4,
    "-c:v", "libvpx-vp9",
    "-b:v", "1M",
    outputWebm
  ]);

  ffmpegWebm.on("close", (code2) => {
    console.log(`WebM generated successfully! Exit code: ${code2}`);
  });
});
