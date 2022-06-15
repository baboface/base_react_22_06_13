import { FoodMenu } from "../../components/2_component/FoodMenu";

export const Menus = () => {
  return (
    <>
      {/* *props
      =><컴포넌트 프롭스명 = "값"/> */}

      <h3>아침메뉴</h3>
      <FoodMenu menuName="계란밥" sideMenu="마운틴듀" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="카레" sideMenu="제로콜라" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="해장국" sideMenu="사이다" />
    </>
  );
};
