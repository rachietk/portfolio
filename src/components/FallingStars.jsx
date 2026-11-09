import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const FallingStars = () => {
  const ref = useRef();
  const starCount = 1000;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    const velocities = [];

    for (let i = 0; i < starCount; i++) {
      const fromLeft = Math.random() < 0.5;

      const x = fromLeft ? -200 + Math.random() * 400 : 200 - Math.random() * 400;
      const y = 300 + Math.random() * 300;
      const z = Math.random() * 400 - 200;

      positions.set([x, y, z], i * 3);

      velocities.push({
        x: fromLeft ? 0.2 + Math.random() * 0.15 : -0.2 - Math.random() * 0.15,
        y: -0.4 - Math.random() * 0.2,
      });
    }

    return { positions, velocities };
  }, []);

  useFrame(() => {
    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      pos[i3] += velocities[i].x;
      pos[i3 + 1] += velocities[i].y;

      if (pos[i3 + 1] < -400 || Math.abs(pos[i3]) > 700) {
        const fromLeft = Math.random() < 0.5;
        pos[i3] = fromLeft ? -200 + Math.random() * 400 : 200 - Math.random() * 400;
        pos[i3 + 1] = 300 + Math.random() * 300;
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.7} sizeAttenuation />
    </points>
  );
};

export default FallingStars;
