export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-green-900 text-white relative overflow-hidden mt-12">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-600 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-gray-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-25 ">
            {/* Badge destacada */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30 ml-80">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-lg font-semibold">+15 anos de excelência em educação</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Faculdade
              <span className="text-green-400 "> EducaVale</span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-green-200 leading-relaxed">
              Educação Superior e
              <span className=" text-white"> Cursos Técnicos</span>
            </p>
            
            <p className="text-xl md:text-2xl opacity-95 max-w-2xl">
              Formação completa para o mercado de trabalho com graduação e cursos técnicos
            </p>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 max-w-lg border-2 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-center text-white">
                🚀 Formação Completa
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl mr-4">🎓</span>
                  <span className="font-semibold">Cursos Superiores</span>
                </li>
                <li className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl mr-4">⚡</span>
                  <span className="font-semibold">Cursos Técnicos</span>
                </li>
                <li className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl mr-4">💼</span>
                  <span className="font-semibold">Professores do mercado</span>
                </li>
                <li className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl mr-4">📈</span>
                  <span className="font-semibold">95% de empregabilidade</span>
                </li>
              </ul>
              
              {/* Estatística em destaque */}
              <div className="mt-6 p-4 bg-green-600/30 rounded-xl text-center">
                <div className="text-2xl font-bold">+10.000</div>
                <div className="text-lg">alunos formados</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute top-10 right-10 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg rotate-6 shadow-xl animate-bounce">
        ⭐ Melhor Avaliada
      </div>
      <div className="absolute bottom-10 right-10 bg-gray-800 text-white px-4 py-2 rounded-lg font-bold text-lg -rotate-6 shadow-xl animate-pulse">
        🎓 10K+ Alunos
      </div>
    </div>
  )
}