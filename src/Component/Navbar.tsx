import { useState} from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";



const Navbar= () => {
  const [open, setOpen] = useState<boolean>(false);

  const menuItems: { name: string; href: string }[] = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-lg border border-white/30 shadow-lg rounded-full px-6 py-3 w-[90%] max-w-3xl flex items-center justify-between transition-all duration-300 z-20">
      
      {/* Logo */}
      <div className="text-xl font-semibold text-white">
        <img src="/Logo.png" className="h-12" alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <Button onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Menu Items */}
      {open && (
        <div className="absolute top-full mt-3 right-0 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl py-3 px-5 shadow-xl flex flex-col gap-3 items-start w-40">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-blue-300 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
