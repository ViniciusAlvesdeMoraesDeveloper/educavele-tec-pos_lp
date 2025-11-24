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

  // Cores personalizadas (assumindo que foram configuradas no tailwind.config.js)
  const colorGreen = "from-[#00b153]"; // Exemplo: from-primary-green
  const colorBlue = "to-[#05365F]";   // Exemplo: to-primary-blue

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre os cursos.";
    const phone = "5531982628327";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  // Efeito para bloquear o scroll do body e garantir o fechamento no cleanup
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

  // --- Estrutura do Componente ---

  return (
    <>
      <header
        className={`w-full h-16 fixed top-0 left-0 right-0 z-50 font-poppins transition-all duration-300 ${scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-transparent"
          }`}
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
                {/* Ícone Estrela (Mantido branco sobre fundo gradiente) */}
                <div className={`w-10 h-10 bg-gradient-to-r ${colorGreen} ${colorBlue} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                {/* Texto do Logo (Cor condicional) */}
                <div className="flex flex-col">
                  <span className={`text-xl font-bold transition-colors ${scrolled ? "text-[#05365F]" : "text-white"}`}>
                    EduTec
                  </span>
                  <span className={`text-xs transition-colors ${scrolled ? "text-gray-600" : "text-gray-200"}`}>
                    Transforme seu futuro
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 h-full">

              {/* Benefícios rápidos - CORRIGIDO: Aplicação direta da cor condicional */}
              <div className="flex items-center space-x-6">

                {/* 100% Seguro */}
                <div className={`flex items-center space-x-2 transition-colors`}>
                  <Shield className={`w-4 h-4 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`} />
                  <span className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}>100% Seguro</span>
                </div>

                {/* Avaliação 5★ */}
                <div className={`flex items-center space-x-2 transition-colors`}>
                  <Star className={`w-4 h-4 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`} />
                  <span className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}>Avaliação 5★</span>
                </div>
              </div>

              {/* Links de navegação (Cor condicional já aplicada no <a>) */}
              <a
                href="#sobre"
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 ${scrolled
                  ? "text-gray-700 hover:text-[#00b153]"
                  : "text-white hover:text-gray-200"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("sobre");
                }}
              >
                Sobre nós
              </a>
             
              <a
                href="#text"
                className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 ${scrolled
                  ? "text-gray-700 hover:text-[#00b153]"
                  : "text-white hover:text-gray-200"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("text");
                }}
              >
                Depoimentos
              </a>

              {/* CTA Principal CORRIGIDO - Agora abre WhatsApp */}
              <button
                type="button"
                onClick={openWhatsApp}
                className={`flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${colorGreen} ${colorBlue} text-white rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#00b153] focus:ring-opacity-50 animate-pulse hover:animate-none`}
              >
                <UserPlus className="w-5 h-5" />
                <span>Entre em contato!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer ${scrolled
                ? "text-[#05365F] hover:bg-gray-100" // Fica Azul sobre branco (corrigido)
                : "text-white hover:bg-white hover:text-[#05365F]"
                }`}
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

      {/* Mobile Navigation (Overlay e Menu Deslizante) */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* 1. Overlay de Fundo (Para fechar ao clicar fora) */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
            role="presentation"
          />

          {/* 2. Menu Deslizante */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out">

            <div className="flex justify-end p-4">
              {/* Botão X para fechar dentro do menu */}
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

              {/* Mobile Links (usando <a>) */}
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

              

              <a
                href="#text"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#00b153] hover:text-white transition-all duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick("text");
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Depoimentos</span>
              </a>

              {/* Mobile CTA CORRIGIDO - Agora abre WhatsApp */}
              <div className="pt-4">
                <button
                  onClick={openWhatsApp}
                  className={`w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r ${colorGreen} ${colorBlue} text-white rounded-xl font-bold shadow-md transition-all duration-300 hover:opacity-90`}
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