'use client';

import { useState } from 'react';

const navItems = [
  { label: 'TOP', href: '#top' },
  { label: 'ABOUT', href: '#about' },
  { label: 'RECRUIT', href: '#recruit' },
  { label: 'SERVICES', href: '#services' },
  // { label: "NEWS", href: "#news" },
  { label: 'CONTACT', href: '#contact' },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 items-center justify-center">
      <span
        className={`absolute h-0.5 w-5 bg-black transition-all duration-200 ${
          open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
        }`}
      />
      <span
        className={`absolute top-1/2 h-0.5 w-5 -translate-y-1/2 bg-black transition-all duration-200 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`absolute h-0.5 w-5 bg-black transition-all duration-200 ${
          open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
        }`}
      />
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <a
          href="#top"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-wide text-black"
        >
          HSBRIGDE Inc.
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center justify-end gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-widest text-zinc-600 transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-[57px] z-40 bg-white/95 backdrop-blur-md transition-opacity duration-200 md:hidden ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-1 bg-white px-4 py-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-base tracking-widest text-zinc-600 transition hover:bg-zinc-100 hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
