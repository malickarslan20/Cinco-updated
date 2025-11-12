import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 
      bg-black/90 backdrop-blur-lg border border-white/30 shadow-lg 
      rounded-full px-4 py-2 w-[90%] max-w-3xl 
      flex items-center justify-between z-20"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/Logo.png" className="h-7 w-auto sm:h-9" alt="Logo" />
        
      </div>

      {/* Hamburger Icon — Always Visible */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white p-2"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </Button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-[110%] right-2 bg-black/90 backdrop-blur-xl border border-white/30 
        rounded-2xl py-3 px-4 shadow-lg flex flex-col gap-3 w-[70%] sm:w-[220px] transition-all duration-300 
        origin-top-right transform ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-white hover:text-purple-400 text-sm font-medium transition"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
