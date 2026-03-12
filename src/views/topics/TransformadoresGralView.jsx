import React from 'react';
import { Target, Zap, Activity, BookOpen } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgTransformadores from '../../assets/IMG_TRANS_001.png';

const TransformadoresGralView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Transformadores monofásicos y trifásicos"
      objective="Analizar la constitución interna y el principio de funcionamiento de los transformadores según su configuración de fases, para realizar conexiones, mediciones y mantenimientos preventivos en redes de distribución y potencia."
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="El transformador es el corazón de la red eléctrica, permitiendo la adaptación de niveles de voltaje mediante la inducción mutua."
      calloutBadge="Sistemas de Potencia"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          El transformador es el corazón de la red eléctrica. El técnico de distribución o de mantenimiento industrial trabaja con ellos a diario. Saber diferenciar entre un banco de tres transformadores monofásicos y un transformador trifásico compacto es clave para las maniobras de emergencia. Si un técnico conecta mal un grupo vectorial en un transformador trifásico (por ejemplo, confundir una conexión estrella con una triángulo), provocará un cortocircuito bifásico o trifásico de magnitudes destructivas apenas cierre el interruptor.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Construcción y Flujo */}
      <CollapsibleSection title="Construcción y Flujo" icon={Activity}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El transformador basa su operación en la inducción mutua. El núcleo, compuesto por chapas de acero silicoso laminadas para reducir las corrientes de Foucault, canaliza el flujo magnético del primario al secundario. En los monofásicos, tenemos un solo camino para el flujo. En los trifásicos, el núcleo suele tener tres columnas, donde los flujos de cada fase interactúan, requiriendo un equilibrio magnético perfecto.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Como técnicos, debemos prestar especial atención al aceite dieléctrico en los transformadores de potencia. Este fluido no solo aísla eléctricamente, sino que transporta el calor desde las bobinas hacia los radiadores. Un transformador trifásico bajo carga desequilibrada (una fase con más corriente que las otras) sufrirá un calentamiento asimétrico que puede degradar el papel aislante de esa fase específica, reduciendo la vida útil de toda la máquina.
          </p>
          <TechnicalImage
            id="IMG_TRANS_001"
            src={imgTransformadores}
            alt="Corte técnico de un transformador trifásico"
            title="Estructura Interna del Transformador"
          />
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default TransformadoresGralView;
