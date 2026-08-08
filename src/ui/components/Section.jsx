import "../styles/Page.css";

export default function Section({ category, children }) {
  return (
    <section className={category.toLowerCase()}>
      <h4 className={category.toLowerCase()}>{category.toUpperCase()}</h4>
      {children}
    </section>
  );
}
