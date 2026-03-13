/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Brain, 
  Users, 
  MessageSquare, 
  Zap, 
  BookOpen, 
  Award, 
  Lock 
} from "lucide-react";

const DivisorRojo = () => <div className="divisor-rojo mx-auto" />;

const BotonAccion = ({ texto, href = "#oferta" }: { texto: string; href?: string }) => {
  const esExterno = href.startsWith("http");

  if (esExterno) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="boton-accion cursor-pointer"
      >
        {texto}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={() => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="boton-accion cursor-pointer"
    >
      {texto}
    </motion.button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      {/* SECCIÓN DE IMPACTO INICIAL (HERO) */}
      <header className="seccion-oscura py-20 px-6 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left">
            <h2 className="text-brand-red uppercase tracking-[0.3em] text-sm mb-6 font-semibold">
              Francisco González presenta
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              El Vendedor <span className="text-brand-red">Hipnótico</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-brand-gray-light leading-relaxed mb-8">
              Domina el arte de la seducción emocional para vender sin presionar
            </p>
            <div className="mt-12">
              <BotonAccion texto="Quiero empezar mi transformación" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              src="https://i.ibb.co/MxQ4C7TZ/el-vendedor-hipnotico-ebook.png"
              alt="Portada del libro El Vendedor Hipnótico"
              className="w-full max-w-[400px] shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </header>

      {/* SECCIÓN DEL GANCHO EMOCIONAL */}
      <section className="seccion-clara py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-serif leading-snug text-center mb-12">
              ¿Por qué algunos vendedores cierran operaciones sin esfuerzo, mientras otros persiguen clientes durante semanas sin resultado?
            </h3>
            <p className="text-xl text-center font-medium">
              La respuesta no está en lo que dicen. Está en <span className="texto-resaltado-rojo">cómo hacen sentir</span> a quienes los escuchan.
            </p>
            <DivisorRojo />
            <div className="prose prose-xl mx-auto text-brand-dark">
              <p>
                Imagina por un momento esta escena: entras a una reunión sin guiones ensayados, sin la incomodidad de sentir que estás "vendiendo". El cliente, en lugar de ponerse a la defensiva, se relaja. Habla con honestidad. Comparte sus miedos, sus frustraciones, sus anhelos más profundos.
              </p>
              <p>
                Y al final de la conversación, sin presión, sin descuentos, sin urgencias falsas, él mismo te pide empezar.
              </p>
              <blockquote className="border-l-4 border-brand-red pl-6 italic my-12 text-2xl font-serif">
                "No me vendiste nada", dice con una sonrisa. "Me ayudaste a ver con claridad lo que necesitaba".
              </blockquote>
              <p>
                Este libro te enseñará a crear esa experiencia. Una y otra vez. No se trata de una casualidad del destino ni de un carisma con el que se nace. Es una metodología refinada basada en la conexión humana más profunda.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="py-20 px-6 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-red rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-sm uppercase tracking-[0.5em] text-brand-red font-bold mb-8 text-center">La Filosofía Detrás del Libro</h2>
          <div className="space-y-12 text-center">
            <p className="text-2xl md:text-4xl font-serif leading-tight italic">
              "Vender no es convencer a alguien de que haga algo que no quiere. Vender es ayudar a alguien a descubrir que lo que tú tienes es lo que siempre ha necesitado."
            </p>
            <div className="h-px w-24 bg-brand-red mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-12 text-left">
              <div>
                <h4 className="text-xl font-bold mb-4">Integridad Radical</h4>
                <p className="text-brand-gray-light leading-relaxed">
                  El vendedor hipnótico opera desde la verdad. Si tu producto no ayuda al cliente, tu deber es no vendérselo. Esta honestidad crea una autoridad que ninguna técnica de cierre puede imitar.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Conexión Humana</h4>
                <p className="text-brand-gray-light leading-relaxed">
                  En un mundo automatizado, la humanidad es el mayor lujo. Ponemos la relación por encima de la transacción, sabiendo que una conexión profunda genera ventas recurrentes y referidos.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Maestría Técnica</h4>
                <p className="text-brand-gray-light leading-relaxed">
                  Entendemos la psicología y la lingüística como herramientas de precisión. Usamos la ciencia para eliminar el ruido en la comunicación y que el valor de nuestra propuesta brille con luz propia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DEL PROBLEMA */}
      <section className="seccion-gris py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Esto no es un libro de trucos. Es una revolución en tu forma de vender.</h2>
              <p className="text-lg mb-6">
                Si has llegado hasta aquí, es porque sabes que algo no funciona. Has probado los guiones de venta tradicionales, has seguido los consejos de los "expertos" que te dicen que seas más agresivo, que presiones más, que no aceptes un no por respuesta. Y sin embargo, los resultados no llegan, o llegan a costa de tu propia paz mental y de tu integridad.
              </p>
              <p className="text-lg mb-6">
                El problema es que el mundo ha cambiado, pero las técnicas de venta se quedaron estancadas en los años ochenta. El cliente de hoy tiene un radar ultrasónico para detectar la manipulación. Siente la presión antes de que abras la boca. Y su respuesta automática es el rechazo, el escepticismo y el silencio.
              </p>
              <p className="text-lg mb-6">
                ¿Te suena familiar? Presentas una propuesta impecable, el cliente asiente, parece interesado... y de repente, desaparece. No contesta los correos, no devuelve las llamadas. Te quedas con la sensación de que has perdido el tiempo y de que algo se te escapa. Lo que se te escapa es la conexión emocional profunda que solo el vendedor hipnótico sabe construir.
              </p>
              <p className="text-lg">
                Cierra esta página si buscas fórmulas mágicas. Pero quédate si estás dispuesto a entender que vender es el acto de servicio más noble cuando se hace desde la maestría y la honestidad. No queremos tu dinero si no estás dispuesto a comprometerte con la excelencia.
              </p>
            </div>
            <div className="bg-white p-10 shadow-2xl border-t-4 border-brand-red">
              <h4 className="text-2xl font-bold mb-6">¿Te sientes identificado con esto?</h4>
              <ul className="space-y-4">
                {[
                  "La frustración de ver cómo ventas seguras se desvanecen en el último momento sin explicación lógica.",
                  "El agotamiento emocional de tener que 'perseguir' a los clientes para obtener una respuesta.",
                  "La sensación de que estás mendigando atención en lugar de ofrecer una solución valiosa.",
                  "El miedo a ser percibido como el 'vendedor pesado' que nadie quiere recibir.",
                  "La impotencia de competir por precio porque no sabes cómo comunicar tu valor diferencial.",
                  "La ansiedad que genera no tener un proceso predecible y humano para generar confianza."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="text-brand-red shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LA VERDAD INCÓMODA */}
      <section className="seccion-clara py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">La verdad incómoda sobre las ventas</h2>
          <div className="space-y-8 text-left">
            <p>
              Llevamos años repitiendo un error. Creemos que vender es convencer. Que tener éxito significa hablar más, argumentar mejor, cerrar más rápido. Pero la realidad es otra, mucho más profunda y sutil.
            </p>
            <p className="text-2xl font-serif text-brand-red italic text-center py-8">
              "Las personas no compran lo que necesitan. Compran cómo se sienten al imaginar su vida después de tenerlo."
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-brand-gray-light">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-gray-medium mb-4">El Software</p>
                <p className="text-base">Un cliente no elige un programa porque tenga diez funciones más. Lo elige porque imagina que, con él, dejará de sentirse abrumado cada mañana.</p>
              </div>
              <div className="p-6 border border-brand-gray-light">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-gray-medium mb-4">La Consultoría</p>
                <p className="text-base">No contrata un servicio porque el informe sea brillante. Lo hace porque anhela recuperar la confianza que perdió frente a su equipo.</p>
              </div>
              <div className="p-6 border border-brand-gray-light">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-gray-medium mb-4">La Vivienda</p>
                <p className="text-base">No compra una casa por sus metros cuadrados. Compra la posibilidad de ver crecer a sus hijos en un lugar seguro.</p>
              </div>
            </div>
            <p className="pt-8">
              La lógica justifica la decisión. Pero la emoción la impulsa. Y si tu mensaje no toca esa emoción, por muy sólido que sea tu argumento, sonará vacío. El vendedor tradicional habla de características. El vendedor hipnótico habla de transformaciones.
            </p>
          </div>
        </div>
      </section>

      {/* DEFINICIÓN DEL VENDEDOR HIPNÓTICO */}
      <section className="seccion-oscura py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es un vendedor hipnótico?</h2>
            <p className="text-brand-gray-medium text-xl">(Y qué no es)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg">
                Antes de seguir, necesito despejar un malentendido. Un vendedor hipnótico no es un manipulador. No juega con las emociones ajenas para obtener ventaja. No explota miedos ni inseguridades. No usa frases secretas para controlar voluntades.
              </p>
              <p className="text-lg">
                Tampoco depende de trucos ni de un carisma innato. De hecho, muchos de los vendedores más efectivos son personas tranquilas, reflexivas, incluso introvertidas.
              </p>
            </div>
            <div className="bg-brand-dark p-8 border-l-4 border-brand-red">
              <h4 className="text-2xl font-bold mb-4 text-brand-red">Un conector humano</h4>
              <p className="text-lg italic">
                "Es alguien que ha aprendido a ir más allá de las palabras para tocar lo que realmente mueve a las personas: sus emociones, sus anhelos, sus miedos no dichos, la versión de sí mismos que sueñan alcanzar."
              </p>
            </div>
          </div>
          <div className="mt-16 prose prose-invert max-w-none">
            <p className="text-xl leading-relaxed">
              Su presencia —calmada, segura, auténtica— transmite un mensaje silencioso: <span className="text-brand-red font-bold">"Estás a salvo aquí"</span>. Su escucha no es pasiva; es una forma de liderazgo emocional que invita al cliente a profundizar, reflexionar y, finalmente, reconocer por sí mismo que la solución que ofrece no es una opción más... es la respuesta que estaba esperando.
            </p>
          </div>
        </div>
      </section>

      {/* LA CIENCIA */}
      <section className="seccion-clara py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La ciencia detrás de la venta hipnótica</h2>
            <p className="text-xl text-brand-gray-medium">Esto no es magia. Es comprensión profunda de la mente humana.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <Brain className="text-brand-red" size={40} />,
                title: "El cerebro emocional manda",
                desc: "Según el premio Nobel Daniel Kahneman, operamos con dos sistemas. Sentimos primero, pensamos después. La lógica justifica lo que la emoción ya decidió. En este libro, aprenderás a hablarle directamente al Sistema 1, el que toma las decisiones reales."
              },
              {
                icon: <Zap className="text-brand-red" size={40} />,
                title: "Química de la confianza",
                desc: "Cuando un cliente se siente comprendido, libera oxitocina. Esta sustancia reduce la ansiedad y abre la mente a nuevas ideas y propuestas. Te enseñaré a generar este estado bioquímico de forma ética y natural en cada interacción."
              },
              {
                icon: <MessageSquare className="text-brand-red" size={40} />,
                title: "Poder de la narrativa",
                desc: "El cerebro recuerda historias veintidós veces más que los datos. No procesamos información; vivimos la experiencia sensorialmente. Dominarás la estructura narrativa que hace que tu mensaje sea inolvidable."
              },
              {
                icon: <Users className="text-brand-red" size={40} />,
                title: "Sincronía inconsciente",
                desc: "Cuando tu lenguaje corporal y tono están alineados, el cuerpo del cliente se relaja. La confianza florece sin esfuerzo consciente. Aprenderás a calibrar tu estado para ser un imán de seguridad y calma."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-brand-gray-light hover:bg-white hover:shadow-xl transition-all duration-300 border-b-2 border-transparent hover:border-brand-red">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm leading-relaxed text-brand-gray-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto space-y-12 text-lg text-brand-gray-dark leading-relaxed">
            <p>
              La venta hipnótica se apoya en tres pilares científicos: la neurobiología del apego, la psicología de la influencia y la lingüística transformacional. No se trata de "engañar" al cerebro, sino de trabajar a favor de su diseño evolutivo. El cerebro humano está programado para detectar amenazas; si actúas como el "vendedor típico", activas la amígdala del cliente y cierras su capacidad de escucha.
            </p>
            <p>
              Nuestra metodología te enseña a desactivar esa respuesta de "lucha o huida". Al usar un lenguaje hipnótico (basado en el modelo de Milton Erickson), logramos que las sugerencias de valor entren directamente en el subconsciente, donde no encuentran la resistencia de los prejuicios lógicos. Esto no significa que el cliente pierda su voluntad, sino que su voluntad se alinea con la solución que tú le ofreces porque la percibe como propia.
            </p>
            <p>
              Estudiaremos también el fenómeno de la "atención focalizada". En un mundo lleno de distracciones, el vendedor que logra capturar y mantener la atención absoluta del cliente tiene el 80 por ciento de la venta ganada. Aprenderás técnicas de interrupción de patrón para sacar al cliente de su inercia mental y llevarlo a un estado de curiosidad profunda, que es el estado ideal para el aprendizaje y la compra.
            </p>
          </div>
        </div>
      </section>

      {/* EL CONTENIDO DEL LIBRO (18 CAPÍTULOS) */}
      <section className="seccion-clara py-20 px-6 border-t border-brand-gray-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Lo que aprenderás en este viaje de transformación</h2>
          
          <div className="space-y-24">
            {/* PARTE I */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.4em] text-brand-red font-bold mb-12 text-center">Parte I: Los cimientos del vendedor hipnótico</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 1: La esencia del vendedor hipnótico</h4>
                    <p className="text-brand-gray-medium">
                      En este capítulo fundamental, desglosamos la filosofía que separa al vendedor transaccional del vendedor transformacional. Descubrirás por qué la palabra "hipnosis" en este contexto no se refiere a un estado de trance forzado, sino a un estado de atención focalizada y confianza absoluta. Analizaremos la diferencia ética entre influir (ayudar a alguien a tomar una decisión que le beneficia) y manipular (forzar a alguien a hacer algo que no quiere). Estableceremos los tres pilares: Presencia (tu estado interno), Percepción (tu capacidad de leer al otro) e Influencia Consciente (tu capacidad de guiar la conversación hacia un resultado positivo para ambas partes).
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 2: La arquitectura de la conexión emocional</h4>
                    <p className="text-brand-gray-medium">
                      Aquí exploramos la neurociencia de la decisión. Aprenderás por qué el 90 por ciento de las compras nacen en el sistema límbico antes de que la corteza prefrontal pueda siquiera procesar los datos técnicos. Te enseñaré a identificar los cuatro niveles de conexión: desde el nivel superficial de cortesía hasta el nivel de resonancia profunda donde el cliente siente que "le lees la mente". Descubrirás cómo construir esta conexión de forma auténtica, sin usar guiones robóticos, basándote en la vulnerabilidad estratégica y la honestidad radical que desarma cualquier barrera defensiva.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 3: Maestría en empatía activa y escucha profunda</h4>
                    <p className="text-brand-gray-medium">
                      La mayoría de los vendedores escuchan para responder; el vendedor hipnótico escucha para comprender. En este capítulo, dominarás los tres niveles de escucha: auditiva, emocional e intuitiva. Te proporcionaré técnicas concretas para validar las emociones del cliente sin necesariamente estar de acuerdo con sus objeciones. Aprenderás el uso táctico del silencio: cómo una pausa de tres segundos en el momento adecuado puede revelar más información que una hora de preguntas. Descubrirás cómo detectar las necesidades no dichas, esos miedos y anhelos que el cliente no se atreve a expresar pero que son los verdaderos motores de su decisión.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 4: El radar del lenguaje corporal</h4>
                    <p className="text-brand-gray-medium">
                      Tu cuerpo habla mucho antes que tus palabras. Aprenderás a leer las microexpresiones y las señales de tensión o relajación en el cliente. Pero más importante aún, aprenderás a gestionar tu propia corporalidad para proyectar una calma contagiosa. Veremos la técnica de la "sincronización sutil" (mirroring) no como un truco de imitación, sino como una forma de respeto biológico que le dice al cerebro del cliente: "somos iguales, puedes confiar en mí". Aprenderás a detectar las señales de cierre no verbales: cambios en la postura, dilatación de pupilas o inclinación de la cabeza que te indican que la venta ya ha ocurrido en su mente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PARTE II */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.4em] text-brand-red font-bold mb-12 text-center">Parte II: Técnicas de influencia consciente</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 5: Hipnosis conversacional en ventas</h4>
                    <p className="text-brand-gray-medium">
                      Inspirado en el legendario Milton Erickson, este capítulo te enseña a usar el lenguaje de forma que el cliente no sienta resistencia. Aprenderás patrones como el "uso de presuposiciones", "órdenes embebidas" y el "doble vínculo" para guiar la atención del cliente hacia soluciones positivas. Descubrirás cómo el ritmo de tu voz y el uso estratégico de las pausas pueden inducir un estado de receptividad donde las objeciones lógicas pierden su fuerza frente a la visión emocional de la solución.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 6: Programación Neurolingüística (PNL) aplicada</h4>
                    <p className="text-brand-gray-medium">
                      La PNL no es teoría, es una caja de herramientas para la comunicación de alto rendimiento. Aprenderás a identificar si tu cliente procesa la información de forma Visual, Auditiva o Kinestésica (VAK) y a adaptar tu vocabulario para que tus palabras "resuenen" literalmente en su cerebro. Dominarás el arte del reencuadre: cómo tomar una objeción negativa y presentarla desde una perspectiva que la convierta en una ventaja competitiva o en una razón más para comprar.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 7: El arte de las preguntas hipnóticas</h4>
                    <p className="text-brand-gray-medium">
                      Quien hace las preguntas, lidera la conversación. Aprenderás a formular preguntas que no solo obtienen información, sino que provocan una reflexión profunda en el cliente. Te enseñaré a usar preguntas de "futuro deseado" que obligan al cerebro del cliente a visualizar el éxito antes de haber pagado por él. Descubrirás cómo usar preguntas de "dolor" para que el cliente reconozca el coste real de su inacción, creando una urgencia interna que ninguna táctica de presión externa podría igualar.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 8: Narrativa seductora y el poder del mito</h4>
                    <p className="text-brand-gray-medium">
                      Las historias son el caballo de Troya de la persuasión. Aprenderás a construir relatos breves pero potentes que transporten al cliente a un escenario donde su problema ya ha sido resuelto. Veremos la estructura del "Viaje del Héroe" aplicada a un caso de éxito, donde el cliente es el protagonista y tú eres el mentor que le entrega la herramienta mágica. Aprenderás a usar metáforas para explicar conceptos complejos y a crear anclas emocionales que perduren mucho después de que la reunión haya terminado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PARTE III */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.4em] text-brand-red font-bold mb-12 text-center">Parte III: El proceso de venta hipnótico</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 9: La primera impresión y el anclaje de autoridad</h4>
                    <p className="text-brand-gray-medium">
                      Solo tienes una oportunidad para causar una primera impresión. Aprenderás a gestionar tu estado interno antes de entrar a la reunión para proyectar una mezcla irresistible de autoridad y accesibilidad. Te enseñaré frases de apertura que rompen el patrón defensivo del cliente y establecen un marco de colaboración desde el segundo uno. Descubrirás cómo el entorno, tu vestimenta y tu puntualidad emocional preparan el terreno para que el cliente acepte tus sugerencias sin cuestionarlas.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 10: Extracción de necesidades y deseos ocultos</h4>
                    <p className="text-brand-gray-medium">
                      Lo que el cliente dice que quiere rara vez es lo que realmente necesita. En este capítulo, aprenderás técnicas de indagación profunda para llegar a la raíz del problema. Usaremos el modelo de las "cuatro capas de la necesidad" para pasar de lo técnico a lo emocional. Aprenderás a hacer que el cliente admita ante sí mismo (y ante ti) el dolor que le causa su situación actual, lo cual es el requisito indispensable para que valore tu solución en su justa medida.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 11: La presentación irresistible (Modelo R.E.S.U.E.N.A.)</h4>
                    <p className="text-brand-gray-medium">
                      Basta de presentaciones aburridas llenas de diapositivas con datos. Te enseñaré el modelo R.E.S.U.E.N.A. (Relevancia, Emoción, Simplicidad, Utilidad, Evidencia, Narrativa y Acción). Aprenderás a estructurar tu propuesta de forma que cada palabra construya sobre la anterior, creando una inercia de aceptación en el cliente. Descubrirás cómo personalizar tu oferta en tiempo real basándote en las señales que has captado en la fase de descubrimiento.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 12: La alquimia de las objeciones</h4>
                    <p className="text-brand-gray-medium">
                      Las objeciones no son el final de la venta, son el comienzo de la verdadera conexión. Aprenderás el método V.E.R. (Validar, Explorar, Reenfocar). En lugar de combatir la objeción, la abrazaremos. Te enseñaré a usar la técnica de la "objeción preventiva": cómo mencionar tú mismo el punto débil de tu oferta antes de que el cliente lo haga, ganando una credibilidad instantánea y eliminando el veneno de la duda antes de que se propague.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 13: El cierre natural y la asunción hipnótica</h4>
                    <p className="text-brand-gray-medium">
                      Si has hecho bien el trabajo previo, el cierre no es un evento traumático, sino una consecuencia lógica. Aprenderás el principio de la "asunción": actuar y hablar como si el cliente ya hubiera decidido comprar. Te enseñaré cierres de "doble alternativa" y cierres de "mínimo compromiso" que reducen la fricción al mínimo. Descubrirás cómo manejar el silencio final después de pedir la orden, permitiendo que el cliente procese su propia decisión sin interferencias externas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PARTE IV */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.4em] text-brand-red font-bold mb-12 text-center">Parte IV: Más allá de la venta</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 14: Fidelización y el efecto post-hipnótico</h4>
                    <p className="text-brand-gray-medium">
                      La venta es solo el comienzo de una relación de valor. Aprenderás a gestionar el "remordimiento del comprador" mediante técnicas de refuerzo positivo inmediatas. Te enseñaré a convertir a un cliente satisfecho en un evangelista de tu marca que te traiga referidos de forma espontánea. Veremos cómo mantener la conexión emocional a largo plazo mediante una comunicación que aporte valor constante, no solo cuando quieres vender algo nuevo.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 15: Marca personal imán y autoridad digital</h4>
                    <p className="text-brand-gray-medium">
                      En el mundo actual, tu cliente te investigará antes de conocerte. Aprenderás a proyectar tu esencia de vendedor hipnótico en tus perfiles digitales. Te enseñaré a crear contenido que posicione tu autoridad y atraiga a tu cliente ideal, eliminando la necesidad de "puerta fría". Descubrirás cómo alinear tu mensaje en redes sociales con tu estilo de venta presencial para crear una experiencia de marca coherente y poderosa.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 16: Conexión profunda en la era digital</h4>
                    <p className="text-brand-gray-medium">
                      ¿Cómo ser hipnótico a través de una pantalla de Zoom o un mensaje de WhatsApp? Aprenderás las sutilezas de la comunicación digital: el uso de la cámara, la iluminación emocional y la redacción persuasiva en mensajería instantánea. Te enseñaré a evitar los errores comunes que rompen la confianza en entornos remotos y a usar la tecnología para amplificar tu humanidad, no para esconderla.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 17: Casos de estudio y análisis de campo</h4>
                    <p className="text-brand-gray-medium">
                      Analizaremos situaciones reales donde estos principios salvaron operaciones imposibles. Desde la consultora que duplicó sus honorarios mediante la escucha profunda, hasta el equipo de ventas corporativas que venció a un competidor gigante usando la narrativa emocional. Estos ejemplos te darán la confianza necesaria para aplicar las técnicas en tu propio contexto, viendo los resultados tangibles que otros ya han alcanzado.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Capítulo 18: Tu plan de maestría de treinta días</h4>
                    <p className="text-brand-gray-medium">
                      No quiero que leas este libro y lo olvides. Te entrego un plan de entrenamiento progresivo. Cada día tendrás una pequeña misión: desde practicar una pausa consciente hasta reformular una pregunta. Aprenderás a medir tu progreso no solo en dinero, sino en la calidad de tus relaciones y en tu propia paz mental durante el proceso de venta. Este es el camino hacia la maestría inconsciente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA DETALLADA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center">La metodología del Bucle Hipnótico</h2>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">1. El Rompe-Patrones Inicial</h3>
                <p className="text-brand-gray-medium leading-relaxed">
                  La mayoría de los clientes tienen un "escudo de ventas" activado desde el primer segundo. El Bucle Hipnótico comienza con una interrupción de patrón: algo inesperado, una pregunta inusual o un gesto de honestidad brutal que desactiva el mecanismo de defensa automático. Aprenderás a usar el factor sorpresa para que el cliente pase de la sospecha a la curiosidad en menos de diez segundos.
                </p>
              </div>
              <div className="bg-brand-gray-light p-8 rounded-sm italic border-l-4 border-brand-red">
                "Si haces lo que todos hacen, obtendrás la respuesta que todos obtienen: el rechazo automático."
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-brand-gray-light p-8 rounded-sm italic border-r-4 border-brand-red text-right">
                "La confianza no se pide, se construye en el espacio entre lo que dices y lo que el cliente siente."
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-6">2. La Siembra de Sugerencias</h3>
                <p className="text-brand-gray-medium leading-relaxed">
                  Una vez que el escudo ha bajado, empezamos a sembrar sugerencias de valor. No son promesas vacías, sino escenarios de éxito que el cliente empieza a visualizar como propios. Usamos el lenguaje de la asunción: no preguntamos si el problema es grave, hablamos de cómo se sentirá cuando ese problema ya no esté. Esta fase prepara el terreno para que la oferta final no sea algo externo, sino la pieza que falta en el rompecabezas del cliente.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">3. El Cierre por Resonancia</h3>
                <p className="text-brand-gray-medium leading-relaxed">
                  El cierre hipnótico no es un empujón, es un tirón. Hacemos que la solución sea tan atractiva y tan alineada con los valores del cliente que el "no" se sienta como una pérdida de oportunidad personal. Aprenderás a identificar el momento exacto de la "resonancia", ese instante en que el cliente ha dejado de evaluar el precio y ha empezado a evaluar el beneficio. Ahí es donde el vendedor hipnótico simplemente facilita el camino hacia el sí.
                </p>
              </div>
              <div className="bg-brand-gray-light p-8 rounded-sm italic border-l-4 border-brand-red">
                "El mejor cierre es aquel que el cliente siente que ha hecho él mismo."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="seccion-gris py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-12 shadow-xl border-t-4 border-brand-red">
              <h3 className="text-3xl font-bold mb-8">Este libro es para ti si...</h3>
              <ul className="space-y-6">
                {[
                  "Sientes que tienes un producto valioso, pero no logras que los clientes lo vean con claridad.",
                  "Te frustra recibir 'déjame pensarlo' y perder oportunidades casi cerradas.",
                  "Quieres dejar atrás las tácticas de presión y construir relaciones auténticas.",
                  "Sabes que tienes potencial, pero te falta esa 'chispa invisible' que transforma conversaciones.",
                  "Eres vendedor, emprendedor, consultor, agente inmobiliario o asesor financiero."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-dark text-white p-12 shadow-xl border-t-4 border-brand-gray-medium">
              <h3 className="text-3xl font-bold mb-8">Este libro NO es para ti si...</h3>
              <ul className="space-y-6">
                {[
                  "Buscas trucos rápidos para manipular y ganar a costa del cliente.",
                  "Crees que vender es un juego de suma cero donde uno gana y el otro pierde.",
                  "No estás dispuesto a profundizar en el arte humano de la conexión.",
                  "Esperas fórmulas mágicas que funcionen sin esfuerzo ni práctica.",
                  "Tu única métrica de éxito es el dinero, sin importar cómo lo consigas."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <XCircle className="text-brand-gray-medium shrink-0 mt-1" size={24} />
                    <span className="text-lg text-brand-gray-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA DEL AUTOR */}
      <section className="py-20 px-6 bg-brand-gray-light">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-12 md:p-20 shadow-2xl rounded-sm">
            <h2 className="text-3xl font-serif mb-8 italic">Una carta personal para ti</h2>
            <div className="space-y-6 text-brand-gray-dark leading-relaxed">
              <p>Querido colega,</p>
              <p>
                He pasado más de dos décadas en las trincheras de las ventas. He conocido el sabor amargo del rechazo sistemático y la frustración de saber que tenía un producto excelente pero no ser capaz de transmitir su valor. Durante años, pensé que vender era una batalla, un juego de suma cero donde alguien tenía que perder para que yo ganara.
              </p>
              <p>
                Estaba equivocado.
              </p>
              <p>
                Todo cambió cuando dejé de mirar las hojas de cálculo y empecé a mirar a las personas. Cuando dejé de estudiar técnicas de cierre agresivas y empecé a estudiar cómo funciona la mente humana. Descubrí que la gente no odia comprar; la gente odia que le vendan.
              </p>
              <p>
                "El Vendedor Hipnótico" es el resultado de ese viaje. No es un libro de teoría académica. Es un manual de campo nacido de miles de reuniones, de éxitos rotundos y de fracasos estrepitosos de los que aprendí más que de cualquier curso.
              </p>
              <p>
                Mi objetivo con esta obra es devolverte la alegría de vender. Quiero que te sientas orgulloso de tu profesión. Quiero que cada vez que cierres una venta, sientas que has hecho un favor al mundo porque has conectado una necesidad real con una solución real.
              </p>
              <p>
                Vender sin presionar no es una utopía; es una habilidad técnica que se puede aprender. Y estoy aquí para enseñártela paso a paso.
              </p>
              <p className="pt-8">Con respeto y gratitud,</p>
              <p className="font-serif text-2xl">Francisco González</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="seccion-clara py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-12">
            {[
              {
                q: "¿Necesito experiencia previa en ventas?",
                a: "No. El libro está diseñado tanto para principiantes como para profesionales con experiencia. Los fundamentos son accesibles para todos, y las técnicas avanzadas profundizan lo suficiente para quienes ya tienen un camino recorrido. Si estás empezando, evitarás vicios comunes; si eres veterano, descubrirás por qué algunas ventas se te escapaban sin saber por qué."
              },
              {
                q: "¿Funciona para cualquier tipo de producto o servicio?",
                a: "Sí. Los principios de conexión emocional, escucha activa y comunicación persuasiva son universales. Funcionan igual si vendes software, consultoría, bienes raíces, seguros, formación o productos físicos. Al final del día, no vendes un producto, vendes una transformación o una solución a un ser humano."
              },
              {
                q: "¿Es ético lo que enseña?",
                a: "Absolutamente. De hecho, el libro dedica un esfuerzo constante a diferenciar la influencia consciente de la manipulación. Todo lo que aprenderás puede hacerse con integridad, respeto y buscando el beneficio mutuo. La hipnosis conversacional es una herramienta de claridad, no de engaño."
              },
              {
                q: "¿El libro es digital o físico?",
                a: "Es un libro digital en formato PDF de alta calidad, lo que te permite acceder a él de forma inmediata tras la compra. Puedes leerlo en tu tableta, teléfono o computadora, y llevar estas lecciones contigo a cualquier reunión o viaje de negocios."
              },
              {
                q: "¿Qué incluye exactamente la compra?",
                a: "Recibirás el libro completo 'El Vendedor Hipnótico' con sus 18 capítulos detallados, el plan de entrenamiento de treinta días y acceso a futuras actualizaciones menores de la obra. Todo por un pago único de $9,99."
              },
              {
                q: "¿Hay garantía?",
                a: "Sí. Este libro tiene una garantía de reembolso de treinta días. Si por cualquier motivo no estás satisfecho, puedes solicitar la devolución de tu dinero. Sin preguntas. Sin complicaciones. Mi objetivo es que este libro sea la mejor inversión de tu carrera, no un gasto."
              }
            ].map((item, i) => (
              <div key={i} className="border-b border-brand-gray-light pb-8">
                <h4 className="text-xl font-bold mb-4">{item.q}</h4>
                <p className="text-brand-gray-medium">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE EL AUTOR */}
      <section className="seccion-oscura py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Sobre el autor</h2>
          <div className="space-y-8 text-left">
            <p className="text-xl leading-relaxed">
              Me llamo <span className="text-brand-red font-bold">Francisco González</span>, y no, no soy un gurú de la mercadotecnia con décadas de experiencia en agencias internacionales. Soy alguien como tú: curioso, apasionado y, sobre todo, aprendiz constante de la naturaleza humana.
            </p>
            <p className="text-lg text-brand-gray-light">
              Todo empezó por accidente. Un día me senté frente a una computadora sin saber mucho de ventas o persuasión. Solo con ganas de entender cómo funciona este mundo que mueve ideas, emociones y negocios. Desde entonces, no he parado. He leído cientos de libros, probado decenas de enfoques y aprendido de cientos de errores. He pasado noches en vela analizando grabaciones de mis propias ventas para entender qué palabra exacta cambió el rumbo de la conversación.
            </p>
            <p className="text-lg text-brand-gray-light">
              Este libro no es teoría sacada de manuales académicos. Es el resultado de años de práctica, de ensayo y error, de noches analizando qué funciona y qué no. Es la síntesis de lo que realmente funciona cuando se trata de conectar con personas y guiarlas hacia decisiones que les beneficien. He entrenado a equipos de ventas, he asesorado a emprendedores solitarios y he visto cómo estos principios transforman no solo sus ingresos, sino su confianza personal.
            </p>
            <p className="text-lg text-brand-gray-light">
              Mi enfoque es radicalmente humano. Creo que la tecnología debe estar al servicio de la conexión, no para sustituirla. Creo que la venta es el acto de servicio más noble que existe cuando se hace con la intención correcta. Y creo que tú tienes la capacidad de convertirte en un maestro de la influencia si estás dispuesto a mirar más allá de los números y empezar a mirar a las personas.
            </p>
            <p className="text-lg italic border-l-2 border-brand-red pl-6">
              "Este libro es mi forma de decirte: sí se puede. Sí puedes vender con calma, con autenticidad, con alma. Y yo te voy a mostrar cómo, paso a paso. No te prometo riqueza de la noche a la mañana, pero te prometo un camino de maestría que te servirá para toda la vida."
            </p>
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="seccion-clara py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-brand-gray-light p-12 border-2 border-dashed border-brand-red">
          <ShieldCheck className="text-brand-red mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Garantía incondicional de treinta días</h2>
          <p className="text-xl mb-8">
            Si después de leer este libro consideras que no cumple tus expectativas, o simplemente no es lo que buscabas, tienes treinta días para solicitar la devolución de tu dinero.
          </p>
          <p className="text-2xl font-bold text-brand-red uppercase tracking-widest">
            Sin letra pequeña. Sin preguntas.
          </p>
        </div>
      </section>

      {/* SECCIÓN DE OFERTA FINAL */}
      <section id="oferta" className="seccion-clara py-16 px-6 scroll-mt-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-brand-red p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-5xl font-bold mb-4">El Vendedor Hipnótico</h2>
            <p className="text-xl text-brand-gray-medium mb-8">Domina el arte de la seducción emocional para vender sin presionar</p>
            
            <div className="mb-8">
              <span className="text-brand-gray-medium line-through text-2xl mr-4">$47,00</span>
              <span className="text-6xl font-bold text-brand-red">$9,99</span>
              <p className="text-sm text-brand-gray-medium mt-2">Pago único. Acceso inmediato.</p>
            </div>

            <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <BookOpen className="text-brand-red" size={24} />
                <span>Más de trescientas páginas de contenido</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-brand-red" size={24} />
                <span>18 Capítulos de maestría práctica</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="text-brand-red" size={24} />
                <span>Compra 100% segura y protegida</span>
              </div>
            </div>

            <BotonAccion 
              texto="Quiero empezar mi transformación" 
              href="https://fcofrancis.pay.clickbank.net/?cbitems=10" 
            />
            
            <div className="mt-8 flex items-center justify-center gap-4 text-brand-gray-medium text-sm">
              <ShieldCheck size={16} />
              <span>Garantía de satisfacción de 30 días</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFIESTO FINAL */}
      <section className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.5em] text-brand-red font-bold mb-12">El Manifiesto del Vendedor Hipnótico</h2>
          <div className="space-y-12 text-2xl md:text-3xl font-serif italic leading-relaxed opacity-90">
            <p>
              "Creemos que la venta es un acto de amor. Porque si tienes la solución al dolor de alguien y no eres capaz de comunicárselo, le estás fallando."
            </p>
            <p>
              "Creemos que el silencio es más elocuente que mil palabras. Que la pausa es donde ocurre la decisión y que el respeto es la herramienta de persuasión más poderosa."
            </p>
            <p>
              "Creemos que el futuro pertenece a los que conectan. En un mundo de algoritmos, el vendedor que sabe tocar el alma humana es el único que no puede ser reemplazado."
            </p>
            <p>
              "Este libro no es el final de tu camino, es el comienzo de tu maestría. Bienvenido a la élite de los que venden sin presionar, de los que influyen con integridad y de los que transforman el mundo, una conversación a la vez."
            </p>
          </div>
          <div className="mt-20">
            <a href="#oferta" className="boton-accion inline-block px-12 py-6 text-xl">
              Únete a la Maestría Ahora
            </a>
          </div>
        </div>
      </section>

      {/* CIERRE EMOCIONAL */}
      <footer className="seccion-oscura py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif italic mb-8">Un último pensamiento antes de que decidas</h3>
          <p className="text-lg text-brand-gray-light mb-12">
            Llevo años observando a vendedores. He visto a los que luchan cada día, persiguiendo clientes, justificando precios, sintiendo que vender es una batalla agotadora. Y he visto a los que fluyen. A los que atraen clientes sin perseguirlos. La diferencia no está en el producto. Está en el enfoque.
          </p>
          <p className="text-2xl font-bold mb-12">Tú puedes elegir en qué grupo quieres estar.</p>
          <DivisorRojo />
          <p className="text-sm text-brand-gray-medium mt-12">
            © {new Date().getFullYear()} Francisco González. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
