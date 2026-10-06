import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function Orbits({ color, reduced }: { color: string; reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const geometry = useMemo(() => {
    const vertices: number[] = [];
    for (let ring = 0; ring < 24; ring++) {
      const tilt = ring * .147;
      const radius = 2.7 + ring * .042;
      for (let point = 0; point < 160; point++) {
        for (const step of [point, point + 1]) {
          const angle = step / 160 * Math.PI * 2;
          const x = Math.cos(angle) * radius * 1.65;
          const y = Math.sin(angle) * radius;
          vertices.push(x, y * Math.cos(tilt), y * Math.sin(tilt));
        }
      }
    }
    const result = new THREE.BufferGeometry();
    result.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return result;
  }, []);
  useEffect(() => () => geometry.dispose(), [geometry]);
  useFrame(({ pointer }, rawDelta) => {
    if (!group.current || reduced) return;
    const dt = Math.min(rawDelta, .05);
    group.current.rotation.y += dt * .022;
    group.current.rotation.z += dt * .009;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * .12, 2, dt);
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, .5 + pointer.x * .15, 2, dt);
  });
  return <group ref={group} rotation={[.1, .4, -.25]} position={[.5, 0, 0]}>
    <lineSegments geometry={geometry}><lineBasicMaterial color={color} transparent opacity={.22} depthWrite={false} /></lineSegments>
  </group>;
}

export function OrbitScene() {
  const [palette, setPalette] = useState<string>();
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1; canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--gold').trim();
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    setPalette(`rgb(${r},${g},${b})`);
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  if (!palette) return null;
  return <div className="orbit-canvas" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={1} gl={{ antialias: true, alpha: true }} frameloop={reduced ? 'demand' : 'always'}>
      <Orbits color={palette} reduced={reduced} />
    </Canvas>
  </div>;
}