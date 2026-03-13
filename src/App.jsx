import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, ImageIcon, BookOpen, ChevronDown, ChevronRight, Magnet } from 'lucide-react';
import MagnetismoView from './views/topics/MagnetismoView';
import FerromagnetismoView from './views/topics/FerromagnetismoView';
import ElectroimanesView from './views/topics/ElectroimanesView';
import CampoMagneticoView from './views/topics/CampoMagneticoView';
import FlujoMagneticoView from './views/topics/FlujoMagneticoView';
import FuerzaLorentzView from './views/topics/FuerzaLorentzView';
import LeyOhmMagneticaView from './views/topics/LeyOhmMagneticaView';
import SeguridadMagneticaView from './views/topics/SeguridadMagneticaView';
import LeyGaussView from './views/topics/LeyGaussView';
import FormacionCientificaView from './views/topics/FormacionCientificaView';
import TransformadoresGralView from './views/topics/TransformadoresGralView';
import TransformadorElevadorView from './views/topics/TransformadorElevadorView';
import LeyesFaradayView from './views/topics/LeyesFaradayView';
import InduccionView from './views/topics/InduccionView';
import LeyLenzView from './views/topics/LeyLenzView';
import CircuitoEquivalenteView from './views/topics/CircuitoEquivalenteView';
import PruebasTransformadorView from './views/topics/PruebasTransformadorView';

// Importación de miniaturas
import thumbMagnetismo from './assets/thumbnails/thumb_magnetismo.png';
import thumbFerromagnetismo from './assets/thumbnails/thumb_ferromagnetismo.png';
import thumbElectroimanes from './assets/thumbnails/thumb_electroimanes.png';
import thumbCampoMagnetico from './assets/thumbnails/thumb_campo_magnetico.png';
import thumbFlujoMagnetico from './assets/thumbnails/thumb_flujo_magnetico.png';
import thumbFuerzaLorentz from './assets/thumbnails/thumb_fuerza_lorentz.png';
import thumbLeyOhmMagnetica from './assets/thumbnails/thumb_ley_ohm_magnetica.png';
import thumbSeguridadMagnetica from './assets/thumbnails/thumb_seguridad_magnetica.png';
import thumbLeyGauss from './assets/thumbnails/thumb_ley_gauss.png';
import thumbFormacion from './assets/thumbnails/thumb_formacion_cientifica.png';
import thumbTransformadores from './assets/thumbnails/thumb_transformadores.png';
import thumbElevador from './assets/thumbnails/thumb_transformador_elevador.png';
import thumbFaraday from './assets/thumbnails/thumb_faraday.png';
import thumbInduccion from './assets/thumbnails/thumb_induccion.png';
import thumbLenz from './assets/thumbnails/thumb_lenz.png';
import thumbCircuitoEquivalente from './assets/thumbnails/thumb_circuito_equivalente.png';
import thumbPruebasTransformador from './assets/thumbnails/thumb_pruebas_transformador.png';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

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
              Maquinas Electricas
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Plataforma de Aprendizaje
            </h1>
          </div>
        </header>

        {/* B. Sección de Contenido Normal */}
        <section className="glass-morphism rounded-3xl p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Bienvenido al Contenido Técnico</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Aprende lo fundamental para que puedas mantener, diagnosticar y reparar máquinas profesionalmente.
              </p>
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
            <Link
              to="/magnetismo"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbMagnetismo} alt="Magnetismo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">1.</span> Magnetismo
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Naturaleza de campos, interacción con conductores y diagnóstico de fallas.</p>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/5 text-slate-300 px-2 py-1 rounded text-xs border border-white/10">Campo Magnético</span>
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Esencial</span>
                </div>
              </div>
            </Link>

            <Link
              to="/ferromagnetismo"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbFerromagnetismo} alt="Ferromagnetismo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">2.</span> Ferromagnetismo
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Permeabilidad, saturación y curvas de histéresis en materiales técnicos.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Esencial</span>
                </div>
              </div>
            </Link>

            <Link
              to="/electroimanes"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbElectroimanes} alt="Electroimanes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">3.</span> Electroimanes
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Funcionamiento de solenoides, FMM y la importancia de la espira de sombra.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Nuevo</span>
                </div>
              </div>
            </Link>

            <Link
              to="/campo-magnetico"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbCampoMagnetico} alt="Campo Magnético" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">4.</span> Campo Magnético
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Líneas de fuerza e interacciones mecánicas.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Nuevo</span>
                </div>
              </div>
            </Link>

            <Link
              to="/flujo-magnetico"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbFlujoMagnetico} alt="Flujo Magnético" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">5.</span> Flujo Magnético
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Webers, Teslas y eficiencia en transformadores.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Nuevo</span>
                </div>
              </div>
            </Link>

            <Link
              to="/fuerza-lorentz"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbFuerzaLorentz} alt="Fuerza de Lorentz" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">6.</span> Fuerza de Lorentz
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">El principio fundamental del par motor.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Nuevo</span>
                </div>
              </div>
            </Link>

            <Link
              to="/ley-ohm-magnetica"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbLeyOhmMagnetica} alt="Ley de Ohm Magnética" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">7.</span> Ley de Ohm Magnética
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Reluctancia, FMM y eficiencia en núcleos técnicos.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Nuevo</span>
                </div>
              </div>
            </Link>

            <Link
              to="/seguridad-magnetica"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbSeguridadMagnetica} alt="Seguridad Magnética" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">8.</span> Seguridad Magnética
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Protocolos de prevención y riesgos de alta inducción.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Seguridad</span>
                </div>
              </div>
            </Link>

            <Link
              to="/ley-gauss"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbLeyGauss} alt="Ley de Gauss" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">9.</span> Ley de Gauss
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Líneas cerradas, inexistencia del monopolo y fugas de flujo.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Nuevo</span>
                </div>
              </div>
            </Link>

            <Link
              to="/leyes-faraday"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbFaraday} alt="Leyes de Faraday" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">10.</span> Leyes de Faraday
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Magnitud de la f.e.m. inducida y origen del voltaje en máquinas.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Inducción</span>
                </div>
              </div>
            </Link>

            <Link
              to="/induccion"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbInduccion} alt="Inducción Electromagnética" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">11.</span> Inducción Electromagnética
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Autoinducción e inducción mutua en bobinas y transformadores.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Acoplamiento</span>
                </div>
              </div>
            </Link>

            <Link
              to="/ley-lenz"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbLenz} alt="Ley de Lenz" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">12.</span> Ley de Lenz
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Sentido de la corriente inducida y fuerzas de oposición magnética.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Oposición</span>
                </div>
              </div>
            </Link>

            <Link
              to="/formacion-cientifica"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbFormacion} alt="Formación Científica" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">13.</span> Formación Científica
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Integración de física, matemáticas y normativa técnica para diagnósticos.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Fundamentos</span>
                </div>
              </div>
            </Link>

            <Link
              to="/transformadores-gral"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbTransformadores} alt="Transformadores" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">14.</span> Transformadores
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Principios de inducción mutua, construcción y mantenimiento de máquinas.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Potencia</span>
                </div>
              </div>
            </Link>

            <Link
              to="/transformador-elevador"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbElevador} alt="Transformador Elevador" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">15.</span> Transformador Elevador
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Voltajes extremos, estrés dieléctrico y análisis de gases (DGA).</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Alta Tensión</span>
                </div>
              </div>
            </Link>

            <Link
              to="/circuito-equivalente"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbCircuitoEquivalente} alt="Circuito Equivalente" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">19.</span> Circuito Equivalente
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Ramas serie y paralelo, regulación de voltaje e impedancia.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Avanzado</span>
                </div>
              </div>
            </Link>

            <Link
              to="/pruebas-transformador"
              className="bg-slate-900/60 rounded-3xl border border-white/5 flex flex-col hover:border-primary-500/40 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={thumbPruebasTransformador} alt="Pruebas de Transformador" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-primary-500/50 font-black">20.</span> Pruebas de Laboratorio
                </h3>
                <p className="text-sm text-slate-300 mb-4 flex-grow">Ensayos de vacío y cortocircuito para verificar eficiencia y seguridad.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-500/10 text-primary-300 px-2 py-1 rounded text-xs border border-primary-500/20">Diagnóstico</span>
                </div>
              </div>
            </Link>
          </div>
        </section>



      </div>
    </div>
  );
}

