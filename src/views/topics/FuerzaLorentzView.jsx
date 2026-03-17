import React from 'react';
import { Target, Magnet, Zap, Move } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import lorentzImg from '../../assets/IMG_LORENTZ_001.png';

const FuerzaLorentzView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Fuerza de Lorentz"
      objective="Analizar y calcular la fuerza mecánica ejercida sobre una carga eléctrica o un conductor portador de corriente que se mueve dentro de un campo magnético, para comprender el principio de torque en motores eléctricos."
      onBack={onBack}
      unit="Tema 6"
      calloutTitle="Principio de Motorización"
      calloutText="Al entender que la fuerza es proporcional a la corriente (F = B · L · I), el técnico sabe que si un motor consume corriente excesiva y no tiene torque, es probable que la densidad de flujo (B) del estator esté degradada."
      calloutBadge="Clave de Diagnóstico"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap} defaultOpen={true}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Esta es la ley que hace girar a todos los motores eléctricos. Es fundamental para el técnico que realiza diagnóstico de motores. Al entender que la fuerza es proporcional a la corriente (<span className="text-white font-bold italic">F = B · L · I</span>), el técnico sabe que si un motor consume corriente excesiva y no tiene torque, es probable que la densidad de flujo (B) del estator esté degradada.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Los técnicos de ascensores o tracción dependen de este principio para calibrar los sistemas de frenado y aceleración.
          </p>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Motorización */}
      <CollapsibleSection title="Dirección de la Fuerza y Par Motor" icon={Move}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La Fuerza de Lorentz establece que una carga que se mueve en un campo magnético experimenta una fuerza perpendicular tanto a su velocidad como al campo. Para un conductor con corriente, la fuerza resultante es perpendicular a la corriente y al campo.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-primary-600/10 border-l-4 border-primary-500 rounded-r-2xl">
                <h3 className="text-white font-bold mb-2">Regla de la Mano Izquierda</h3>
                <p className="text-slate-300 leading-relaxed text-justify">
                   Como técnicos, usamos esta regla para visualizar la dirección de la fuerza. En un motor, los conductores del rotor están inmersos en el campo del estator; la fuerza de Lorentz empuja estos conductores, creando el torque.
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed text-justify">
                Si la dirección de la corriente o la polaridad del campo magnético se invierte, la dirección de la fuerza también se invierte. Esta es la base de cómo funcionan los <span className="text-primary-400 font-bold tracking-tight">inversores de giro</span> en los contactores de control.
              </p>
            </div>
            
            <TechnicalImage 
              src={lorentzImg} 
              alt="Trayectoria de una partícula en un campo magnético" 
              title="Simulación física de trayectoria curva"
              id="IMG_LORENTZ_001"
            />
          </div>
        </div>
      </CollapsibleSection>
    </TopicLayout>
  );
};

export default FuerzaLorentzView;
