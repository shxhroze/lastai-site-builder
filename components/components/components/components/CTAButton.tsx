interface CTAProps {
  text: string;
  href: string;
}

export default function CTAButton({ text, href }: CTAProps) {
  return (
    <a href={href} className="inline-block bg-white text-black px-6 py-3 rounded text-lg font-semibold hover:opacity-90 transition">
      {text}
    </a>
  );
}
