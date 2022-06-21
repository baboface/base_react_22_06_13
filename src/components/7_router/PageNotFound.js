import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <h3>페이지를 찾을수 없습니다</h3>
      <span>
        <Link to="/">홈으로 가기 &rarr;</Link>
        {/* =>&arr (에로우 화살표시"rarr" 오른쪽"larr" 왼쪽) */}
      </span>
    </div>
  );
};
