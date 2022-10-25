import React from "react";
import * as S from "./style";

interface IProgress {
    progress: number;
}

export default function Progress({ progress }: IProgress) {
    const ratio = -200 + Math.ceil(progress * 2);
    return (
        <>
            {progress !== 101 && (
                <S.Progress ratio={ratio}>
                    <div className="progress-bar">
                        <div className="progress-color"></div>
                        <div className="progress-gray"></div>
                    </div>
                    <h6 className="progress-number">
                        3D모델 임포트{" "}
                        {(progress - 0.01).toFixed(2).replace("-", "")} %
                    </h6>
                </S.Progress>
            )}
        </>
    );
}
