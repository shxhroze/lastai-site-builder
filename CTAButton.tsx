export default function CTAButton({ text, href }) {
  return (
    <a href={href}>
      <button>{text}</button>
    </a>
  );
}