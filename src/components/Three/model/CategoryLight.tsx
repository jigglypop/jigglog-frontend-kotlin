import * as THREE from "three";
import React, { useState, useMemo } from "react";
import { Html, Sphere } from "@react-three/drei";
import * as S from "./style";
import { ICategory } from "../../../type/category";
import { $ } from "../../../util/JQuery";
import { GradientText } from "../../common/text/Text";
import { COLORS, COLORSLIGHT } from "../../../constants/constants";

export default function CategoryLight({
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
      x: Math.random() * 15 + xyzMap(i)[0] * (15 + i * 10),
      y: Math.random() * 15 + xyzMap(i)[1] * (15 + i * 10),
      z: Math.random() * 15 + xyzMap(i)[2] * (15 + i * 10),
      s: 1,
    }));
  }, [categorySet]);

  return (
    <>
      {data.map((props, i) => (
        <group key={i}>
          <mesh
            position={[props.x, props.y, props.z]}
            scale={[props.s, props.s, props.s]}
          >
            <spotLight intensity={0.2} color={COLORSLIGHT[i % 10]} />
          </mesh>
        </group>
      ))}
    </>
  );
}
