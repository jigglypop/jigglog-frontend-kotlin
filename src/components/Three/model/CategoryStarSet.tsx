import * as THREE from "three";
import React, { useState, useMemo } from "react";
import { Html, Sphere } from "@react-three/drei";
import * as S from "./style";
import { ICategory } from "../../../type/category";
import { $ } from "../../../util/JQuery";
import { GradientText } from "../../common/text/Text";
import { COLORS } from "../../../constants/constants";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function CategoryStarSet({
  categorySet,
}: {
  categorySet: ICategory[];
}) {
  const [geometry] = useState(() => new THREE.SphereGeometry(1, 32, 32));

  const xyzMap = (i: number) => {
    const obj = [
      [1, 1, 1],
      [1, 1, -1],
      [1, -1, 1],
      [1, -1, -1],
      [-1, 1, 1],
      [-1, 1, -1],
      [-1, -1, 1],
      [-1, -1, -1],
    ];
    return obj[i % 8];
  };

  const data = useMemo(() => {
    return new Array(categorySet.length).fill([]).map((_, i) => ({
      x: Math.random() * 25 + xyzMap(i)[0] * (25 + i * 10),
      y: Math.random() * 25 + xyzMap(i)[1] * (25 + i * 10),
      z: Math.random() * 25 + xyzMap(i)[2] * (25 + i * 10),
      s: 0.5,
    }));
  }, [categorySet]);

  const onClick = (i: number) => {
    $(`.sidebar-category-${categorySet[i].id}-button`).get().click();
  };

  return (
    <>
      {data.map((props, i) => (
        <group key={i}>
          <mesh
            position={[props.x, props.y, props.z]}
            scale={[props.s, props.s, props.s]}
            geometry={geometry}
            receiveShadow
            castShadow
          >
            <Html zIndexRange={[2, 0]}>
              <S.SmallTag onClick={() => onClick(i)}>
                <S.Line />
                <S.InnerText className="categoryset-text">
                  {categorySet[i].title} {`(${categorySet[i].posts})`}
                </S.InnerText>
              </S.SmallTag>
            </Html>
            <Sphere args={[1.5, 100, 100]}>
              <meshBasicMaterial
                color={[
                  COLORS[i % 10][0],
                  COLORS[i % 10][1],
                  COLORS[i % 10][2],
                ]}
                toneMapped={false}
              />
            </Sphere>
          </mesh>
        </group>
      ))}
    </>
  );
}
