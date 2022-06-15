export const Subject = ({ sub }) => {
  console.log(sub[0].SubjectTitle);
  return (
    <div>
      <h3>수업 과목: {sub[0].SubjectTitle}</h3>
      <h3>수업 과목: {sub[1].SubjectTitle}</h3>
      <h3>수업 과목: {sub[2].SubjectTitle}</h3>
      <h3>수업 과목: {sub[3].SubjectTitle}</h3>
      <h3>수업 과목: {sub[4].SubjectTitle}</h3>
    </div>
  );
};
