import React from 'react';
import { Target, Zap, Waves, ShieldAlert } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgInduccion from '../../assets/IMG_INDUC_001.png';

const InduccionView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Inducción Electromagnética"
      objective="Diferenciar y analizar los fenómenos de autoinducción e inducción mutua para diagnosticar el comportamiento de reactancias, bobinas de choque y el acoplamiento entre devanados de transformadores."
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="La inducción permite la transferencia de energía sin contacto físico, pero también genera transientes y riesgos galvánicos."
      calloutBadge="Electromagnetismo"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          La inducción es lo que permite que un transformador pase energía de un cable a otro sin que se toquen. Para un técnico en electrónica de potencia o calidad de energía, entender la inducción es vital para manejar los "picos de voltaje". Cuando cortas la corriente de una carga inductiva (como un motor grande), la inducción genera un arco eléctrico que puede destruir los contactos de un contactor si no se instalan supresores de transientes.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Autoinducción e Inducción Mutua */}
      <CollapsibleSection title="Autoinducción e Inducción Mutua" icon={Waves}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La autoinducción (L) es la propiedad de una bobina de inducir un voltaje en sí misma cuando la corriente que circula por ella cambia. En la práctica, esto causa una "inercia eléctrica". Cuando intentas detener la corriente en un motor, la bobina "se resiste" y genera un voltaje muy alto para intentar mantener la corriente fluyendo. Esto es lo que vemos como el chispazo en los bornes de un interruptor.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Por otro lado, la inducción mutua (M) es el principio del transformador: el flujo de una bobina "abraza" a la otra. Como técnicos de terreno, debemos cuidar el aislamiento galvánico. Si el aislamiento entre el primario y el secundario falla, la inducción mutua se convierte en un contacto físico peligroso que puede energizar la baja tensión con niveles de alta tensión, provocando riesgos de electrocución masiva.
          </p>
          <TechnicalImage
            id="IMG_INDUC_001"
            src={imgInduccion}
            alt="Esquema de acoplamiento magnético en núcleo toroidal"
            title="Acoplamiento e Inducción Mutua"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Consideraciones para el mantenimiento */}
      <CollapsibleSection title="Mantenimiento y Calidad de Energía" icon={ShieldAlert}>
        <div className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl">
            <h4 className="text-blue-400 font-bold mb-2">Reactancia inductiva</h4>
            <p className="text-slate-300 text-justify">
              En líneas largas de alimentación, la inducción provoca caídas de tensión que el técnico debe compensar mediante bancos de condensadores.
            </p>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl">
            <h4 className="text-orange-400 font-bold mb-2">Ruido en cables de señal</h4>
            <p className="text-slate-300 text-justify">
              La inducción mutua no deseada (crosstalk) ocurre cuando tiramos cables de control junto a cables de fuerza. El técnico siempre debe usar cables apantallados (shielded) y separarlos físicamente para evitar que la inducción de los cables de fuerza "ensucie" las señales de los sensores.
            </p>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default InduccionView;
