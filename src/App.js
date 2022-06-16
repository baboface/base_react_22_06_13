import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { Menus } from "./components/3_props/Menus";
import { Subject } from "./components/3_props/Subject";
import { subjectDb } from "./styles/db";
import { TodayMenuDb } from "./styles/db";
import { TodayMenu } from "./components/3_props/TodayMenu";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { Kakao } from "./components/4_map/Kakao";
import { kakaoDb } from "./styles/db";
import { Content } from "./components/4_map/Content";

const App = () => {
  return (
    <div>
      {/* <TagRule />; */}
      {/* 1일차 */}

      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}
      {/* <ClassComponent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      {/* <Subject sub={subjectDb} /> */}
      {/* <TodayMenu menu={TodayMenuDb} /> */}
      {/* 3일차 */}

      {/* <FoodMenu menus={TodayMenuDb} /> */}
      {/* <Kakao kakaoDate={kakaoDb} /> */}
      <Content />
      {/* 4일차 */}
    </div>
  );
};

export default App;
