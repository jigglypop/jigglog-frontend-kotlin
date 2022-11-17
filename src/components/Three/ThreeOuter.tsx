import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as S from "./style";
import { OrbitControls, Stars } from "@react-three/drei";
import Progress from "./Progress";
import { Earth } from "./model/Earth";
import { Star } from "./model/Star";
import CategoryStarSet from "./model/CategoryStarSet";
import { Outer } from "./model/Outer";
import { ICategory } from "../../type/category";
import { $ } from "../../util/JQuery";
import { GradientText } from "../common/text/Text";
import CategoryLight from "./model/CategoryLight";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function ThreeOuter({
  categorySet,
}: {
  categorySet: ICategory[];
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    $("html").css("overflow", "hidden");
    return () => {
      $("html").css("overflow", "scroll");
    };
  }, []);

  return (
    <S.ThreeWrapper>
      <S.MainTitle>
        <GradientText className="main-title">JIGGLOG</GradientText>
        <GradientText className="main-description">
          JIGGLOG에 오신 것을 환영합니다
        </GradientText>
        <Progress progress={progress} />
      </S.MainTitle>
      <S.Tag className="isWide" id="earth-tag">
        <h1>JIGGLYPOP</h1>
        <h3>무언가 만드는 것을 좋아합니다</h3>
        <h3>REACT 프론트 엔드에 관심이 많고 VUE, ANGULAR를 모두 사용합니다.</h3>
        <h3>DJANGO, express, nest.js, spring boot 백엔드도 다룹니다.</h3>
        <h3>3D 웹에 관심이 많으며 항상 프로젝트를 쉬지 않고 합니다.</h3>
        <GradientText>행성을 클릭하면 이력서 페이지로 이동합니다.</GradientText>
      </S.Tag>
      <Canvas
        camera={{
          position: [100, 10, 10],
          far: 10000,
        }}
      >
        <OrbitControls minDistance={60} maxDistance={100} />
        <Earth setProgress={setProgress} />
        <Star setProgress={setProgress} />
        <Outer setProgress={setProgress} />
        <fog attach="fog" args={["#020202", 15, 120]} />
        <CategoryStarSet categorySet={categorySet} />
        <CategoryLight categorySet={categorySet} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
      </Canvas>
    </S.ThreeWrapper>
  );
}
