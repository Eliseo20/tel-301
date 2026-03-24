import React from 'react';
import { Target, Zap, TrendingUp, AlertTriangle } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgElevador from '../../assets/IMG_ELEV_001.png';
import imgFormTrans from '../../assets/IMG_FORM_TRANS_001.png';

const TransformadorElevadorView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Transformador Elevador"
      objective="Dimensionar y verificar el funcionamiento de transformadores diseñados para aumentar el voltaje y reducir la corriente, facilitando el transporte de energía a largas distancias y la alimentación de equipos especiales."
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="Los transformadores elevadores son críticos en la generación, donde el manejo de altísimas corrientes y el estrés dieléctrico son los principales desafíos."
      calloutBadge="Generación y Transmisión"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Los transformadores elevadores se encuentran principalmente en las centrales de generación. Un técnico en una planta fotovoltaica o hidroeléctrica debe entender que la corriente en el lado de baja (el generador) es altísima. Cualquier mal contacto en las barras de baja tensión de un transformador elevador generará puntos calientes inmediatos debido al efecto Joule (I^2 * R). Los técnicos de pruebas y puestas en marcha deben ser extremadamente cuidadosos con las distancias de seguridad en el lado secundario, ya que el voltaje puede ser de cientos de kilovoltios.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Relación de Transformación y Aislamiento */}
      <CollapsibleSection title="Relación de Transformación y Aislamiento" icon={TrendingUp}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            En un transformador elevador, el número de espiras del secundario (Ns) es mucho mayor que el del primario (Np). Para un transformador elevador, la relación de transformación fundamental se define así:
          </p>
          <TechnicalImage
            id="IMG_FORM_TRANS_001"
            src={imgFormTrans}
            alt="Fórmula de relación de transformación"
            title="Relación de Transformación Fundamental"
          />
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Desde el punto de vista del técnico de mantenimiento, el desafío aquí es el estrés dieléctrico. Al elevar el voltaje, el campo eléctrico intenta perforar cualquier impureza en el aceite o el papel.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Un problema típico detectado por los técnicos en estos equipos son las descargas parciales. Son pequeñas chispas internas que no llegan a ser un cortocircuito, pero que carbonizan el aceite lentamente. Si un técnico nota que el gasómetro del transformador elevador (relé Buchholz) está acumulando gases, debe realizar un análisis de gases disueltos (DGA) inmediatamente, ya que es la primera señal de que el aislamiento de alta tensión está fallando.
          </p>
          <TechnicalImage
            id="IMG_ELEV_001"
            src={imgElevador}
            alt="Transformador elevador en subestación de potencia"
            title="Transformador de Salida de Central"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Consecuencias de anomalías en transformadores elevadores */}
      <CollapsibleSection title="Anomalías y Consecuencias" icon={AlertTriangle}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
            <h4 className="text-red-400 font-bold mb-2">Falla de aislamiento por sobretensión</h4>
            <p className="text-slate-300 text-justify">
              Si los pararrayos no están bien coordinados, un transiente de la red puede destruir el devanado secundario.
            </p>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl">
            <h4 className="text-orange-400 font-bold mb-2">Coronamiento</h4>
            <p className="text-slate-300 text-justify">
              En los terminales de salida, si hay suciedad o humedad, se genera un efecto corona que ioniza el aire, provocando pérdidas de energía y ruido audible (fritura).
            </p>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default TransformadorElevadorView;
