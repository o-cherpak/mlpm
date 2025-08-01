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
          className={"bg-gradient-to-r from-blue-700 via-purple-600 to-blue-700 bg-clip-text text-transparent"}
        >
            {link.label}
        </a>
      ))}
    </nav>
  )
}

