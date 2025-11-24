import Link from "next/link"
import { Youtube } from "lucide-react"
import { Instagram } from "lucide-react"
import { Music2 } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Edutec Brasil</h3>
            <p className="text-green-100 mb-4 max-w-md">
              Há mais de 15 anos transformando vidas através da educação tecnológica.
              Oferecemos cursos de qualidade com foco na empregabilidade e no
              desenvolvimento profissional.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Link href={"https://www.instagram.com/edutec_brasil/"} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="text-green-100" />
                </Link>
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <Link href="https://www.tiktok.com/@edutec_brasil"
                target="blank" rel="noopeener noreferrer"
                aria-label="TikTok">
                  <Music2 className="text-green-100" />
                </Link>
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <Link href="https://www.youtube.com/@EduTecBrasil"
                target="blank" rel="noopener noreferrer"
                aria-label="Youtube">
                  <Youtube className="text-green-100" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Cursos</h4>
            <ul className="space-y-2 text-green-100">
              <li>Técnico em Agricultura</li>
              <li>Técnico em Enfermagem</li>
              <li>Técnico em Eletromecânica</li>
              <li>Técnico em Transação Imobiliária </li>

            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-green-100">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                (31) 98262-8327
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                educacaoedutecbrasil@gmail.com
              </li>
              <li className="flex items-baseline">
                <span className="mr-2">📍</span>
                Luiz Rodrigues dos Santos, 44
                Todos os Santos - Coronel Fabriciano/MG
                CEP: 35170-061
              </li>
              <li className="flex items-center">
                <span className="mr-2">🕒</span>
                Seg à Sex: 8h-18h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>
            &copy; {new Date().getFullYear()} Edutec Brasil. Todos os direitos reservados.
            CNPJ: 61.594.318/0001-32
          </p>
        </div>
      </div>
    </footer>
  )
}