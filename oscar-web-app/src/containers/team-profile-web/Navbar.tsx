"use client";
import { useState } from "react";
import { Button, Typography } from "antd";
import { Icon } from "@iconify/react";

const { Title } = Typography;

type NavbarProps = {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

const navItems = [
  { key: "hero", label: "Home" },
  { key: "goals", label: "Goals" },
  { key: "team", label: "Team" },
  { key: "try-it-out", label: "Try It Out" },
];

export const Navbar = (props: NavbarProps) => {
  const { activeSection, onNavigate } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Icon icon="ph:student-fill" className="w-6 h-6" />
            <Title
              level={3}
              className="mb-0 text-lg sm:text-xl md:text-2xl font-bold text-blue-600 cursor-pointer"
              onClick={() => handleNavClick("hero")}
            >
              OSCAR
            </Title>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Button
                key={item.key}
                type={activeSection === item.key ? "primary" : "text"}
                onClick={() => handleNavClick(item.key)}
                className="border-none font-medium text-sm lg:text-base h-auto px-3 py-1.5 hover:bg-blue-50 transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <Icon icon="ph:x-bold" className="w-6 h-6" />
            ) : (
              <Icon icon="ph:list-bold" className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navItems.map((item) => (
              <Button
                key={item.key}
                type={activeSection === item.key ? "primary" : "text"}
                onClick={() => handleNavClick(item.key)}
                block
                className="border-none text-left h-auto py-3 px-4 font-medium hover:bg-blue-50 transition-colors flex items-center sm:justify-start justify-center"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
