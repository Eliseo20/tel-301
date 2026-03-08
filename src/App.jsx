import React, { useState } from 'react';
import { ArrowLeft, Target, ImageIcon, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48" }) => (
  <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-4 mb-2`}>
    <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
    <p className="text-sm font-medium uppercase tracking-widest">{title}</p>
    <p className="text-xs mt-1 opacity-60">(Espacio para imagen)</p>
  </div>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBack = () => {
    console.log("Volver");
  };

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <div className="max-w-5xl mx-auto w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">

        {/* A. Cabecera */}
        <header className="flex items-center gap-4">
          <button onClick={handleBack} className="p-2 rounded-full glass-morphism text-slate-400 hover:text-primary-400 hover:scale-110 transition-all cursor-pointer">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <p className="text-primary-500 font-bold text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary-500"></span>
              Introducción
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Página Principal TEL-301
            </h1>
          </div>
        </header>

        {/* B. Sección de Contenido Normal */}
        <section className="glass-morphism rounded-3xl p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Conceptos Básicos</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Esta es la plantilla base para las vistas de contenido del proyecto TEL-301. Utiliza el diseño en base a glassmorphism (cristal), fondo oscuro y acentos con el color primario, tal cual se detalló en las instrucciones iniciales.
              </p>
              <ImagePlaceholder title="Diagrama de Arquitectura" />
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 h-full">
              <h3 className="text-white font-bold flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary-400" /> Objetivos de la Plantilla
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Establecer un estándar visual.</li>
                <li>• Proveer componentes reutilizables.</li>
                <li>• Facilitar la creación de nuevas lecciones.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* C. Tarjetas de Componentes */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-primary-500/50 font-black">1.</span> Tailwind CSS
              </h3>
              <p className="text-sm text-slate-300 mb-4 flex-grow">Estilizado de manera rápida y consistente utilizando utility classes.</p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/5 text-slate-300 px-2 py-1 rounded text-xs border border-white/10">Estilos</span>
                <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">V4</span>
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-primary-500/50 font-black">2.</span> Lucide React
              </h3>
              <p className="text-sm text-slate-300 mb-4 flex-grow">Colección de iconos hermosos y consistentes para las interfaces.</p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/5 text-slate-300 px-2 py-1 rounded text-xs border border-white/10">Iconos</span>
                <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">SVGs</span>
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-primary-500/50 font-black">3.</span> Animaciones
              </h3>
              <p className="text-sm text-slate-300 mb-4 flex-grow">Transiciones suaves y entrada de elementos para mejorar la experiencia.</p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/5 text-slate-300 px-2 py-1 rounded text-xs border border-white/10">UX</span>
                <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Fluidez</span>
              </div>
            </div>
          </div>
        </section>

        {/* E. Sección Acordeón / Colapsable */}
        <section className="space-y-4">
          <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all outline-none cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl transition-colors duration-300 ${isOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400'}`}>
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">Ver Detalles Técnicos (Acordeón)</h2>
              </div>
            </div>
            <div className={`p-2 rounded-full ${isOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
              {isOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </div>
          </button>
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 max-h-[5000px] mt-4' : 'opacity-0 max-h-0'}`}>
            <div className="glass-morphism rounded-[2.5rem] p-8 md:p-14 border border-primary-500/10">
              <h3 className="text-xl font-bold text-white mb-4">Estructura del Proyecto</h3>
              <p className="text-slate-300 mb-4">
                Esta vista está construida combinando diferentes patrones. El acordeón es útil para ocultar contenido denso y mantener la vista inicial limpia. Se utiliza el estado de React (`useState`) para controlar la apertura y cierre con una suave transición `max-h` y `opacity`.
              </p>
              <ImagePlaceholder title="Estructura de Directorios" height="h-64" />
            </div>
          </div>
        </section>

        {/* F. Callout Final Especial */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20">
          <div className="bg-slate-950 rounded-[23px] p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4 z-10">
              <h2 className="text-3xl font-black text-white">¡Plantilla Lista!</h2>
              <p className="text-slate-300 text-lg">
                La base del proyecto e interfaz ha sido creada exitosamente. Ahora es posible añadir más vistas y contenido manteniendo la coherencia visual.
              </p>
            </div>
            <div className="z-10 bg-primary-500/20 p-6 rounded-2xl border border-primary-500/30">
              <p className="text-primary-300 font-bold text-center">TEL-301 - Framework UI</p>
            </div>
            {/* Decoración de fondo para el callout */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
