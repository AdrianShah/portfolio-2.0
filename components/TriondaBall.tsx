'use client';

// The source GLB (Adidas Trionda 2026, ~5.35 MB) was optimized once via:
//   npx @gltf-transform/cli optimize <input> <output> \
//       --compress draco --texture-compress webp --texture-size 512
// Result: 5.35 MB → ~115 KB. To re-run after replacing the source asset,
// run the same command and overwrite public/models/trionda.glb.
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, useGLTF } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

const MODEL_URL = '/models/trionda.glb';
const DRACO_DECODER_PATH =
    'https://www.gstatic.com/draco/versioned/decoders/1.5.7/';

const Ball = () => {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF(MODEL_URL, DRACO_DECODER_PATH, true);

    const cloned = useMemo(() => scene.clone(true), [scene]);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.6;
        }
    });

    return (
        <group ref={groupRef}>
            <primitive object={cloned} />
        </group>
    );
};

if (typeof window !== 'undefined') {
    useGLTF.preload(MODEL_URL, DRACO_DECODER_PATH, true);
}

interface Props {
    size?: number;
    className?: string;
}

const TriondaBall = ({ size = 28, className }: Props) => {
    return (
        <div
            style={{
                width: size,
                height: size,
                flexShrink: 0,
            }}
            className={className}
            aria-hidden="true"
        >
            <Canvas
                camera={{ position: [0, 0, 3], fov: 35 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
                frameloop="always"
            >
                <hemisphereLight
                    args={['#ffffff', '#3a3a3a', 1.2]}
                />
                <directionalLight position={[3, 4, 5]} intensity={1.6} />
                <directionalLight
                    position={[-3, -1, -2]}
                    intensity={0.45}
                />
                <Suspense fallback={null}>
                    <Bounds fit clip margin={1.15}>
                        <Ball />
                    </Bounds>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default TriondaBall;
