export default function CoursesCardOne({ content }) {
  return (
    <div className="course-card">
      <h3>{content.title}</h3>
      <p>{content.description}</p>
      <span>{content.price}</span>
    </div>
  );
}
