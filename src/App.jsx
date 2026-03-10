import React, { useState } from 'react';
import { ArrowLeft, Target, ImageIcon, BookOpen, ChevronDown, ChevronRight, Magnet } from 'lucide-react';
import MagnetismoView from './views/topics/MagnetismoView';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
  <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-4 mb-2`}>
    <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
    <p className="text-sm font-medium uppercase tracking-widest">{title}</p>
    <p className="text-xs mt-1 opacity-60">(Espacio para imagen)</p>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const handleBack = () => {
    setCurrentView('home');
  };

  if (currentView === 'magnetismo') {
    return (
      <div className="min-h-screen bg-slate-950 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <MagnetismoView onBack={handleBack} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <div className="max-w-5xl mx-auto w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">

        {/* A. Cabecera */}
        <header className="flex items-center gap-4">
          <div className="p-2 rounded-full glass-morphism text-slate-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-primary-500 font-bold text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary-500"></span>
              Plataforma de Aprendizaje
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Módulo TEL-301
            </h1>
          </div>
        </header>

        {/* B. Sección de Contenido Normal */}
        <section className="glass-morphism rounded-3xl p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Bienvenido al Contenido Técnico</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Aquí encontrarás todo el material didáctico estructurado por unidades para el diagnóstico y mantenimiento de equipos electromecánicos.
              </p>
              <button
                onClick={() => setCurrentView('magnetismo')}
                className="group flex items-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-6 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary-500/20"
              >
                <Magnet className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Empezar Tema 1: Magnetismo
              </button>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 h-full">
              <h3 className="text-white font-bold flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary-400" /> Próximos pasos
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Explorar conceptos de Magnetismo.</li>
                <li>• Identificar polaridades y campos.</li>
                <li>• Diagnosticar magnetismo remanente.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* C. Temas Disponibles (Grid) */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Contenidos de la Unidad 1</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              onClick={() => setCurrentView('magnetismo')}
              className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-colors cursor-pointer group"
            >
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-primary-500/50 font-black">1.</span> Magnetismo
              </h3>
              <p className="text-sm text-slate-300 mb-4 flex-grow">Naturaleza de campos, interacción con conductores y diagnóstico de fallas.</p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/5 text-slate-300 px-2 py-1 rounded text-xs border border-white/10">Campo Magnético</span>
                <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Esencial</span>
              </div>
            </div>

            {/* Marcadores de posición para otros temas */}
            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col opacity-50 grayscale">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-slate-500 font-black">2.</span> Electromagnetismo
              </h3>
              <p className="text-sm text-slate-300 mb-4 flex-grow">Próximamente disponible...</p>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col opacity-50 grayscale">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-slate-500 font-black">3.</span> Inducción
              </h3>
              <p className="text-sm text-slate-300 mb-4 flex-grow">Próximamente disponible...</p>
            </div>
          </div>
        </section>

        {/* E. Sección Acordeón */}
        <section className="space-y-4">
          <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all outline-none cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl transition-colors duration-300 ${isOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400'}`}>
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">Detalles del Módulo</h2>
              </div>
            </div>
            <div className={`p-2 rounded-full ${isOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
              {isOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </div>
          </button>
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 max-h-[5000px] mt-4' : 'opacity-0 max-h-0'}`}>
            <div className="glass-morphism rounded-[2.5rem] p-8 md:p-14 border border-primary-500/10">
              <h3 className="text-xl font-bold text-white mb-4">Metodología TEL-301</h3>
              <p className="text-slate-300 mb-4 text-lg">
                El módulo TEL-301 se enfoca en el aprendizaje práctico-teórico mediante la visualización de fenómenos físicos y su aplicación directa en el campo del mantenimiento industrial. Cada lección incluye:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400">
                <li className="flex items-center gap-2 bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span> Infografías Técnicas HD
                </li>
                <li className="flex items-center gap-2 bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span> Enfoque en Mantenimiento
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* F. Callout Final Especial */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20">
          <div className="bg-slate-950 rounded-[23px] p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4 z-10">
              <h2 className="text-3xl font-black text-white">Material en Desarrollo</h2>
              <p className="text-slate-300 text-lg">
                Estamos cargando los temas de la Unidad 1. Mantente atento a las actualizaciones regulares del repositorio.
              </p>
            </div>
            <div className="z-10 bg-primary-500/20 p-6 rounded-2xl border border-primary-500/30">
              <p className="text-primary-300 font-bold text-center">TEL-301 - Framework UI</p>
            </div>
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default App;
