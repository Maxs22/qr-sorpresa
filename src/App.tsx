import { useState, useEffect } from 'react'
import { Crown, Sparkles, ArrowRight } from 'lucide-react'
import './App.css'

type GameState = 'loading' | 'winner' | 'not-winner' | 'initial'

function App() {
  const [gameState, setGameState] = useState<GameState>('initial')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Leer parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search)
    const isWinner = urlParams.get('winner') === 'true'

    // Mostrar carga automáticamente
    setGameState('loading')

    // Después de 3 segundos, mostrar el resultado
    setTimeout(() => {
      setGameState(isWinner ? 'winner' : 'not-winner')
    }, 3000)
  }, [])



  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 sm:p-6">
      {/* Efectos de fondo mágicos mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse-glow opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-teal-300 rounded-full animate-pulse-glow opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-orange-300 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-sparkle opacity-40"></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/5 right-1/5 w-2 h-2 bg-pink-300 rounded-full animate-float opacity-35"></div>
      </div>

      {/* Card principal */}
      <div className="relative z-10 w-full max-w-2xl sm:max-w-3xl mx-auto">
        <div className="card-container bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-10 sm:p-12 animate-fade-in hover:bg-white/15 transition-all duration-500 hover:shadow-3xl hover:border-white/30">


          {gameState === 'loading' && (
            <div className="text-center space-y-6 animate-slide-up">
              <div className="space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto shadow-lg"></div>
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 border-2 border-orange-300/30 rounded-full animate-ping"></div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white animate-fade-in-delay">
                    🍫 Verificando tu chocolate...
                  </h2>
                  <p className="text-blue-200 text-base sm:text-lg animate-fade-in-delay-2">
                    Descubriendo si ganaste el anillo
                  </p>
                </div>

                {/* Efectos de emoción adicionales */}
                <div className="flex justify-center space-x-2 mt-6">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200"></div>
                </div>

                <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-4 animate-fade-in-delay-3">
                  <p className="text-orange-200 text-sm">
                    ⏳ Un momento, estamos revisando tu premio...
                  </p>
                </div>
              </div>
            </div>
          )}

          {gameState === 'winner' && (
            <div className="text-center space-y-6 relative overflow-hidden animate-slide-up">
              {/* Efecto de confeti simple y visible */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Confeti naranja */}
                <div className="absolute top-0 left-1/4 w-4 h-4 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                <div className="absolute top-0 left-1/3 w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
                <div className="absolute top-0 left-1/2 w-5 h-5 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.2s' }}></div>
                <div className="absolute top-0 left-2/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
                <div className="absolute top-0 left-3/4 w-4 h-4 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.3s' }}></div>

                {/* Confeti azul */}
                <div className="absolute top-0 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-confetti" style={{ animationDelay: '0.3s', animationDuration: '3.4s' }}></div>
                <div className="absolute top-0 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-confetti" style={{ animationDelay: '0.8s', animationDuration: '3.6s' }}></div>
                <div className="absolute top-0 right-1/2 w-2 h-2 bg-blue-300 rounded-full animate-confetti" style={{ animationDelay: '1.3s', animationDuration: '3.1s' }}></div>
                <div className="absolute top-0 right-2/3 w-5 h-5 bg-blue-400 rounded-full animate-confetti" style={{ animationDelay: '1.8s', animationDuration: '3.7s' }}></div>

                {/* Confeti teal */}
                <div className="absolute top-0 left-1/6 w-2 h-2 bg-teal-400 rounded-full animate-confetti" style={{ animationDelay: '0.2s', animationDuration: '3.3s' }}></div>
                <div className="absolute top-0 left-2/5 w-3 h-3 bg-teal-500 rounded-full animate-confetti" style={{ animationDelay: '0.7s', animationDuration: '3.5s' }}></div>
                <div className="absolute top-0 right-1/6 w-2.5 h-2.5 bg-teal-300 rounded-full animate-confetti" style={{ animationDelay: '1.2s', animationDuration: '3.2s' }}></div>
                <div className="absolute top-0 right-2/5 w-2 h-2 bg-teal-400 rounded-full animate-confetti" style={{ animationDelay: '1.7s', animationDuration: '3.8s' }}></div>

                {/* Confeti amarillo */}
                <div className="absolute top-0 left-1/5 w-3 h-3 bg-yellow-400 rounded-full animate-confetti" style={{ animationDelay: '0.4s', animationDuration: '3.1s' }}></div>
                <div className="absolute top-0 right-1/5 w-2.5 h-2.5 bg-yellow-500 rounded-full animate-confetti" style={{ animationDelay: '0.9s', animationDuration: '3.4s' }}></div>
                <div className="absolute top-0 left-3/5 w-2 h-2 bg-yellow-300 rounded-full animate-confetti" style={{ animationDelay: '1.4s', animationDuration: '3.6s' }}></div>
                <div className="absolute top-0 right-3/5 w-3.5 h-3.5 bg-yellow-400 rounded-full animate-confetti" style={{ animationDelay: '1.9s', animationDuration: '3.3s' }}></div>

                {/* Confeti adicional */}
                <div className="absolute top-0 left-1/8 w-2 h-2 bg-pink-400 rounded-full animate-confetti" style={{ animationDelay: '0.1s', animationDuration: '3.2s' }}></div>
                <div className="absolute top-0 right-1/8 w-3 h-3 bg-purple-400 rounded-full animate-confetti" style={{ animationDelay: '0.6s', animationDuration: '3.4s' }}></div>
                <div className="absolute top-0 left-7/8 w-3 h-3 bg-green-400 rounded-full animate-confetti" style={{ animationDelay: '1.1s', animationDuration: '3.6s' }}></div>
                <div className="absolute top-0 right-7/8 w-2 h-2 bg-red-400 rounded-full animate-confetti" style={{ animationDelay: '1.6s', animationDuration: '3.3s' }}></div>
              </div>

              <div className="space-y-12 relative z-10 py-16 px-12">
                <div className="relative py-16 px-8">
                  <Crown className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 mx-auto drop-shadow-lg" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-ping shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full animate-ping delay-300 shadow-lg"></div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-orange-300 rounded-full animate-sparkle delay-500"></div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-6 animate-fade-in-delay">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 animate-fade-in-delay-2">
                    ¡FELICIDADES! 🎉
                  </h2>
                  <p className="text-yellow-100 text-lg sm:text-xl mb-3 animate-fade-in-delay-3">
                    ¡Ganaste el Anillo!
                  </p>
                  <p className="text-yellow-200 text-sm sm:text-base mb-4 animate-fade-in-delay-4">
                    ¡Qué suerte! Disfruta tu premio especial.
                  </p>
                  <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3 animate-fade-in-delay-5">
                    <p className="text-yellow-100 text-sm font-medium">
                      📱 Acércate con este QR a la cumpleañera para reclamar tu premio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {gameState === 'not-winner' && (
            <div className="text-center space-y-6 animate-slide-up">
              <div className="space-y-12 py-16 px-12">
                <div className="relative py-16 px-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <span className="text-4xl sm:text-5xl drop-shadow-lg">🏹</span>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 border-2 border-blue-400/30 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 rounded-full animate-sparkle"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-sparkle delay-300"></div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-2xl p-6 animate-fade-in-delay">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 animate-fade-in-delay-2">
                    No ganaste, pero tienes un chocolate 🍫
                  </h2>
                  <p className="text-blue-100 text-base sm:text-lg mb-3 animate-fade-in-delay-3">
                    Esta vez no fue el anillo, pero disfruta tu premio.
                  </p>
                  <p className="text-blue-200 text-sm sm:text-base animate-fade-in-delay-4">
                    ¡Sigue celebrando la fiesta!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
