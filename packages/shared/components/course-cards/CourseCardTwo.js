export default function CoursesCardTwo({ content }) {
  return (
    <div className="course-card-alt">
      <h3>{content.title}</h3>
      <p>{content.description}</p>
      <strong>{content.price}</strong>
    </div>
  );
}
