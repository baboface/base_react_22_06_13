export const Homework = ({ work }) => {
  //   console.log(work);
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        {work.map((Homework) => (
          <li
            key={Homework.id}
            style={{
              width: "30%",
              backgroundColor: "gray",
              margin: "200px auto",
            }}
          >
            <img Src={Homework.imgUrl} style={{ width: "100%" }} />
            <h2
              style={{ fontSize: "24px", color: "white", marginBottom: "20px" }}
            >
              {Homework.title}
            </h2>
            <p style={{ fontSize: "16px", color: "white" }}>
              {Homework.subTitle}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
