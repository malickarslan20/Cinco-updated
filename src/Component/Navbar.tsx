import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // Hover state for desktop

  const menuItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/services", isDropdown: true },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Team", href: "/#team" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2
      bg-black/90 backdrop-blur-lg border border-white/30 shadow-lg
      rounded-full px-4 py-2 w-[90%] max-w-3xl
      flex items-center justify-between z-20"
    >
      {/* Logo */}
      <Link to="/">
        <img
          src="/Logo.png"
          className="h-7 sm:h-9 cursor-pointer"
          alt="Cincobyte Logo"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden sm:flex items-center gap-6 relative">
        {menuItems.map((item) =>
          item.isDropdown ? (
            <div
              key={item.name}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="relative"
            >
              <Link
                to={item.href}
                className="text-white text-sm font-medium hover:text-purple-400 transition"
              >
                {item.name}
              </Link>

              {/* Services Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-black/90 border border-white/20 rounded-lg py-2 min-w-[180px] flex flex-col shadow-lg z-50">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="px-4 py-2 text-white text-sm hover:bg-purple-500/10 hover:text-purple-400 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={item.href}
              href={item.href}
              className="text-white text-sm font-medium hover:text-purple-400 transition"
            >
              {item.name}
            </a>
          )
        )}
      </div>

      {/* Hamburger for Mobile */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        className="sm:hidden p-2 text-white hover:bg-transparent"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </Button>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden absolute top-[110%] right-2
        bg-black/90 backdrop-blur-xl border border-white/30
        rounded-2xl py-4 px-5 shadow-lg
        flex flex-col items-start gap-2 w-[160px]
        transition-all duration-300 origin-top-right
        ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {menuItems.map((item) =>
          item.isDropdown ? (
            <div key={item.name} className="flex flex-col">
              <span className="px-2 py-1 text-white font-medium cursor-default">
                {item.name}
              </span>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="pl-4 pr-2 py-1 text-white text-sm hover:text-purple-400 transition"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          ) : (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-2 py-1 text-white text-sm hover:text-purple-400 transition"
            >
              {item.name}
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
