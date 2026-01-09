import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // desktop services
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile services

  const menuItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", isDropdown: true },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Team", href: "/#team" },
    { name: "Contact", href: "/#contact", extraPadding: true },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2
      bg-black/90 backdrop-blur-lg border border-white/30 shadow-lg
      rounded-full px-5 py-2 w-[90%] max-w-3xl
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

      {/* ================= Desktop Menu ================= */}
      <div className="hidden sm:flex items-center gap-6 relative">
        {menuItems.map((item) =>
          item.isDropdown ? (
            <div key={item.name} className="relative">
              {/* Services Button */}
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-purple-400 transition"
              >
                Services
                <ChevronDown size={14} />
              </button>

              {/* Services Dropdown */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-3
                  bg-black/90 border border-white/20 rounded-lg
                  py-2 min-w-[200px] shadow-lg z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={item.name}
              href={item.href}
              className={`text-blue-400 text-sm font-medium hover:text-purple-400 transition ${
                item.extraPadding ? "pr-3" : ""
              }`}
            >
              {item.name}
            </a>
          )
        )}
      </div>

      {/* ================= Mobile Hamburger ================= */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        className="sm:hidden p-2 text-white hover:bg-transparent"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </Button>

      {/* ================= Mobile Menu ================= */}
      <div
        className={`sm:hidden absolute top-[110%] right-0
        bg-black/90 backdrop-blur-xl border border-white/30
        rounded-2xl py-4 px-3 shadow-lg
        flex flex-col gap-2 min-w-[220px]
        transition-all duration-300 origin-top-right
        ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {menuItems.map((item) =>
          item.isDropdown ? (
            <div key={item.name} className="w-full">
              {/* Mobile Services Toggle */}
              <button
                onClick={() =>
                  setMobileServicesOpen((prev) => !prev)
                }
                className="w-full flex items-center justify-between px-2 py-1 text-blue-400 font-medium"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Services List */}
              {mobileServicesOpen && (
                <div className="mt-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block pl-6 py-1 text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-2 py-1 text-blue-400 text-sm hover:text-purple-400 transition"
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
