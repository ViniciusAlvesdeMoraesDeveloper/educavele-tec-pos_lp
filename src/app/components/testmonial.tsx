'use client'
import { useState, useEffect } from 'react'

const testimonials = [
    {
        id: 1,
        name: "Beatriz Oliveira",
        role: "Técnica em Enfermagem",
        company: "Hospital Santa Maria",
        avatar: "/api/placeholder/100/100",
        content: "O curso técnico da Educavale me preparou para o mercado em tempo recorde. A parte prática foi essencial para minha contratação!",
        rating: 5,
        course: "Técnico em Enfermagem",
        type: "técnico"
    },
    {
        id: 2,
        name: "Carlos Eduardo Silva",
        role: "Coordenador Industrial",
        company: "Indústria Metalúrgica Alfa",
        avatar: "/api/placeholder/100/100",
        content: "A pós-graduação em Gestão Industrial da Educavale elevou minha carreira. Consegui uma promoção em 6 meses após a conclusão.",
        rating: 5,
        course: "Pós em Gestão Industrial",
        type: "pós"
    },
    {
        id: 3,
        name: "Mariana Costa",
        role: "Corretora de Imóveis",
        company: "Imobiliária Prime",
        avatar: "/api/placeholder/100/100",
        content: "O TTI da Educavale foi perfeito para minha recolocação profissional. Em 3 meses já estava atuando no mercado imobiliário.",
        rating: 4,
        course: "Transação Imobiliária (TTI)",
        type: "técnico"
    },
    {
        id: 4,
        name: "Antônio Pires",
        role: "Gerente Agrícola",
        company: "Fazenda Progresso",
        avatar: "/api/placeholder/100/100",
        content: "A pós em Agronegócio transformou nossa propriedade. Aplicamos as técnicas aprendidas e aumentamos a produtividade em 35%.",
        rating: 5,
        course: "Pós em Agronegócio",
        type: "pós"
    },
    {
        id: 5,
        name: "Juliana Rocha",
        role: "Enfermeira Coordenadora",
        company: "Clínica Vida Nova",
        avatar: "/api/placeholder/100/100",
        content: "Fiz o técnico e depois a pós em Enfermagem na Educavale. A formação completa fez toda diferença na minha progressão.",
        rating: 5,
        course: "Pós em Enfermagem do Trabalho",
        type: "pós"
    },
    {
        id: 6,
        name: "Guilherme Santos",
        role: "Analista de Sistemas",
        company: "Tech Solutions",
        avatar: "/api/placeholder/100/100",
        content: "A pós em Data Science me colocou na vanguarda do mercado. O conteúdo atualizado e professores experientes foram cruciais.",
        rating: 5,
        course: "Pós em Data Science",
        type: "pós"
    }
]

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [filter, setFilter] = useState('todos')

    const filteredTestimonials = filter === 'todos'
        ? testimonials
        : testimonials.filter(t => t.type === filter)

    // CORREÇÃO 1: useEffect missing dependency (Linha 82 do erro original)
    // 'filteredTestimonials.length' foi mantida no array de dependências, como já estava no código.
    useEffect(() => {
        // Redefine currentTestimonial para 0 sempre que o filtro muda, 
        // para evitar erros de índice se o novo array for menor.
        if (currentTestimonial >= filteredTestimonials.length && filteredTestimonials.length > 0) {
            setCurrentTestimonial(0);
        }
        
        const timer = setInterval(() => {
            // A rotação só deve ocorrer se houver depoimentos
            if (filteredTestimonials.length > 0) {
                setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
            }
        }, 5000)
        return () => clearInterval(timer)
    }, [filteredTestimonials.length, currentTestimonial]) // Adicionado currentTestimonial para maior segurança

    
    const getVisibleTestimonials = () => {
        // CORREÇÃO 2: 'visible' is never reassigned. Use 'const' instead. (Linha 90 do erro original)
        // Alterado 'let visible = []' para 'const visible = []'
        const visible = [] 

        // Adiciona um check para garantir que há depoimentos antes de tentar iterar
        if (filteredTestimonials.length === 0) {
            return [];
        }

        // Calcula quantos depoimentos mostrar, no máximo 3, ou o total filtrado
        const count = Math.min(3, filteredTestimonials.length);

        for (let i = 0; i < count; i++) {
            const index = (currentTestimonial + i) % filteredTestimonials.length
            visible.push({
                ...filteredTestimonials[index],
                uniqueKey: `${filteredTestimonials[index].id}-${index}-${filter}` // Chave mais única
            })
        }

        return visible
    }

    const visibleTestimonials = getVisibleTestimonials()

    return (
        <section id='depoimentos' className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
            <div className="container mx-auto px-4">
                {/* Header com Filtros */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Vozes de Sucesso
                    </h2>
                    <div className="w-32 h-1 bg-green-800 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Descubra as histórias reais de transformação através dos nossos cursos técnicos e pós-graduações
                    </p>

                    {/* Filtros */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => { setFilter('todos'); setCurrentTestimonial(0) }}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === 'todos'
                                ? 'bg-green-800 text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-green-800'
                                }`}
                        >
                            Todos os Cursos
                        </button>
                        <button
                            onClick={() => { setFilter('técnico'); setCurrentTestimonial(0) }}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === 'técnico'
                                ? 'bg-green-800 text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-green-800'
                                }`}
                        >
                            Cursos Técnicos
                        </button>
                        <button
                            onClick={() => { setFilter('pós'); setCurrentTestimonial(0) }}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === 'pós'
                                ? 'bg-green-800 text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-green-800'
                                }`}
                        >
                            Pós-Graduações
                        </button>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.uniqueKey} 
                            className={`bg-white rounded-3xl shadow-2xl p-8 border-2 transition-all duration-500 transform hover:scale-105 ${testimonial.type === 'técnico'
                                ? 'border-green-800 hover:shadow-green-900/20'
                                : 'border-gray-800 hover:shadow-gray-900/20'
                                }`}
                        >
                            
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center">
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 ${testimonial.type === 'técnico' ? 'bg-green-800' : 'bg-gray-800'
                                        }`}>
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${testimonial.type === 'técnico'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-gray-100 text-gray-800'
                                        }`}>
                                    {testimonial.type === 'técnico' ? 'TÉCNICO' : 'PÓS-GRADUAÇÃO'}
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-xl">★</span>
                                ))}
                                {[...Array(5 - testimonial.rating)].map((_, i) => (
                                    <span key={i + testimonial.rating} className="text-gray-300 text-xl">★</span>
                                ))}
                            </div>

                            {/* Conteúdo */}
                            <blockquote className="text-gray-800 mb-6 leading-relaxed text-lg italic">
                                {/* CORREÇÃO 3: Escape entities (Linhas 193:33 e 193:55 do erro original) 
                                     Substitui as aspas duplas do conteúdo por &quot; */}
                                &ldquo;{testimonial.content}&rdquo;
                            </blockquote>

                            {/* Curso */}
                            <div className={`border-l-4 pl-4 ${testimonial.type === 'técnico' ? 'border-green-800' : 'border-gray-800'
                                }`}>
                                <p className="text-sm font-semibold text-gray-900">
                                    {testimonial.course}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicadores */}
                <div className="flex justify-center space-x-3 mb-16">
                    {filteredTestimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-4 h-4 rounded-full transition-all ${index === currentTestimonial ? 'bg-green-800' : 'bg-gray-300'
                                }`}
                            aria-label={`Ir para depoimento ${index + 1}`}
                        />
                    ))}
                </div>

                
                <div className="bg-gradient-to-r from-gray-900 to-green-900 rounded-3xl shadow-2xl p-12 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="border-r border-green-600 pr-8 last:border-r-0 last:pr-0">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.8</div>
                            <div className="text-green-200 font-medium">Avaliação média</div>
                        </div>
                        <div className="border-r border-green-600 pr-8 last:border-r-0 last:pr-0">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">96%</div>
                            <div className="text-green-200 font-medium">Indicam a Educavale</div>
                        </div>
                        <div className="border-r border-green-600 pr-8 last:border-r-0 last:pr-0">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">5K+</div>
                            <div className="text-green-200 font-medium">Alunos satisfeitos</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                            <div className="text-green-200 font-medium">Anos de excelência</div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-8 pt-8 border-t border-green-600">
                        <p className="text-green-100 text-lg mb-4">
                            Faça parte dessa história de sucesso
                        </p>
                        <a href="#contato">
                        <button className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-100 transition-colors shadow-lg">
                            Quero me Matricular
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}