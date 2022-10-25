import React, { useRef, useEffect } from "react";
import { a } from "@react-spring/three";
import { useGltf } from "../util/gltf";

export interface IStoreOuter {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

// 별
export const Outer = ({ setProgress }: IStoreOuter) => {
  const { model, progress } = useGltf("/gallaxy/scene.gltf");
  const mesh = useRef<THREE.Mesh>();
  useEffect(() => {
    setProgress(progress);
  }, [progress]);

  return (
    <>
      <group>
        <a.mesh scale={[0.2, 0.2, 0.2]} ref={mesh} receiveShadow castShadow>
          {model && <primitive object={model.scene} />}
        </a.mesh>
      </group>
    </>
  );
};
