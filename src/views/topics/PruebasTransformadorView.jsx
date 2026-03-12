import React from 'react';
import { Target, Zap, Activity, ShieldCheck } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgTestVacio from '../../assets/IMG_TEST_VACIO_001.png';
import imgTestCorto from '../../assets/IMG_TEST_CORTO_001.png';

const PruebasTransformadorView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Pruebas de Circuito Abierto y Cortocircuito"
      objective="Ejecutar procedimientos de ensayo normalizados para obtener los parámetros del circuito equivalente y evaluar las pérdidas totales de la máquina, garantizando el cumplimiento de las normativas de eficiencia y seguridad."
      unit="Unidad Avanzada: Diagnóstico y Análisis"
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="Estas pruebas son el 'electrocardiograma' del transformador, revelando pérdidas ocultas y fallas estructurales."
      calloutBadge="Ensayos Normalizados"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Estas pruebas son el "electrocardiograma" del transformador. Un técnico de mantenimiento predictivo o de puesta en marcha las realiza para validar que un transformador reparado o nuevo cumple con la placa de características. No puedes confiar solo en lo que dice el fabricante; un técnico debe saber medir. Realizar estas pruebas correctamente evita que pongas en servicio un equipo que tiene un defecto interno oculto, lo cual podría provocar una explosión o un incendio en la subestación apenas reciba carga.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Prueba de Circuito Abierto */}
      <CollapsibleSection title="1. Prueba de Circuito Abierto (Vacío)" icon={Activity}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Se realiza aplicando el voltaje nominal en el lado de baja tensión (por seguridad del técnico) mientras el otro lado queda abierto. En esta prueba, la corriente que circula es mínima (corriente de excitación).
          </p>
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5">
            <h4 className="text-blue-400 font-bold mb-2">¿Qué medimos y qué calculamos?</h4>
            <p className="text-slate-300 text-sm text-justify mb-2">
              La potencia medida por el wattímetro en esta prueba representa casi exclusivamente las <strong>Pérdidas en el Hierro (Pfe)</strong>.
            </p>
            <p className="text-slate-300 text-sm text-justify">
              <strong>Dato técnico:</strong> Con los valores de voltaje, corriente y potencia obtenidos, el técnico calcula los valores de la rama paralelo (Rc y Xm). Si la potencia medida es mayor a la de la placa, el aislamiento entre las láminas del núcleo está fallando.
            </p>
          </div>
          <TechnicalImage
            id="IMG_TEST_VACIO_001"
            src={imgTestVacio}
            alt="Diagrama de conexión de laboratorio para prueba de vacío"
            title="Conexión de Ensayo de Vacío"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Desarrollo Técnico: Prueba de Cortocircuito */}
      <CollapsibleSection title="2. Prueba de Cortocircuito" icon={Zap}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Se realiza cortocircuitando el lado de baja tensión con un puente de gran sección y aplicando un voltaje muy pequeño (voltaje de cortocircuito, Vcc) en el lado de alta, hasta que circule la corriente nominal.
          </p>
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5">
            <h4 className="text-orange-400 font-bold mb-2">¿Qué medimos y qué calculamos?</h4>
            <p className="text-slate-300 text-sm text-justify mb-2">
              La potencia medida aquí representa las <strong>Pérdidas en el Cobre (Pcu)</strong> a plena carga.
            </p>
            <p className="text-slate-300 text-sm text-justify">
              <strong>Dato técnico:</strong> Con estos datos calculamos la Impedancia de Cortocircuito. Para un técnico, este valor es sagrado: si conectas dos transformadores en paralelo, sus voltajes de cortocircuito (Vcc%) deben ser idénticos. Si no lo son, el de menor impedancia absorberá toda la carga y se quemará.
            </p>
          </div>
          <TechnicalImage
            id="IMG_TEST_CORTO_001"
            src={imgTestCorto}
            alt="Diagrama de conexión para prueba de cortocircuito"
            title="Conexión de Ensayo de Cortocircuito"
          />
        </div>
      </CollapsibleSection>

      {/* 5. Interpretación de resultados en terreno */}
      <CollapsibleSection title="Interpretación de Resultados en Terreno" icon={ShieldCheck}>
        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl">
            <h4 className="text-green-400 font-bold mb-2">Evaluación de Eficiencia</h4>
            <p className="text-slate-300 text-justify">
              Si la suma de las pérdidas de ambas pruebas supera el 2-3% de la potencia total en transformadores grandes, el equipo es ineficiente y muy costoso de operar a largo plazo.
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
            <h4 className="text-red-400 font-bold mb-2">Seguridad y Resistencia Mecánica</h4>
            <p className="text-slate-300 text-justify">
              La prueba de cortocircuito también sirve para verificar la integridad estructural. Si durante la prueba se escuchan ruidos mecánicos o vibraciones fuertes, significa que los herrajes internos están sueltos y la máquina fallará ante un cortocircuito real en la red.
            </p>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default PruebasTransformadorView;
