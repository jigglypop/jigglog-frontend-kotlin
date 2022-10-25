import { useEffect, useRef, useState } from "react";
import { IImageUrl } from "../../../type/portfolio";
import { $, getPixelNumber } from "../../../util/JQuery";
import * as S from "./style";

export type ICarouselC = {
  imageUrls: IImageUrl[];
};
const Carousel = ({ imageUrls }: ICarouselC) => {
  // carousel의 ref
  const carouselRef = useRef<HTMLDivElement>(null);
  // 현재 선택된 index 값
  const [currentIdx, setCurrentIdx] = useState(0);

  const onClick = (index: number) => {
    setCurrentIdx(index);
  };
  // currentIdx가 바뀔 때
  useEffect(() => {
    // const carouselWidth = 40;
    const width = 60;
    const transform = `translateX(-${currentIdx * width}vw)`;
    if (carouselRef.current) {
      carouselRef.current.style.transform = transform;
    }
  }, [currentIdx]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((currentIdx) => (currentIdx + 1) % imageUrls.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIdx]);
  return (
    <S.Carousel>
      <div className="carouselInner">
        <div ref={carouselRef} className="carousels">
          {imageUrls.map((imageUrl: IImageUrl, index: number) => (
            <img
              key={index}
              src={
                index === 0
                  ? imageUrl.title
                  : imageUrl.title.replace(".png", `${index + 1}.png`)
              }
              className="carousel"
              id="imgc1"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="carouselButton">
        {imageUrls.map((_, index: number) => (
          <S.CarouselDot key={index}>
            <button
              className={index === currentIdx ? "dot-white" : "dot-gray"}
              id={`btn${index}`}
              onClick={() => onClick(index)}
            >
              <h4>{index}</h4>
            </button>
          </S.CarouselDot>
        ))}
      </div>
    </S.Carousel>
  );
};

export default Carousel;
