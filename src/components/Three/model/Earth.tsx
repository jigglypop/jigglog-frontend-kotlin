import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { useSpring } from "@react-spring/three";
import { useGltf } from "../util/gltf";
import { Html } from "@react-three/drei";
import { $ } from "../../../util/JQuery";

export interface IStoreOuter {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}
// 지구
export const Earth = ({ setProgress }: IStoreOuter) => {
  const { model, progress } = useGltf("/earth/scene.gltf");
  const [isSmall, setIsSmall] = useState(false);

  const setSmallOrBigWidth = () => {
    if (document.documentElement.scrollWidth <= 600) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    setSmallOrBigWidth();
    window.onresize = () => {
      setSmallOrBigWidth();
    };
  }, []);

  useEffect(() => {
    setProgress(progress);
  }, [progress]);
  const [active, setActive] = useState(0);

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  useEffect(() => {
    document.body.style.cursor = active ? "pointer" : "auto";
  }, [active]);
  const scale = spring.to([0, isSmall ? 30 : 40], [isSmall ? 30 : 40, 200]);

  const onClick = () => {
    $(".header-resume-button").get().click();
  };
  const onPointHover = () => {
    setActive(1);
    const tag = document.getElementById("earth-tag");
    tag?.classList.remove("isWide");
  };
  const onPointOut = () => {
    setActive(0);
    const tag = document.getElementById("earth-tag");
    tag?.classList.add("isWide");
  };
  const mesh = useRef<THREE.Mesh>();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <group>
        <Html zIndexRange={[100, 10]}></Html>
        <a.mesh
          ref={mesh}
          onClick={() => onClick()}
          onPointerOver={() => onPointHover()}
          onPointerOut={() => onPointOut()}
          scale-x={scale}
          scale-y={scale}
          scale-z={scale}
          receiveShadow
          castShadow
        >
          {model && <primitive object={model.scene} />}
        </a.mesh>
      </group>
    </>
  );
};
