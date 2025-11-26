import Link from "next/link"
import { Youtube, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-green-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Faculdade EducaVale</h3>
            <p className="text-green-100 mb-4 max-w-md">
              Há mais de 15 anos transformando vidas através da educação de qualidade.
              Oferecemos cursos superiores, pós-graduações e agora cursos técnicos,
              com foco na empregabilidade e desenvolvimento profissional.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Link href={"https://www.instagram.com/educavale.oficial/"} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="text-white" />
                </Link>
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Link href="https://www.facebook.com/Educavale"
                  target="blank" rel="noopeener noreferrer"
                  aria-label="Facebook">
                  <Facebook className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Coluna Cursos Técnicos */}
          <div >
            <h4 className="text-lg font-semibold text-white mb-4">Cursos Técnicos</h4>
            <ul className="space-y-2 text-green-100">
              <li className="hover:text-white transition-colors cursor-pointer">
                Técnico em Enfermagem
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Técnico em Eletromecânica
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Técnico em Transação Imobiliária
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Técnico em Agricultura
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Técnico em Informática
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Técnico em Administração
              </li>
            </ul>
          </div>

          {/* Coluna Pós-Graduações */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Pós-Graduações</h4>
            <ul className="space-y-2 text-green-100">
              <li className="hover:text-white transition-colors cursor-pointer">
                Gestão Industrial
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Agronegócio
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Enfermagem do Trabalho
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Data Science
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                MBA em Gestão Empresarial
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Educação Especial
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center hover:text-white transition-colors">
                <span className="mr-3">📞</span>
                (31) 99793-1332
              </li>
              <li className="flex items-center hover:text-white transition-colors">
                <span className="mr-3">📧</span>
                educacaoedutecbrasil@gmail.com
              </li>
              <li className="flex items-baseline hover:text-white transition-colors">
                <span className="mr-3">📍</span>
                <span className="text-sm">R. Rio Doce, 50 - Professores, Cel. Fabriciano - MG</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors">
                <span className="mr-3">🕒</span>
                Seg à Sex: 8h-18h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Faculdade EducaVale. Todos os direitos reservados.
          </p>
          <p className="text-sm text-green-300">
            CNPJ: 37.911.890/0001-01 | Instituição credenciada pelo MEC
          </p>
        </div>
      </div>
    </footer>
  )
}