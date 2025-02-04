export default function Header({ content }) {
  return (
    <div>
      <div type='type1'>
        <div style={{ alignItems: 'left' }}>
          <h1>{content?.title}</h1>
          <p>{content?.subtitle}</p>
        </div>
        <div style={{ alignItems: 'right' }}>
          <p>{content?.description}</p>
          <p>{content?.caption}</p>
        </div>
      </div>

      <div type='type2' style={{ alignItems: 'center' }}>
        <h1>{content?.title}</h1>
        <p>{content?.subtitle}</p>
        <p>{content?.description}</p>
        <p>{content?.caption}</p>
      </div>
    </div>
  );
}
