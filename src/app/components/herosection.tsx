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
        <div id='curso' className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-gray-100">
            {/* Banner Hero */}
            <div className="relative bg-gradient-to-r from-gray-900 to-green-900 text-white">
                <div className="container mx-auto px-4 py-9">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 mb-6 lg:mb-0">
                            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-4  leading-tight">
                                Formação Completa com
                                <span className="text-green-400 block">EducaVale</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white">
                                Cursos Superiores e Técnicos com foco no mercado
                            </p>
                        </div>

                        <div className="lg:w-1/2 relative mb-5 ">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="text-xl font-bold mb-4 text-center">Por que a EducaVale?</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { icon: "🎓", text: "Graduação" },
                                        { icon: "⚡", text: "Cursos Técnicos" },
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
                            <div className="absolute -top-2 -right-2 bg-green-800 text-white px-2 py-1 rounded text-sm font-bold rotate-3 shadow">
                                🎓 10K+
                            </div>
                            <div className="absolute -bottom-2 -left-2 bg-gray-800 text-white px-2 py-1 rounded text-sm font-bold -rotate-3 shadow">
                                ⭐ 4.8
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave divider menor */}
                <div id='sobre' className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8">
                        <path d="M0,0V30c120-30,240-30,360-10s240,40,360,40s240-30,360-40s240,10,360,10V0Z" className="fill-green-200"></path>
                    </svg>
                </div>
            </div>

            {/* About Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tradição e Inovação na Educação Superior
                        </h2>
                        <div className="w-24 h-1 bg-green-800 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Há mais de 5 anos construímos uma trajetória de excelência acadêmica, formando profissionais
                            que se destacam pela competência técnica e visão estratégica no mercado brasileiro.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            { number: "5+", text: "Anos de excelência acadêmica" },
                            { number: "10.000+", text: "Profissionais qualificados" },
                            { number: "95%", text: "Inserção no mercado de trabalho" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-300">
                                <div className="text-4xl md:text-5xl font-bold text-green-800 mb-3">
                                    {stat.number}
                                </div>
                                <div className="text-gray-700 font-medium">
                                    {stat.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Excelência Acadêmica com Resultados Reais
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Unimos o rigor acadêmico às necessidades do mercado contemporâneo,
                                    oferecendo uma formação que transforma conhecimento em competências profissionais diferenciadas.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Fundamentação teórica robusta com aplicação prática avançada",
                                        "Orientação personalizada com profissionais experientes",
                                        "Rede de conexões com organizações de destaque",
                                        "Certificação com reconhecimento nacional e relevância mercadológica"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 md:mt-0 flex flex-col items-center">
                                <div className="relative w-full h-48 md:h-96 mb-6 rounded-xl overflow-hidden shadow-md">
                                    <Image
                                        src="/banner.webp"
                                        alt="Metodologia de Excelência Acadêmica"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='tecnico' className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-gray-900 relative overflow-hidden">

                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gray-400 rounded-full animate-ping"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">

                    <div className="text-center mb-16">

                        <div className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-full mb-6 animate-pulse">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-ping"></span>
                            <span className="font-bold text-lg">NOVO NA EDUCAVALE</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="block">Cursos</span>
                            <span className="text-green-300">Técnicos</span>
                        </h2>

                        <div className="w-32 h-1 bg-green-400 mx-auto mb-6"></div>

                        <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                            Agora a EducaVale oferece <span className="text-white font-semibold" >cursos técnicos de qualidade </span>
                            para você se qualificar rapidamente e entrar no mercado de trabalho com vantagem competitiva.
                        </p>

                        {/* Estatísticas em destaque */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            {[
                                { number: "6-18", text: "Meses de duração", icon: "⏱️" },
                                { number: "100%", text: "Foco no mercado", icon: "🎯" },
                                { number: "60+", text: "Cursos disponíveis", icon: "📚" }
                            ].map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-white">
                                    <div className="text-3xl mb-2">{stat.icon}</div>
                                    <div className="text-2xl md:text-3xl font-bold text-green-300 mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-green-100 font-medium">
                                        {stat.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel atualizado */}
                    <div className="relative max-w-7xl mx-auto">
                        <div className="overflow-hidden rounded-3xl shadow-2xl border-2 border-white/20">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {carouselSlides.map((slide) => (
                                    <div key={slide.id} className="w-full flex-shrink-0">
                                        <div className="bg-white p-8 md:p-12">
                                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                                <div>
                                                    <div className="flex items-center mb-4">
                                                        <div className="text-6xl mr-4">{slide.icon}</div>
                                                        <div className="bg-green-900 text-white px-4 py-1 rounded-full text-sm font-bold">
                                                            NOVO
                                                        </div>
                                                    </div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                                        {slide.title}
                                                    </h3>
                                                    <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                                                        {slide.description}
                                                    </p>
                                                    <div className="bg-green-900 text-white rounded-lg p-4 inline-block">
                                                        <span className="font-semibold text-lg">
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
                                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-lg"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation melhorada */}
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
                            aria-label="Slide anterior"
                            className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 bg-green-900 hover:bg-green-800 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center transition-all border-2 border-white"
                        >
                            <span className="text-2xl">‹</span>
                        </button>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
                            aria-label="Próximo slide"
                            className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-green-900 hover:bg-green-800 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center transition-all border-2 border-white"
                        >
                            <span className="text-2xl">›</span>
                        </button>

                        {/* Indicadores melhorados */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {carouselSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Ir para o slide ${index + 1}`}
                                    className={`w-4 h-4 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Call to Action adicional */}
                    <div className="text-center mt-16">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                🚀 Prepare-se para o Mercado
                            </h3>
                            <p className="text-green-100 text-lg mb-6">
                                Nossos cursos técnicos são a ponte entre você e as melhores oportunidades profissionais
                            </p>
                            <a href="#contato">
                                <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-100 transition-colors shadow-lg"
                                >
                                    Quero me inscrever
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}