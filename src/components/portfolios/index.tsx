import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import { IIconSet, IPortfolio } from "../../type/portfolio";
import { $ } from "../../util/JQuery";
import * as S from "./style";
import { GradientText } from "../common/text/Text";
import { useRouter } from "next/router";
import { portfoliosAtom } from "../../store/portfolios/atom";
import { useAtomValue } from "jotai";

const Portfolios = () => {
  const parallaxRef = useRef(null);
  const { portfolios } = useAtomValue(portfoliosAtom);
  const router = useRouter();

  const onClick = (index: number) => {
    router.push(`/portfolio/${index}`);
  };

  useEffect(() => {
    $("body").css("overflow", "hidden");
    return () => {
      $("body").css("overflow", "scroll");
    };
  }, []);
  return (
    <>
      {portfolios.length !== 0 && (
        <S.PortfoliosWrapper>
          <Parallax
            pages={portfolios.length}
            className="parallax"
            ref={parallaxRef}
          >
            {[...portfolios]
              .reverse()
              .map((portfolio: IPortfolio, index: number) => (
                <S.PortfolioItem
                  key={index}
                  position={index % 2}
                  onClick={() => onClick(portfolio.id)}
                >
                  <ParallaxLayer
                    offset={index}
                    speed={1}
                    className="portfolio-wrapper"
                  >
                    <img
                      src={portfolio.images}
                      alt="portfolio"
                      className="portfolio-background"
                    />
                  </ParallaxLayer>

                  <ParallaxLayer offset={index} speed={1}>
                    <div className="background" />
                  </ParallaxLayer>
                  <ParallaxLayer
                    offset={index}
                    speed={1}
                    className="portfolio-items"
                  >
                    <img
                      src={portfolio.images}
                      className="portfolio-image-item"
                    />
                  </ParallaxLayer>
                  <ParallaxLayer offset={index} speed={1.2}>
                    <div className="titlebig">
                      <Link href={`/portfolio/${portfolio.id}`}>
                        <GradientText>
                          <p>{portfolio.title}</p>
                        </GradientText>
                      </Link>
                    </div>
                  </ParallaxLayer>
                  <ParallaxLayer offset={index} speed={-0}>
                    <div className="summarybig">
                      <GradientText>
                        <p>{portfolio.summary}</p>
                      </GradientText>
                    </div>
                  </ParallaxLayer>
                  <ParallaxLayer offset={index} speed={-0}>
                    <div className="iconsetbig">
                      {portfolio.iconsets.map((iconset: IIconSet) => (
                        <GradientText key={iconset.id}>
                          {" #" +
                            iconset.title.replace("logo", "").toUpperCase()}
                        </GradientText>
                      ))}
                    </div>
                  </ParallaxLayer>
                </S.PortfolioItem>
              ))}
          </Parallax>
        </S.PortfoliosWrapper>
      )}
    </>
  );
};

export default Portfolios;
