import * as S from "./style";

export default function NotFound({ error }: { error?: string }) {
  return (
    <S.NotFound>
      <div className="title-container">
        <p className="title">404</p>
        <p className="text">오류가 발생했습니다</p>
        <p className="error">{error}</p>
      </div>
    </S.NotFound>
  );
}
