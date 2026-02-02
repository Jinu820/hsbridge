import Link from "next/link";

const links = [
  { label: "TOP", href: "#top" },
  { label: "NEWS", href: "#news" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "RECRUIT", href: "#recruit" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap justify-center gap-6">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-center text-sm text-zinc-600">
          © {year} by HSBRIGDE Inc.
        </p>
      </div>
    </footer>
  );
}
