import React from 'react';
import { Target, Zap, Lightbulb, BookOpen } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgFormacion from '../../assets/IMG_FORM_001.png';

const FormacionCientificaView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Formación científico-tecnológica en el desempeño técnico"
      objective="Integrar los conocimientos teóricos de la física y las matemáticas con las normativas técnicas vigentes para ejecutar diagnósticos precisos y tomar decisiones fundamentadas en la seguridad y eficiencia operativa."
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="La formación tecnológica permite pasar de la intuición al diagnóstico basado en evidencia científica y magnitudes físicas medibles."
      calloutBadge="Fundamentos Técnicos"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Un técnico no es un "cambia piezas". El ejercicio de la función técnica requiere entender el porqué de los fenómenos. Un técnico con sólida formación científica sabe que si un motor calienta, no basta con subir el seteo del relé térmico; debe investigar si es un problema de armónicos, desbalance de fases o fatiga de materiales. Esta base es vital para quienes aspiran a cargos de programación de mantenimiento o jefaturas de taller, donde se deben redactar informes técnicos que respalden inversiones en nuevos equipos o reparaciones mayores.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: El Método Científico en la Falla */}
      <CollapsibleSection title="El Método Científico en la Falla" icon={Lightbulb}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La formación tecnológica nos permite pasar de la "intuición" al "diagnóstico basado en evidencia". En el mundo de las máquinas eléctricas, esto significa utilizar magnitudes físicas medibles (resistencia, impedancia, temperatura, vibración) para predecir el comportamiento de un activo. El técnico moderno debe ser capaz de interpretar gráficos de analizadores de redes y compararlos con los límites teóricos de diseño de la máquina.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Por ejemplo, al realizar una prueba de aislamiento, el técnico no solo anota un número; utiliza su formación para entender que ese valor varía según la temperatura y la humedad (curva de absorción dieléctrica). Sin este rigor científico, el técnico podría dar por buena una máquina que está a punto de fallar catastróficamente bajo carga. La tecnología avanza rápido (variadores de última generación, monitoreo IoT), y solo una base científica sólida permite adaptarse a estos cambios sin quedar obsoletos.
          </p>
          <TechnicalImage
            id="IMG_FORM_001"
            src={imgFormacion}
            alt="Técnico analizando espectros de frecuencia"
            title="Diagnóstico Basado en Evidencia"
          />
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default FormacionCientificaView;
