import React from 'react';
import { Target, Zap, Magnet, BookOpen, Cpu, AlertTriangle } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import solenoidImg from '../../assets/solenoid.png';
import contactorImg from '../../assets/contactor_industrial.png';
import disyuntorImg from '../../assets/disyuntor_magnetotermico.png';
import frenoImg from '../../assets/freno_electromagnetico.png';
import cerraduraImg from '../../assets/cerradura_electromagnetica.png';
import rotorImg from '../../assets/rotor_alternador.png';
import gruaImg from '../../assets/grua_chatarra.png';
import separadorImg from '../../assets/separador_magnetico.png';
import valvulaImg from '../../assets/valvula_solenoide.png';

const ElectroimanesView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Funcionamiento de Electroimanes"
      objective="Analizar el funcionamiento de solenoides y bobinas de accionamiento para realizar el mantenimiento de contactores, frenos electromagnéticos y válvulas de control."
      onBack={onBack}
      calloutTitle="Mantenimiento de Precisión"
      calloutText="Limpiar las caras de los núcleos de los contactores es vital para evitar ruidos y sobrecalentamientos por falta de cierre hermético del circuito magnético."
      calloutBadge="Clave Técnica"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Cpu} defaultOpen={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed text-lg text-justify">
              El electroimán es el componente más común en los sistemas de control industrial. El técnico de automatización y control lo utiliza a diario en <span className="text-primary-400 font-bold">relés y solenoides</span>.
            </p>
            <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-start gap-3">
              <AlertTriangle className="text-orange-400 w-6 h-6 shrink-0 mt-1" />
              <p className="text-sm text-slate-300 italic text-justify">
                Una mala conexión o un voltaje incorrecto puede causar que el núcleo no "pegue" bien, generando un arco eléctrico que destruye los contactos.
              </p>
            </div>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-white font-bold flex items-center gap-2 underline decoration-primary-500 underline-offset-4">Aplicaciones en Terreno</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">• Contactores Industriales</li>
              <li className="flex items-center gap-2">• Frenos de Grúas</li>
              <li className="flex items-center gap-2">• Electroválvulas de Neumática</li>
              <li className="flex items-center gap-2">• Relés de Maniobra</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Fuerza Magnetomotriz (FMM) */}
      <CollapsibleSection title="Fuerza Magnetomotriz (FMM)" icon={Zap}>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                Un electroimán genera magnetismo mediante el paso de corriente por un conductor enrollado. Su fuerza depende de dos factores críticos:
              </p>
              <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-primary-500/20 text-center shadow-inner">
                <span className="text-3xl font-black text-primary-400 font-mono tracking-widest uppercase">FMM = N · I</span>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-bold">N: Número de Espiras | I: Intensidad (Ampers)</p>
              </div>
              <p className="text-slate-300 leading-relaxed text-justify">
                Si un solenoide pierde fuerza, generalmente es por un <span className="text-red-400 font-bold">cortocircuito entre espiras</span> que reduce el número efectivo de vueltas, o por una caída de tensión en la línea.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <TechnicalImage 
                src={solenoidImg}
                alt="Sección transversal de un solenoide"
                title="Corte Técnico de Solenoide"
                id="IMG_ELECTRO_001"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. El Problema Crítico: Espira de Sombra */}
      <CollapsibleSection title="La Espira de Sombra" icon={BookOpen}>
        <div className="space-y-6">
          <div className="p-6 bg-primary-600/10 border-l-4 border-primary-500 rounded-r-2xl">
             <h3 className="text-white font-black text-xl mb-2 flex items-center gap-2">
                <AlertTriangle className="text-primary-400 shrink-0" /> El Anillo de Desfasaje
             </h3>
             <p className="text-slate-300 leading-relaxed text-justify">
                En electroimanes de <span className="text-primary-300 font-bold uppercase">Corriente Alterna</span>, el flujo pasa por cero 100 o 120 veces por segundo. Sin la espira de sombra (un pequeño anillo de cobre), el núcleo se soltaría y volvería a pegar en cada ciclo.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-8 glass-morphism rounded-3xl border border-red-500/10 space-y-4">
                <h4 className="text-red-400 font-bold flex items-center gap-2">Síntoma de Falla:</h4>
                <p className="text-slate-200 text-3xl font-black italic tracking-tighter">"ZUMBIDO VIOLENTO"</p>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">
                   Si el anillo de cobre se rompe, el electroimán vibrará violentamente a 100 o 120 Hz, provocando un ruido ensordecedor y el desgaste prematuro de las piezas mecánicas de impacto.
                </p>
             </div>
             <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Evita el "castañeo" del contactor.</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Genera un flujo magnético desfasado.</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Absorbe vibraciones mecánicas.</p>
                </div>
             </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 5. Aplicaciones Industriales por Función */}
      <div className="pt-8 border-t border-white/5">
        <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
          <Zap className="text-primary-500 w-8 h-8" /> 
          Catálogo de Aplicaciones Industriales
        </h2>

        <div className="space-y-12">
          {/* Categoría 1 */}
          <CollapsibleSection title="1. Dispositivos de Maniobra y Protección" icon={Cpu}>
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-primary-500">#</span> Contactores y Relés
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    Son la aplicación número uno. El electroimán atrae un contacto móvil para cerrar un circuito de potencia. Si la bobina del contactor falla o el núcleo tiene suciedad, el equipo <span className="text-red-400 font-bold">"zapatea"</span> o no activa correctamente, lo que puede derivar en fallas críticas de maquinaria.
                  </p>
                </div>
                <TechnicalImage 
                  src={contactorImg}
                  alt="Contactor Industrial seccionado"
                  title="Corte de Contactor Industrial"
                  id="IMG_ELECTRO_002"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-white/5 pt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-primary-500">#</span> Disyuntores (Magnetotérmicos)
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    Utilizan un electroimán para detectar <span className="text-primary-400 font-bold uppercase">cortocircuitos</span>. Cuando la corriente sube súbitamente, el campo magnético se vuelve tan fuerte que dispara el mecanismo de apertura instantáneamente, protegiendo tanto la instalación como al personal.
                  </p>
                </div>
                <TechnicalImage 
                  src={disyuntorImg}
                  alt="Disyuntor Magnetotérmico"
                  title="Protección Magnética Instantánea"
                  id="IMG_ELECTRO_003"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Categoría 2 */}
          <CollapsibleSection title="2. Sistemas de Frenado y Bloqueo" icon={AlertTriangle}>
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-primary-500">#</span> Frenos Electromagnéticos
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    Muy comunes en motores de grúas, ascensores y máquinas herramienta. El electroimán mantiene el freno liberado mientras hay energía; si se corta la corriente, un resorte presiona el freno. Es un sistema de <span className="text-emerald-400 font-bold">seguridad vital</span> ante fallas eléctricas.
                  </p>
                </div>
                <TechnicalImage 
                  src={frenoImg}
                  alt="Freno Electromagnético de Motor"
                  title="Mecanismo de Frenado por Seguridad"
                  id="IMG_ELECTRO_004"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-white/5 pt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-primary-500">#</span> Cerraduras Electromagnéticas
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    Utilizadas en control de acceso de plantas industriales para mantener puertas cerradas con fuerzas de hasta <span className="text-white font-bold">500 kg o más</span>, garantizando que solo personal autorizado acceda a áreas críticas.
                  </p>
                </div>
                <TechnicalImage 
                  src={cerraduraImg}
                  alt="Cerradura Electromagnética"
                  title="Bloqueo Magnético de Alta Seguridad"
                  id="IMG_ELECTRO_005"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Categoría 3 */}
          <CollapsibleSection title="3. Máquinas Rotativas y Generación" icon={Target}>
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-primary-500">#</span> Alternadores Industriales (Rotor)
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    El rotor de un alternador industrial es, en esencia, un <span className="text-primary-400 font-bold">electroimán giratorio</span>. Al controlar la corriente de excitación que entra al rotor, controlamos cuánto voltaje genera la máquina, permitiendo una regulación precisa de la salida eléctrica.
                  </p>
                </div>
                <TechnicalImage 
                  src={rotorImg}
                  alt="Rotor de Alternador Industrial"
                  title="Excitación Magnética en Generación"
                  id="IMG_ELECTRO_006"
                />
              </div>

              <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5 mt-4">
                <p className="text-slate-300 leading-relaxed text-justify">
                  En los <span className="text-white font-bold">Motores de Corriente Continua</span>, el campo magnético principal suele provenir de un devanado de campo (electroimán). Esto otorga la flexibilidad de regular la velocidad del motor variando simplemente la corriente de esa bobina.
                </p>
              </div>
            </div>
          </CollapsibleSection>

          {/* Categoría 4 */}
          <CollapsibleSection title="4. Elevación y Separación de Materiales" icon={Magnet}>
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-primary-500">#</span> Grúas de Chatarra
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    Utilizan grandes discos que activan un campo magnético masivo para levantar toneladas de hierro y lo sueltan simplemente cortando la energía. Es la forma más eficiente de manejo de carga ferrosa en fundiciones y centros de reciclaje.
                  </p>
                </div>
                <TechnicalImage 
                  src={gruaImg}
                  alt="Grúa de Chatarra Electromagnética"
                  title="Elevación Magnética de Gran Escala"
                  id="IMG_ELECTRO_007"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-white/5 pt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-primary-500">#</span> Separadores Magnéticos
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    En cintas transportadoras de minería o reciclaje, se usan para extraer piezas metálicas no deseadas que podrían <span className="text-red-400 font-bold uppercase">dañar la maquinaria</span> de trituración posterior.
                  </p>
                </div>
                <TechnicalImage 
                  src={separadorImg}
                  alt="Separador Magnético de Cinta"
                  title="Filtrado de Contaminantes Ferrosos"
                  id="IMG_ELECTRO_008"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Categoría 5 */}
          <CollapsibleSection title="5. Aplicaciones en Electrónica y Diagnóstico" icon={BookOpen}>
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-primary-500">#</span> Válvulas Solenoides
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    Controlan el paso de fluidos (agua, aire, aceite). El electroimán mueve un émbolo que abre o cierra el paso. Son fundamentales en los sistemas de <span className="text-primary-400 font-bold">refrigeración forzada</span> de grandes transformadores de potencia.
                  </p>
                </div>
                <TechnicalImage 
                  src={valvulaImg}
                  alt="Válvula Solenoide seccionada"
                  title="Control Electromagnético de Fluidos"
                  id="IMG_ELECTRO_009"
                />
              </div>

              <div className="p-6 bg-primary-500/5 rounded-2xl border border-primary-500/20 mt-4">
                <p className="text-slate-300 leading-relaxed text-justify italic">
                  "Incluso en el ámbito del audio, los altavoces funcionan mediante la interacción de un electroimán móvil con un imán permanente fijo, convirtiendo pulsos eléctricos en vibraciones sonoras."
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </TopicLayout>
  );
};

export default ElectroimanesView;
