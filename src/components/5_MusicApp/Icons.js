import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapApp = styled.div`
  width: 375px;
  height: 667px;
  background-color: black;
  box-sizing: border-box;
`;

const HeaderIcon = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;

  i {
    font-size: 30px;
    line-height: 60px;
    color: white;
    margin: 0 20px;
  }
`;

const HamMenu = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  i {
    font-size: 20px;
    line-height: 20px;
  }
`;

const MusicBg = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  margin: 0 auto;
  /* background-color: gray; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CenterBg = styled.div`
  width: 100%;
  height: 300px;
  background: url(https://writteninmusic.com/wp-content/uploads/2021/09/Oasis-Knebworth-1996_ps_1_jpg_sd-low-320x453.jpg)
    no-repeat center/cover;

  display: flex;
  margin: 20px auto;
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: white;
`;

const Sub = styled.div`
  font-size: 12px;
  font-weight: 200;
  text-align: center;
  color: white;
  opacity: 0.5;
  margin-top: 10px;
`;

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlayTime = styled.div`
  width: 300px;
  height: 5px;
  margin: 10px auto;
  background-color: gray;
  justify-content: space-between;
  align-items: center;
`;

const TimeStart = styled.div`
  font-size: 8px;
  color: white;
  opacity: 0.5;
  margin-top: 10px;
`;

const TimeEnd = styled.div`
  font-size: 8px;
  color: white;
  opacity: 0.5;
  margin-top: 10px;
`;

const PlayIcon = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  margin: 40px auto 0 auto;
  /* background-color: aqua; */
  justify-content: space-between;
  align-items: center;
  i {
    color: white;
    font-size: 20px;
  }

  .play {
    font-size: 40px;
    color: gold;
  }
`;

const MusicList = styled.div`
  width: 300px;
  height: 50px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
  align-items: center;

  i {
    font-size: 40px;
    color: gold;
  }
  .arrow {
    margin-right: 20px;
  }
`;

const MusicBg2 = styled.div`
  width: 60px;
  height: 40px;
  background-color: white;
  background: url(https://writteninmusic.com/wp-content/uploads/2021/09/Oasis-Knebworth-1996_ps_1_jpg_sd-low-320x453.jpg)
    no-repeat center/cover;
  border-radius: 50%;
  margin-left: 10px;
`;

const MusciTitle = styled.div`
  width: 100%;
  margin-left: 20px;
`;

// const Icon = styled.div`
//   i {
//     color: red;
//   }
//   svg {
//     color: blue;
//   }
// `;

export const Icons = () => {
  return (
    <Wrap>
      <WrapApp>
        <HeaderIcon>
          <i className="fa-solid fa-circle-chevron-down"></i>
          <HamMenu>
            <i className="fa-solid fa-bars"></i>
          </HamMenu>
        </HeaderIcon>
        <MusicBg>
          <CenterBg></CenterBg>
          <Title>Oasis</Title>
          <Sub>Knebworth 1996</Sub>
        </MusicBg>
        <PlayTime>
          <TimeBox>
            <TimeStart>00:03</TimeStart>
            <TimeEnd>03:40</TimeEnd>
          </TimeBox>
        </PlayTime>
        <PlayIcon>
          <i className="fa-solid fa-backward"></i>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-circle-pause play"></i>
          <i className="fa-solid fa-forward"></i>
          <i className="fa-solid fa-retweet"></i>
        </PlayIcon>
        <MusicList>
          <MusicBg2></MusicBg2>
          <MusciTitle>Oasis</MusciTitle>
          <i className="fa-solid fa-circle-play arrow"></i>
        </MusicList>
      </WrapApp>
    </Wrap>
  );
};
// <Icon>
//   <i class="fa-brands fa-youtube"></i>
//   <FontAwesomeIcon icon={faPlay} />
//   <FontAwesomeIcon icon={faPause} />
// </Icon>
