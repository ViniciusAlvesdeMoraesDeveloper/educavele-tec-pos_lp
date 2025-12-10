'use client'
import { useState } from 'react'
interface FormData {
  nome: string
  email: string
  telefone: string
  areaDeInteresse: string
}


declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

const whatsappNumbers = [
  '553173575604',
  '553193494235',
  '553193656719',
  '553193317704'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    areaDeInteresse: 'N/A'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': '',
        'value': 1.0,
        'currency': 'BRL',
        'transaction_id': ''
      });
      console.log('Conversão do Google Ads enviada: AW-17611655398/SEU_ROTULO_DE_CONVERSAO');
    }


    const randomNumber = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)]
    const message = `Olá! Me chamo ${formData.nome}. Gostaria de mais informações sobre os cursos da Edutec Brasil.\n\nEmail: ${formData.email}\nTelefone: ${formData.telefone}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${randomNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')


    setFormData({
      nome: '',
      email: '',
      telefone: '',
      areaDeInteresse: 'N/A'
    })
  }


  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-700">
              Fale conosco e descubra como podemos transformar sua carreira
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-shadow-lime-700 font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-black"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-black"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-black"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">💡</span>
                  <p className="text-blue-800 text-sm">
                    Ao enviar este formulário, você será direcionado para o WhatsApp
                    de um de nossos consultores educacionais.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-800 hover:bg-green-900 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Falar com Consultor no WhatsApp
              </button>
            </form>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-green-600 text-2xl mb-2">📞</div>
                <div className="font-semibold text-gray-800">Atendimento</div>
                <div className="text-gray-600 text-sm">Seg à Sex: 8h-18h</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-green-600 text-2xl mb-2">💬</div>
                <div className="font-semibold text-gray-800">WhatsApp</div>
                <div className="text-gray-600 text-sm">Resposta rápida</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-green-600 text-2xl mb-2">🎓</div>
                <div className="font-semibold text-gray-800">Consultoria</div>
                <div className="text-gray-600 text-sm">Educacional gratuita</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}