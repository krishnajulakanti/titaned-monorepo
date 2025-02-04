export default function Footer({ content }) {
  return (
    <footer>
      <p>{content?.text}</p>
      <nav>
        {content?.links.map((link, index) => (
          <a key={index} href="#">{link}</a>
        ))}
      </nav>
    </footer>
  );
}
