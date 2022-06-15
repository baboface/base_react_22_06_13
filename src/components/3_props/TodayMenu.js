import { Fragment } from "react";

export const TodayMenu = ({ menu }) => {
  console.log(menu);
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <ul>
        <li>
          오늘의 메뉴 {menu[0].menu}사이드 {menu[0].side}
        </li>
        <li>
          오늘의 메뉴 {menu[1].menu}사이드 {menu[1].side}
        </li>
        <li>
          오늘의 메뉴 {menu[2].menu}사이드 {menu[2].side}
        </li>
        <li>
          오늘의 메뉴 {menu[3].menu}사이드 {menu[3].side}
        </li>
        <li>
          오늘의 메뉴 {menu[4].menu}사이드 {menu[4].side}
        </li>
      </ul>
    </>
  );
};
