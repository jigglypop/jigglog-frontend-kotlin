import * as THREE from "three";
import React, { useState, useMemo } from "react";
import { Html } from "@react-three/drei";
import * as S from "./style";
import { ICategory } from "../../../type/category";
import { $ } from "../../../util/JQuery";
import { GradientText } from "../../common/text/Text";
import { COLORS } from "../../../constants/constants";

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
      x: Math.random() * 20 + xyzMap(i)[0] * (20 + i * 10),
      y: Math.random() * 20 + xyzMap(i)[1] * (20 + i * 10),
      z: Math.random() * 20 + xyzMap(i)[2] * (20 + i * 10),
      s: 1,
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
            <Html zIndexRange={[1, 0]}>
              <S.SmallTag onClick={() => onClick(i)}>
                <GradientText className="categoryset-text">
                  {categorySet[i].title} {`(${categorySet[i].posts})`}
                </GradientText>
              </S.SmallTag>
            </Html>
            <spotLight intensity={0.6} color={COLORS[i % 10]} />
            <meshStandardMaterial color={COLORS[i % 10]} />
          </mesh>
        </group>
      ))}
    </>
  );
}
