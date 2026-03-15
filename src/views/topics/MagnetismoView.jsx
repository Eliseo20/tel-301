import React from 'react';
import { BookOpen, Target, Magnet, Zap, Globe, Settings, Activity, ShieldAlert, Cpu } from 'lucide-react';
import { TopicLayout, CollapsibleSection } from '../../components/TopicComponents';

const MagnetismoView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Magnetismo"
      objective="Desarrollar de manera exhaustiva el tema del magnetismo, con énfasis en conceptos, teorías, comportamiento de materiales y su relevancia en el mantenimiento de máquinas eléctricas."
      onBack={onBack}
      calloutTitle="Introducción"
      calloutText="El magnetismo es un fenómeno físico fundamental que forma parte integral de la comprensión y operación de las máquinas eléctricas contemporáneas. Desde el punto de vista académico y técnico, el estudio del magnetismo constituye el pilar para entender múltiples procesos industriales y tecnológicos."
      calloutBadge="Teoría Fundamental"
    >
      <CollapsibleSection title="Introducción y Metodología" icon={BookOpen} defaultOpen={true}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            A lo largo de este documento, la información será desarrollada de acuerdo con los enfoques propuestos en la bibliografía recomendada, especialmente tomando como referencias principales los trabajos de Moreno Alfonso, Narciso (Problemas resueltos de tecnología eléctrica), Kosow, Irving L. (Máquinas eléctricas y transformadores) y Fraile Mora, Jesús (Máquinas eléctricas). Se abordarán definiciones clave, principios actuales y aplicaciones prácticas, todas ellas indispensables en el ámbito académico y profesional de la ingeniería eléctrica.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="1. Concepto Fundamental del Magnetismo" icon={Target}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El magnetismo es una de las manifestaciones de la interacción electromagnética, una de las cuatro fuerzas fundamentales que gobiernan el comportamiento de la materia en el universo. Puede definirse como un fenómeno físico por el cual ciertos materiales son capaces de atraer o repeler otros materiales debido a la presencia de un campo magnético. Moreno Alfonso (2006) recalca que el magnetismo no solamente se encuentra presente en los materiales propiamente denominados "imanes", sino que también está profundamente ligado a los fenómenos eléctricos, dando paso a la noción de electromagnetismo.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Históricamente, el estudio del magnetismo inicia con la observación de los materiales naturales como la magnetita, capaces de atraer hierro. No obstante, con el avance de la ciencia y la tecnología, se demostró que el magnetismo podía generarse también por la circulación de corrientes eléctricas. Este hecho marca la base de la ingeniería eléctrica moderna, en la cual los dispositivos y máquinas eléctricas hacen un uso intensivo de los principios magnéticos para funcionar eficientemente.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Cabe destacar que el magnetismo y la electricidad están intrínsecamente conectados, como lo demostraron los estudios de Hans Christian Ørsted y Michael Faraday. Tal integración da origen al campo de la electrodinámica, pilar de ingeniería eléctrica y electromecánica.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="2. Origen y Naturaleza del Magnetismo" icon={Target}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            De acuerdo con Fraile Mora (2008), el magnetismo tiene su origen en el comportamiento de partículas subatómicas, principalmente electrones, que generan campos magnéticos como consecuencia de su movimiento, tanto orbital como de espín. Es decir, cada electrón, al desplazarse alrededor del núcleo y poseer espín propio, actúa como un diminuto dipolo magnético.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El resultado macroscópico del magnetismo en un material depende de cómo se alinean estos dipolos magnéticos internos. En algunos materiales, los dipolos se alinean de tal forma que se refuerza el campo magnético resultante, mientras que en otros, la orientación aleatoria de los dipolos cancela el efecto global.
          </p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Los polos magnéticos</h3>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Todo imán o elemento con propiedades magnéticas exhibe dos regiones diferenciadas denominadas polos magnéticos: polo norte y polo sur. Se denomina así basándose en el comportamiento de aguja imantada en presencia del campo magnético terrestre, donde un extremo apunta al norte geográfico y el otro al sur. El principio fundamental aquí es que polos iguales se repelen y polos opuestos se atraen, comportándose de manera análoga a las cargas eléctricas.
          </p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Campo Magnético</h3>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Un campo magnético es una región del espacio en la que una fuerza magnética es detectable, ya sea por la presencia de otro imán, una corriente eléctrica, o una partícula cargada en movimiento. Es común utilizar líneas de campo para representar la dirección y la intensidad de ese campo. Como describe Kosow (1980), el sentido de las líneas de campo se define como el que va desde el polo norte hasta el polo sur del imán en el espacio circundante.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La intensidad del campo magnético se representa mediante la letra H, donde la unidad en el Sistema Internacional es el amperio por metro (A/m), mientras que la densidad de flujo magnético, simbolizada por la letra B, se mide en teslas (T) o en gauss (Gs) en el sistema CGS.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="3. Materiales Magnéticos" icon={Magnet}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            No todos los materiales presentan la misma respuesta en presencia de un campo magnético. En función de su comportamiento, se pueden clasificar en ferromagnéticos, paramagnéticos y diamagéticos.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 leading-relaxed text-lg text-justify">
            <li><strong>Ferromagnéticos:</strong> Son los materiales que presentan una fuerte atracción hacia los imanes. En ellos, los dipolos magnéticos se alinean fácilmente en la dirección del campo, lo que da lugar a una elevada permeabilidad magnética. Ejemplos: hierro, cobalto, níquel y sus aleaciones. (Fraile Mora, 2008)</li>
            <li><strong>Paramagnéticos:</strong> Muestran una débil atracción hacia los campos magnéticos, ya que la alineación de los dipolos es parcial y reversible. Ejemplos: aluminio, platino.</li>
            <li><strong>Diamagnéticos:</strong> Son materiales que se oponen débilmente al campo magnético aplicado, generando un campo en sentido opuesto. Ejemplos: cobre, bismuto, plata.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Propiedades de los materiales ferromagnéticos</h3>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La principal característica de los materiales ferromagnéticos es su alta permeabilidad magnética, lo cual implica que pueden concentrar las líneas de flujo magnético en su interior mucho mejor que el vacío o el aire. Además presentan fenómenos como la magnetización espontanea y la existencia de dominios magnéticos, que son regiones dentro del material donde todos los dipolos magnéticos individuales están alineados.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Cuando un material ferromagnético es sometido a un campo magnético externo, los dominios tienden a alinearse en la dirección de dicho campo, aumentando la magnetización total del material. Si este proceso es suficientemente intenso, los dominios adoptan una orientación preferente incluso después de retirar el campo externo, generando lo que se conoce como imanes permanentes.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Otra propiedad importante es la curva de histéresis, que describe cómo la magnetización varía en función del campo magnético aplicado y retirado. La histéresis magnética tiene gran relevancia en el diseño de núcleos para transformadores y máquinas eléctricas, afectando la eficiencia y las pérdidas magnéticas del sistema (Kosow, 1980).
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="4. Magnetismo y Corriente Eléctrica" icon={Zap}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La conexión entre electricidad y magnetismo fue descubierta experimentalmente en 1820 por Hans Christian Ørsted, quien observó que una corriente eléctrica produce un campo magnético a su alrededor. Esto fue posteriormente estudiado y cuantificado a través de la ley de Biot-Savart y la ley de Ampère, que describen cómo los campos magnéticos pueden ser generados por corrientes eléctricas.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El fenómeno inverso, la inducción electromagnética —descubierta por Faraday—, establece que un campo magnético variable induce una fuerza electromotriz (fem) y, por tanto, una corriente en un circuito cerrado. Este principio es clave para la comprensión del funcionamiento de generadores y transformadores eléctricos.
          </p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Ley de Biot-Savart</h3>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Según Kosow (1980), la ley de Biot-Savart establece que el campo magnético generado en un punto del espacio por un elemento de corriente es directamente proporcional a la magnitud de la corriente, a la longitud del elemento y al seno del ángulo entre el elemento de corriente y la línea que une el elemento con el punto de observación, e inversamente proporcional al cuadrado de la distancia entre ambos. Matemáticamente, para un elemento de corriente infinitesimal Idl:
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg my-4 text-center">
            <code className="text-primary-300 text-lg">dB = (μ₀/4π) * (I dl × r̂) / r²</code>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg text-justify mb-4">
            Esta ley permite calcular el campo magnético en configuraciones más complejas que la de un simple conductor rectilíneo, incluyendo bobinas y solenoides.
          </p>
          <div className="w-full flex justify-center my-8">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/NDSm7zTPGM0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="rounded-xl shadow-lg border border-slate-700 max-w-full"
            ></iframe>
          </div>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Ley de Ampère</h3>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La ley de Ampère es una formulación integral que relaciona el campo magnético a lo largo de una trayectoria cerrada con la corriente total que atraviesa el área rodeada por esa trayectoria. En su forma más general, se expresa como:
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg my-4 text-center">
            <code className="text-primary-300 text-lg">∮ B · dl = μ₀ I_enc</code>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Esta ley es fundamental para el cálculo de campos magnéticos en máquinas eléctricas, ya que permite diseñar y analizar dispositivos tales como motores y generadores.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="5. Campo Magnético Terrestre" icon={Globe}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El planeta Tierra funciona como un gigantesco imán, generando su propio campo magnético que protege a la biosfera de las radiaciones solares. Este campo, aunque complejo y variable, sirve de referencia para la orientación y navegación desde la antigüedad, y también afecta a los dispositivos de precisión en la ingeniería eléctrica.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El campo magnético terrestre tiene aproximadamente una intensidad de 0,5 gauss en la superficie, y su sentido actual es desde el polo sur magnético hacia el polo norte magnético. Sin embargo, a lo largo de la historia geológica, las inversiones de polaridad han sido recurrentes, lo cual tiene implicaciones en la magnetización remanente de rocas y materiales.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="6. Aplicaciones en Máquinas Eléctricas" icon={Settings}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La comprensión profunda del magnetismo es esencial para la instalación, mantenimiento y reparación de máquinas eléctricas. Kosow (1980) y Fraile Mora (2008) explican que la mayor parte de los motores, generadores y transformadores funcionan gracias al efecto de los campos magnéticos generados en núcleos y bobinados de materiales ferromagnéticos.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify mb-2">Las principales aplicaciones del magnetismo en la ingeniería incluyen:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 leading-relaxed text-lg text-justify">
            <li><strong>Transformadores:</strong> Dispositivos que operan por inducción electromagnética, transfiriendo energía eléctrica de un circuito a otro mediante un campo magnético variable en un núcleo ferromagnético.</li>
            <li><strong>Motores Eléctricos:</strong> Máquinas donde la interacción entre campos magnéticos producidos por corrientes en bobinas y campos permanentes genera un par de fuerzas que provoca el giro del eje del motor.</li>
            <li><strong>Generadores:</strong> Producen electricidad a partir del movimiento mecánico, induciendo una corriente mediante el movimiento relativo de bobinas y campos magnéticos.</li>
            <li><strong>Electroimanes:</strong> Bobinas de hilo conductor que al circular corriente eléctrica generan un campo magnético intenso, utilizado para el levantamiento de metales o para accionar dispositivos electromecánicos.</li>
          </ul>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="7. Unidades y Magnitudes Magnéticas" icon={Target}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify mb-2">
            La medición de magnitudes magnéticas requiere de unidades específicas, definidas en el Sistema Internacional:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 leading-relaxed text-lg text-justify">
            <li><strong>Campo magnético (H):</strong> La intensidad del campo magnético, medida en amperios por metro (A/m).</li>
            <li><strong>Densidad de flujo magnético (B):</strong> La cantidad de líneas de campo por unidad de área, medida en teslas (T).</li>
            <li><strong>Permeabilidad magnética (μ):</strong> Representa la facilidad con que un material puede ser magnetizado; se mide en henrios por metro (H/m).</li>
            <li><strong>Reluctancia:</strong> Resistencia que ofrece un material al paso del flujo magnético; es la analogía magnética de la resistencia eléctrica.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 Relación entre B y H</h3>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La relación fundamental entre la densidad de flujo magnético B y la intensidad de campo magnético H se expresa como:
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg my-4 text-center">
            <code className="text-primary-300 text-lg">B = μ * H</code>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            donde μ es la permeabilidad magnética del material. Para materiales no magnéticos, μ iguala la del vacío (μ₀), mientras que en materiales ferromagnéticos puede ser cientos o miles de veces superior.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="8. Fenómenos de Inducción Electromagnética" icon={Zap}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El fenómeno de inducción electromagnética, base del funcionamiento de máquinas eléctricas, fue sistematizado por Michael Faraday. De acuerdo con la ley de Faraday, una variación temporal del flujo magnético a través de un circuito induce en él una fuerza electromotriz proporcional a la rapidez de cambio del flujo. Matemáticamente se expresa:
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg my-4 text-center">
            <code className="text-primary-300 text-lg">ε = -dΦ/dt</code>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Donde ε es la fuerza electromotriz inducida y Φ es el flujo magnético igual a la integral de B sobre el área considerada.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Este principio tiene aplicaciones cruciales en generadores y transformadores, y también en sistemas de protección y medición eléctricos.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="9. Dominios Magnéticos y Magnetización" icon={Magnet}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            A nivel microscópico, los materiales ferromagnéticos están constituidos por regiones denominadas dominios, en donde los momentos magnéticos de los átomos se encuentran alineados. La orientación de estos dominios define el estado de magnetización del material.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Bajo la acción de un campo magnético externo, los dominios pueden rotar y alinearse progresivamente en la dirección del campo, fenómeno que da lugar a la magnetización creciente observada en los materiales ferromagnéticos. Cuando el campo es removido, los dominios pueden permanecer parcial o totalmente alineados, explicando la existencia de remanencia o memoria magnética en el material.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="10. Fuerza de Lorentz" icon={Activity}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La fuerza de Lorentz es el principio que explica el comportamiento de partículas cargadas en presencia de un campo magnético. Si una carga q se mueve con velocidad v en una región donde existe un campo magnético B, experimentará una fuerza dada por:
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg my-4 text-center">
            <code className="text-primary-300 text-lg">F = q (v × B)</code>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Esta fuerza es fundamental para entender el funcionamiento de máquinas eléctricas, ya que constituye la base física de la interacción entre corriente y campo magnético en motores y generadores. Además, explica el comportamiento de partículas en dispositivos como tubos de rayos catódicos y aceleradores de partículas.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="11. Ley de Ohm Magnética" icon={Target}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            De manera análoga a la ley de Ohm en circuitos eléctricos, se define una ley de Ohm magnética para los circuitos magnéticos. Kosow (1980) y Fraile Mora (2008) describen que la fuerza magnetomotriz (FMM) produce un flujo magnético (Φ) a través de una reluctancia (ℛ), similar a como una tensión origina una corriente a través de una resistencia eléctrica:
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg my-4 text-center">
            <code className="text-primary-300 text-lg">FMM = Φ ℛ</code>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 leading-relaxed text-lg text-justify">
            <li><strong>FMM (Fuerza Magnetomotriz):</strong> Equivalente a la tensión eléctrica, en amperios-espira.</li>
            <li><strong>Flujo Magnético (Φ):</strong> Equivalente a la corriente, en webers.</li>
            <li><strong>Reluctancia (ℛ):</strong> Equivalente a la resistencia eléctrica, en ampere-vuelta/weber.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Esta ley es aplicada extensamente en el diseño de núcleos magnéticos para transformadores y máquinas eléctricas, estimando la cantidad de vueltas necesarias en una bobina o el material adecuado para obtener el flujo magnético requerido.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="12. Análisis de Circuitos Magnéticos" icon={Target}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El análisis de circuitos magnéticos es esencial para comprender cómo se distribuye el flujo magnético en una máquina eléctrica. Se emplea la analogía con los circuitos eléctricos para determinar caídas de fuerza magnetomotriz, división del flujo, y pérdidas en núcleos con entrehierros o diferentes materiales.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 leading-relaxed text-lg text-justify">
            <li><strong>Circuito Magnético Simple:</strong> Un solo núcleo ferromagnético atravesado por un flujo magnético uniforme. Su cálculo es directo aplicando la ley de Ohm magnética.</li>
            <li><strong>Circuitos Magnéticos Compuestos:</strong> Incluyen entrehierros, ramas paralelas o núcleos de materiales diferentes. Se requiere aplicar reglas de suma y división análogas a las de circuitos eléctricos.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Las pérdidas por histéresis y corrientes de Foucault en los núcleos magnéticos también deben considerarse en el diseño y mantenimiento, ya que afectan la eficiencia energética global del sistema.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="13. Seguridad en Trabajos" icon={ShieldAlert}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Al realizar tareas de instalación, mantenimiento y reparación en máquinas eléctricas, es fundamental cumplir con normas de seguridad relativas a la manipulación de campos magnéticos intensos. Entre los riesgos asociados se incluyen lesiones por fuerzas imprevistas, interferencia con marcapasos, daños a dispositivos electrónicos y efectos nocivos por exposición prolongada al campo.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 leading-relaxed text-lg text-justify">
            <li>No acercar dispositivos electrónicos ni instrumentos sensibles a campos magnéticos fuertes.</li>
            <li>Usar continuamente equipos de protección personal fabricados con materiales no magnéticos.</li>
            <li>Desenergizar las máquinas antes de intervenir en partes con bobinados o núcleos magnéticos.</li>
            <li>Mantenerse informado sobre normativas internacionales y locales relacionadas con la exposición a campos magnéticos, tal como lo recomienda la normativa IEEE y de seguridad eléctrica global.</li>
          </ul>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="14. Magnetismo y Actualidad Tecnológica" icon={Cpu}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El impacto del magnetismo en la tecnología global es inmenso y en constante evolución. Además de las aplicaciones tradicionales en generación y utilización de energía eléctrica, el desarrollo de nuevos materiales magnéticos, como los imanes de neodimio y las aleaciones especiales, ha permitido crear motores más eficientes, discos duros y memorias magnéticas, sistemas de levitación magnética y dispositivos médicos avanzados, como la resonancia magnética nuclear (RMN).
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La investigación sigue avanzando hacia la miniaturización y mejora de componentes magnéticos, el desarrollo de motores sin escobillas, generadores de alta eficiencia y la integración de sistemas inteligentes de monitoreo y control magnético.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="15. Conclusiones y Bibliografía" icon={BookOpen}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El estudio del magnetismo es fundamental para entender el funcionamiento, mantenimiento y reparación de máquinas eléctricas en contextos industriales globales. A lo largo de este texto se han explorado los fundamentos teóricos y prácticos del magnetismo, destacando su relación indispensable con la electricidad y su papel protagónico en el desarrollo industrial y tecnológico.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El dominio de los conceptos aquí abordados proporciona una base sólida no solo para la operación eficiente de maquinaria, sino también para la innovación y adaptación a los cambios tecnológicos futuros. Finalmente, se enfatiza la importancia del cumplimiento de normas de seguridad y el aprendizaje continuo a través de la consulta de bibliografía especializada como la de Moreno Alfonso, Kosow y Fraile Mora.
          </p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Bibliografía</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 leading-relaxed text-lg text-justify">
            <li>Moreno Alfonso, Narciso. Problemas resueltos de tecnología eléctrica. Madrid: Thomson, 2006.</li>
            <li>Kosow, Irving L. Máquinas eléctricas y transformadores. Barcelona: Reverté, D.L. 1980.</li>
            <li>Fraile Mora, Jesús. Máquinas eléctricas. Madrid: McGraw-Hill/Interamericana de España, 2008.</li>
          </ul>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default MagnetismoView;