function AppTopicWrapper({ view: View }) {
  const navigate = useNavigate();
  return <View onBack={() => navigate('/')} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magnetismo" element={<AppTopicWrapper view={MagnetismoView} />} />
        <Route path="/ferromagnetismo" element={<AppTopicWrapper view={FerromagnetismoView} />} />
        <Route path="/electroimanes" element={<AppTopicWrapper view={ElectroimanesView} />} />
        <Route path="/campo-magnetico" element={<AppTopicWrapper view={CampoMagneticoView} />} />
        <Route path="/flujo-magnetico" element={<AppTopicWrapper view={FlujoMagneticoView} />} />
        <Route path="/fuerza-lorentz" element={<AppTopicWrapper view={FuerzaLorentzView} />} />
        <Route path="/ley-ohm-magnetica" element={<AppTopicWrapper view={LeyOhmMagneticaView} />} />
        <Route path="/seguridad-magnetica" element={<AppTopicWrapper view={SeguridadMagneticaView} />} />
        <Route path="/ley-gauss" element={<AppTopicWrapper view={LeyGaussView} />} />
        <Route path="/formacion-cientifica" element={<AppTopicWrapper view={FormacionCientificaView} />} />
        <Route path="/transformadores-gral" element={<AppTopicWrapper view={TransformadoresGralView} />} />
        <Route path="/transformador-elevador" element={<AppTopicWrapper view={TransformadorElevadorView} />} />
        <Route path="/leyes-faraday" element={<AppTopicWrapper view={LeyesFaradayView} />} />
        <Route path="/induccion" element={<AppTopicWrapper view={InduccionView} />} />
        <Route path="/ley-lenz" element={<AppTopicWrapper view={LeyLenzView} />} />
        <Route path="/circuito-equivalente" element={<AppTopicWrapper view={CircuitoEquivalenteView} />} />
        <Route path="/pruebas-transformador" element={<AppTopicWrapper view={PruebasTransformadorView} />} />
      </Routes>
    </Router>
  );
}

export default App;
