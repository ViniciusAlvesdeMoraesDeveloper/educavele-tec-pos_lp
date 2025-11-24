export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-800 text-white relative overflow-hidden">
      {/* Efeito de background animado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-blue-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Badge destacada */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-lg font-semibold">+15 anos de excelência em educação</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Edutec
              <span className="text-green-300 block">Brasil</span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-green-100 leading-relaxed">
              Transformando vidas através da
              <span className="block text-white">educação tecnológica</span>
            </p>
            
            <p className="text-xl md:text-2xl opacity-95 max-w-2xl">
              Cursos inovadores que preparam você para os desafios do futuro digital
            </p>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 max-w-lg border-2 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-center text-white">
                🚀 Destaque-se no Mercado
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl mr-4">🎯</span>
                  <span className="font-semibold">Cursos sempre atualizados</span>
                </li>
                <li className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl mr-4">💼</span>
                  <span className="font-semibold">Professores do mercado</span>
                </li>
                <li className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl mr-4">📈</span>
                  <span className="font-semibold">95% de empregabilidade</span>
                </li>
                <li className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl mr-4">🎓</span>
                  <span className="font-semibold">Certificação reconhecida</span>
                </li>
              </ul>
              
              {/* Estatística em destaque */}
              <div className="mt-6 p-4 bg-green-500/30 rounded-xl text-center">
                <div className="text-2xl font-bold">+10.000</div>
                <div className="text-lg">alunos transformados</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos flutuantes - POSIÇÕES AJUSTADAS */}
      <div className="absolute top-10 right-10 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-lg rotate-6 shadow-xl animate-bounce">
        ⭐ Melhor Avaliada
      </div>
      <div className="absolute bottom-10 right-10 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg -rotate-6 shadow-xl animate-pulse">
        🎓 10K+ Alunos
      </div>
    </div>
  )
}
  