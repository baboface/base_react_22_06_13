export const Kakao = ({ kakaoDate }) => {
  // console.log(kakaoDate);
  return (
    <div>
      <h1>카카오</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        {kakaoDate.map((kakao) => (
          <li
            key={kakao.id}
            style={{
              width: "30%",
            }}
          >
            <img Src={kakao.imgUrl} style={{ width: "100%" }} />
            {/* <div
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: `url(${kakao.imgUrl})`,
              }}
            ></div> */}
            <h3>{kakao.title}</h3>
            <p>{kakao.desh.slice(0, 50) + "..."}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
