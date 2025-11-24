'use client'
import { useState, useEffect } from 'react'
// Não precisa importar Image, pois você não o está usando aqui (está usando apenas o placeholder)

const testimonials = [
    {
        id: 1,
        name: "Beatriz Oliveira",
        role: "Técnica em Enfermagem",
        company: "Hospital Santa Maria",
        avatar: "/api/placeholder/100/100",
        content: "O curso de Enfermagem me deu a confiança e a prática que eu precisava. A parte laboratorial é excelente. Consegui meu primeiro emprego logo após o estágio!",
        rating: 5,
        course: "Técnico em Enfermagem"
    },
    {
        id: 2,
        name: "Carlos Eduardo Silva",
        role: "Técnico Eletromecânica",
        company: "Indústria Metalúrgica Alfa",
        avatar: "/api/placeholder/100/100",
        content: "A Edutec me preparou para o chão de fábrica. O módulo de automação foi crucial. Agora sou responsável pela manutenção preventiva na minha empresa.",
        rating: 5,
        course: "Técnico Eletromecânica"
    },
    {
        id: 3,
        name: "Mariana Costa",
        role: "Corretora de Imóveis",
        company: "Imobiliária Prime",
        avatar: "/api/placeholder/100/100",
        content: "O curso de TTI da Edutec foi rápido e direto ao ponto. Aprendi toda a legislação e marketing imobiliário necessário para tirar meu CRECI e começar a vender.",
        rating: 4, 
        course: "Transação Imobiliária (TTI)"
    },
    {
        id: 4,
        name: "Antônio Pires",
        role: "Consultor Agrícola",
        company: "Fazenda Progresso",
        avatar: "/api/placeholder/100/100",
        content: "O foco em agricultura de precisão e gestão de culturas fez toda a diferença. Apliquei os conhecimentos na fazenda da família e já aumentamos a produtividade em 20%.",
        rating: 5,
        course: "Técnico em Agricultura"
    },
    {
        id: 5,
        name: "Juliana Rocha",
        role: "Auxiliar de Enfermagem",
        company: "Clínica Vida Nova",
        avatar: "/api/placeholder/100/100",
        content: "Professores muito atenciosos e aulas práticas de verdade. Recomendo para quem busca uma formação sólida e rápida para entrar no mercado de saúde.",
        rating: 5,
        course: "Técnico em Enfermagem"
    },
    {
        id: 6,
        name: "Guilherme Santos",
        role: "Corretor Autônomo",
        company: "Creci-MG",
        avatar: "/api/placeholder/100/100",
        content: "O material didático do TTI é excelente. Consegui conciliar o estudo com o trabalho e, em pouco tempo, já estava com minha carteira de imóveis.",
        rating: 4,
        course: "Transação Imobiliária (TTI)"
    }
]

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const visibleTestimonials = testimonials.slice(currentTestimonial, currentTestimonial + 3)
    
    // Garante que sempre mostre 3 depoimentos (lógica de carrossel contínuo)
    if (visibleTestimonials.length < 3) {
        visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length))
    }

    return (
        <section id='text' className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                        O que nossos alunos dizem
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Histórias reais de transformação e sucesso profissional
                    </p>
                </div>

                {/* Grid de Depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {visibleTestimonials.map((testimonial) => ( // Removido o 'index' não utilizado
                        <div 
                            key={testimonial.id}
                            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Header do Depoimento */}
                            <div className="flex items-center mb-4">
                                {/* Aqui você usaria o componente Image do Next.js se tivesse a foto, 
                                mas o placeholder está mantido para funcionar */}
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex mb-4">
                                {/* Aqui, o índice '_' é ignorado corretamente */}
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                                ))}
                                {/* Adiciona estrelas vazias se o rating for menor que 5 */}
                                {[...Array(5 - testimonial.rating)].map((_, i) => (
                                    <span key={i + testimonial.rating} className="text-gray-300 text-lg">⭐</span>
                                ))}
                            </div>

                            {/* Conteúdo do Depoimento - CORREÇÃO APLICADA AQUI */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {testimonial.content} 
                            </p>

                            {/* Curso */}
                            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                                <p className="text-sm text-green-800 font-semibold">
                                    Curso: {testimonial.course}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicadores */}
                <div className="flex justify-center space-x-2">
                    {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                            aria-label={`Ir para depoimento ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Estatística Final */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-blue-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5</div>
                                <div className="text-gray-600">Avaliação média</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
                                <div className="text-gray-600">Recomendariam a Edutec</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">10K+</div>
                                <div className="text-gray-600">Depoimentos positivos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}