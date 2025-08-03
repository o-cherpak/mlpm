import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

export function Footer() {
  const links = [
    {icon: <FaGithub size={24}/>, href: "https://github.com",},
    {icon: <FaLinkedin size={24}/>, href: "https://linkedin.com",},
    {icon: <FaTwitter size={24}/>, href: "https://twitter.com",},
  ];

  return (
    <footer className="bg-gray-100 flex justify-around border-t border-gray-300 py-6 px-4 md:px-8">
      <p className="text-gray-700 text-left md:text-center text-sm md:text-base">
        A modern tool for visualizing machine learning experiment logs.
      </p>

      <div className="flex space-x-5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-blue-600 transition-all duration-300"
            target="_blank"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
