import {
  faBackward,
  faBars,
  faChevronDown,
  faForward,
  faForwardStep,
  faPause,
  faRandom,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styledComponents from "styled-components";
import styled from "styled-components";
import { BottomPlay } from "./components/BottomPlay";
import { BtnWrap } from "./components/BtnWrap";
import { Header } from "./components/Header";
import { PlayWrap } from "./components/PlayWrap";
import { TitleWrap } from "./components/TitleWrap";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Section = styled.div`
  width: 375px;
  height: 667px;
  background-color: #1d1d1d;
  border-radius: 25px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverImg = styled.div`
  width: 90%;
  height: 280px;
  border-radius: 25px;
  box-shadow: 0 15px 20px 10px rgba(0, 0, 0, 0.3);
  margin: 30px 0;
  background: url(http://www.feelnumb.com/wp-content/uploads/2009/12/oasis_whats_the_story_morning_glory_advance_cd.jpg)
    no-repeat center/cover;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <Section>
        <Header />

        <CoverImg />

        <TitleWrap />

        <PlayWrap />

        <BtnWrap />

        <BottomPlay />
      </Section>
    </Wrap>
  );
};
