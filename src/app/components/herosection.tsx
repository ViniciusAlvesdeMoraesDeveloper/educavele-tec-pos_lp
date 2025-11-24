'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const carouselSlides = [
    {
        id: 1,
        title: "Técnico em Enfermagem",
        description: "Prepare-se para atuar na área da saúde, oferecendo cuidados essenciais e promovendo o bem-estar dos pacientes.",
        icon: "🏥",
        stats: "Alta demanda profissional",
        imagePath: "/tecnicoenfermagem.webp"
    },
    {
        id: 2,
        title: "Técnico Eletromecânica",
        description: "Una conhecimentos de eletricidade e mecânica para projetar e manter sistemas industriais complexos.",
        icon: "⚙️",
        stats: "Salário competitivo na indústria",
        imagePath: "/tecnicoeletromecanica.webp"
    },
    {
        id: 3,
        title: "Técnico em Transação Imobiliária (TTI)",
        description: "Obtenha a formação necessária para atuar como corretor de imóveis, intermediando compras, vendas e aluguéis.",
        icon: "🏠",
        stats: "Seja um corretor credenciado",
        imagePath: "/tecnicotrasacaoimobiliaria.webp"
    },
    {
        id: 4,
        title: "Técnico em Agricultura",
        description: "Aprenda sobre gestão de recursos agrícolas, sustentabilidade e tecnologias modernas para o agronegócio.",
        icon: "🚜",
        stats: "Foco no Agronegócio 4.0",
        imagePath: "/tecnicoagricultura.webp"
    }
]

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
            {/* Banner Hero */}
            <div className="relative bg-gradient-to-r from-green-600 to-blue-800 text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 mb-6 lg:mb-0">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                Transforme seu futuro com
                                <span className="text-green-300 block">Educação Técnica</span>
                            </h1>

                            <p className="text-lg md:text-xl text-green-100">
                                Cursos práticos com foco no mercado
                            </p>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="text-xl font-bold mb-4 text-center">Por que a Edutec?</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { icon: "🎯", text: "Mentoria" },
                                        { icon: "💼", text: "Projetos" },
                                        { icon: "📈", text: "Empregabilidade" },
                                        { icon: "🏆", text: "Certificação" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center bg-white/10 p-2 rounded-lg">
                                            <span className="text-lg mr-2">{item.icon}</span>
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating elements menores */}
                            <div className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded text-sm font-bold rotate-3 shadow">
                                🎓 10K+
                            </div>
                            <div className="absolute -bottom-2 -left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-bold -rotate-3 shadow">
                                ⭐ 4.9/5
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave divider menor */}
                <div id='sobre' className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8">
                        <path d="M0,0V30c120-30,240-30,360-10s240,40,360,40s240-30,360-40s240,10,360,10V0Z" className="fill-white"></path>
                    </svg>
                </div>
            </div>

            {/* About Us Compact - Espaçamento ajustado */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                            Sobre a Edutec Brasil
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Há mais de 15 anos somos referência em educação técnica e profissional, formando profissionais
                            que estão transformando o mercado de trabalho brasileiro.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            { number: "15+", text: "Anos de experiência" },
                            { number: "10.000+", text: "Alunos formados" },
                            { number: "95%", text: "Taxa de empregabilidade" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">
                                    {stat.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div>
                                <h3 className="text-xl font-bold text-blue-800 mb-3">
                                    Metodologia Exclusiva
                                </h3>
                                <p className="text-gray-700 mb-3">
                                    Desenvolvemos uma abordagem única que combina teoria sólida com prática intensiva,
                                    preparando você para os desafios reais do mercado de trabalho.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Aprendizado baseado em projetos reais",
                                        "Mentoria individualizada",
                                        "Conectamos você com empresas",
                                        "Certificação reconhecida"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* AJUSTE CHAVE PARA MOBILE: flex-col e altura responsiva */}
                            <div className="mt-8 md:mt-0 flex flex-col items-center">
                                {/* Container da Imagem: Altura menor no mobile (h-48) e margin inferior */}
                                <div className="relative w-full h-48 md:h-96 mb-6 rounded-lg shadow-lg"> 
                                    <Image
                                        src="/banner.webp"
                                        alt="Metodologia Edutec"
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                
                                {/* Balão de Texto: Removido o posicionamento 'absolute' para que flua APÓS a imagem. */}
                                <div className="bg-green-600 text-white p-3 rounded-lg shadow-lg w-fit">
                                    <div className="font-bold text-sm">Educação que</div>
                                    <div className="font-bold text-sm">transforma!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Compact */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                            Nossos Cursos Técnicos
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Conheça as formações que vão acelerar sua entrada no mercado de trabalho, são mais de 60 cursos para você, veja alguns dos mais procurados:
                        </p>
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {carouselSlides.map((slide) => (
                                    <div key={slide.id} className="w-full flex-shrink-0">
                                        <div className="bg-white p-8 md:p-12">
                                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                                <div>
                                                    <div className="text-6xl mb-6">{slide.icon}</div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
                                                        {slide.title}
                                                    </h3>
                                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                        {slide.description}
                                                    </p>
                                                    <div className="bg-green-100 border border-green-200 rounded-lg p-4 inline-block">
                                                        <span className="text-green-800 font-semibold text-lg">
                                                            {slide.stats}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <div className="relative h-80 w-full">
                                                    <Image
                                                        src={slide.imagePath}
                                                        alt={slide.title}
                                                        fill
                                                        className="rounded-lg shadow-lg object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation - Setas posicionadas fora do conteúdo */}
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
                            aria-label="Slide anterior"
                            className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all border border-gray-200"
                        >
                            <span className="text-2xl">‹</span>
                        </button>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
                            aria-label="Próximo slide"
                            className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all border border-gray-200"
                        >
                            <span className="text-2xl">›</span>
                        </button>

                        {/* Indicadores */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {carouselSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Ir para o slide ${index + 1}`}
                                    className={`w-4 h-4 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}