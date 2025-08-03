export function Navigation() {
  const navLinks = [
    {label: "Guide", href: "/guide"},
    {label: "Example", href: "/example"},
    {label: "Pricing", href: "/pricing"},
    {label: "About", href: "/about"}
  ];

  return (
    <nav className="hidden md:flex gap-8 text-lg font-medium ">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="
          relative bg-gradient-to-r from-blue-700 via-purple-600 to-blue-700 bg-clip-text text-transparent
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
          after:bg-gradient-to-r after:from-blue-600  after:to-pink-400
          after:transition-all after:duration-400 hover:after:w-full"
        >
          {link.label}
        </a>

      ))}
    </nav>
  )
}

