import React from 'react';
import { Target, Zap, Magnet, BookOpen } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import magnetSolenoideImg from '../../assets/IMG_TEL301_001.png';
import reglaManoDerechaImg from '../../assets/IMG_TEL301_002.png';

const MagnetismoView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Magnetismo"
      objective="Comprender la naturaleza de los campos magnéticos y su interacción con conductores eléctricos para diagnosticar fallas de atracción, repulsión y blindaje en equipos electromecánicos."
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="El magnetismo es la base fundamental para la conversión de energía y el diagnóstico de maquinaria industrial."
      calloutBadge="Mantenimiento Eléctrico"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Para un técnico de mantenimiento, el magnetismo no es solo "imanes". Es la base para entender por qué un relé se pega, por qué un rodamiento se magnetiza y causa erosión eléctrica, o por qué los cables de potencia deben estar bien peinados en las bandejas. Si no entiendes el magnetismo, no entiendes cómo se transfiere la energía sin contacto físico. Los técnicos de bobinado y mantenimiento preventivo son quienes más aplican estos conceptos para detectar fugas de flujo o magnetismo remanente en ejes de motores.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: El Campo en la Práctica */}
      <CollapsibleSection title="El Campo en la Práctica" icon={Magnet}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El magnetismo es una propiedad física mediante la cual ciertos materiales ejercen fuerzas de atracción o repulsión. En el ámbito del módulo, nos interesa el magnetismo como el vehículo que permite la conversión de energía eléctrica en mecánica (motores) y viceversa (generadores).
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Todo campo magnético se visualiza mediante líneas de inducción. Un punto crítico para el técnico es entender que estas líneas siempre buscan el camino de menor resistencia (reluctancia). En una máquina eléctrica, si el entrehierro (el espacio de aire entre el estator y el rotor) es irregular, el campo magnético será asimétrico, provocando vibraciones mecánicas severas y desgaste prematuro en los descansos.
          </p>
          <TechnicalImage
            id="IMG_TEL301_001"
            src={magnetSolenoideImg}
            alt="Infografía: Imán y Solenoide"
            title="Infografía: Imán y Solenoide"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Interacción y Polaridad */}
      <CollapsibleSection title="Interacción y Polaridad" icon={BookOpen}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La regla de oro en terreno es simple: polos iguales se repelen, polos opuestos se atraen. Sin embargo, en máquinas de corriente continua, la inversión de estos polos (mediante la conmutación) es lo que permite que el motor siga girando. Un técnico que sepa identificar la polaridad magnética puede determinar si un devanado ha sido conectado al revés sin necesidad de desarmar toda la máquina, simplemente usando una brújula o un sensor de efecto Hall.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg bg-primary-500/5 p-6 rounded-2xl border border-primary-500/20 italic text-justify">
            Es vital considerar el magnetismo remanente. En muchos contactores o frenos electromagnéticos, el material queda ligeramente magnetizado después de quitar la corriente. Si el técnico no conoce este fenómeno, podría confundir un problema mecánico (un resorte vencido) con un problema de histéresis del material del núcleo.
          </p>
          <TechnicalImage
            id="IMG_TEL301_002"
            src={reglaManoDerechaImg}
            alt="Regla de la mano derecha"
            title="Regla de la mano derecha"
          />
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default MagnetismoView;
