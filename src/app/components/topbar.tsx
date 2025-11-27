"use client";
import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Menu,
  X,
  UserPlus,
  ArrowRight,
  Star,
  Shield,
  Briefcase,
} from "lucide-react";

// --- Funções de Ajuda ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const TopBarLP: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre os cursos.";
    const phone = "5531997931332";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [isMenuOpen]);

  // Efeito para detectar a rolagem
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (targetId: string) => {
    scrollToSection(targetId);
    setIsMenuOpen(false);
  };

  
  return (
    <>
      <header
        className={
          "w-full h-16 fixed top-0 left-0 right-0 z-50 font-poppins bg-white shadow-sm"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div>
              <a
                href="#hero"
                className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
              >
                
                <img
                  src="/educavale-logo.webp" 
                  alt="Educavale logo"
                  className="w-30 h-30 rounded-xl object-contain"
                />
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8 h-full">
              
              <div className="flex items-center space-x-6">
               
                {/* Avaliação */}
                <div className={`flex items-center space-x-2 transition-colors`}>
                  <a
                href="#tecnico"
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 text-gray-700 hover:text-[#00b153]`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("tecnico");
                }}
              >
                Cursos
              </a>

                </div>
              </div>

              {/* Sobre nós */}
              <a
                href="#sobre"
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 text-gray-700 hover:text-[#00b153]`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("sobre");
                }}
              >
                Sobre nós
              </a>

              {/* Depoimentos */}
              <a
                href="#depoimentos"
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 text-gray-700 hover:text-[#00b153]`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("depoimentos");
                }}
              >
                Depoimentos
              </a>

              {/* Botão CTA */}
              <button
                type="button"
                onClick={openWhatsApp}
                className={`flex items-center space-x-3 px-6 py-3 bg-green-800  text-white rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#00b153] focus:ring-opacity-50 animate-pulse hover:animate-none`}
              >
                <UserPlus className="w-5 h-5" />
                <span>Entre em contato!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer text-[#05365F] hover:bg-gray-100`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden">
          {/* 1. Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
            role="presentation"
          />

          {/* 2. Menu Deslizante */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="p-2 text-[#05365F] hover:bg-gray-100 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col px-6 pb-6 space-y-2">
              {/* Mobile Benefícios */}
              <div className="grid grid-cols-2 gap-4 py-4 border-b border-gray-100 text-sm">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Shield className="w-4 h-4 text-[#00b153]" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Star className="w-4 h-4 text-[#00b153]" />
                  <span>Avaliação 5★</span>
                </div>
              </div>

              {/* Sobre nós */}
              <a
                href="#sobre"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#00b153] hover:text-white transition-all duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("sobre");
                }}
              >
                <Briefcase className="w-5 h-5" />
                <span>Sobre nós</span>
              </a>

              {/* Depoimentos */}
              <a
                href="#depoimentos"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#00b153] hover:text-white transition-all duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("text");
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Depoimentos</span>
              </a>

              {/* Botão CTA Mobile */}
              <div className="pt-4">
                <button
                  onClick={openWhatsApp}
                  className={`w-full flex items-center justify-center space-x-3 px-6 py-4 bg-green-800  text-white rounded-xl font-bold shadow-md transition-all duration-300 hover:opacity-90`}
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Entre em contato!</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBarLP;