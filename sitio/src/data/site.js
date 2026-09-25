export const empresa = {
  nombre: 'MX Consultores en Gestión Pública',
  nombreCorto: 'MX Consultores',
  tagline: 'Gestión Pública',
  correo: 'inverproyecto30@gmail.com',
  descripcion:
    'Consultoría especializada en capacitación, evaluación de proyectos, finanzas públicas y diagnóstico institucional para gobiernos estatales y municipales.',
};

// Antepone la ruta base del despliegue. En el dominio definitivo es '/', pero
// la vista previa en GitHub Pages vive bajo /<repositorio>/.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const ruta = (camino) => base + camino;

export const navegacion = [
  { texto: 'Inicio', href: ruta('/') },
  { texto: 'Servicios de consultoría', href: ruta('/servicios/') },
  { texto: 'Clientes', href: ruta('/clientes/') },
  { texto: 'Nosotros', href: ruta('/nosotros/') },
  { texto: 'Contacto', href: ruta('/contacto/') },
];

export const servicios = [
  {
    id: 'capacitacion-evaluacion',
    glifo: 'capacitacion',
    titulo: 'Capacitación en evaluación socioeconómica de proyectos',
    resumen:
      'Cursos y talleres para formular, identificar, cuantificar y valorar costos y beneficios de proyectos de inversión pública; construcción de indicadores, planeación estratégica y preparación de insumos para la toma de decisiones.',
  },
  {
    id: 'analisis-financiero',
    glifo: 'finanzas',
    titulo: 'Análisis financiero y finanzas públicas',
    resumen:
      'Evaluación de ingresos, egresos, sostenibilidad financiera, escenarios y alternativas de financiamiento; elaboración de modelos financieros y análisis de viabilidad de proyectos.',
  },
  {
    id: 'diagnostico',
    glifo: 'diagnostico',
    titulo: 'Diagnóstico de la administración pública',
    resumen:
      'Revisión de procesos, estructura organizacional, capacidades operativas y mecanismos de coordinación para identificar áreas de oportunidad en dependencias y organismos.',
  },
  {
    id: 'planes-mejora',
    glifo: 'mejora',
    titulo: 'Planes de mejora institucional',
    resumen:
      'Diseño de hojas de ruta con acciones prioritarias, responsables, indicadores de seguimiento y propuestas para mejorar procesos, desempeño y prestación de servicios.',
  },
  {
    id: 'impuesto-predial',
    glifo: 'predial',
    titulo: 'Análisis y fortalecimiento del impuesto predial',
    resumen:
      'Diagnóstico de recaudación, padrón y procesos de cobro; identificación de oportunidades de actualización, eficiencia administrativa y mejora de ingresos propios, conforme al marco jurídico aplicable.',
  },
  {
    id: 'asesoria',
    glifo: 'asesoria',
    titulo: 'Asesoría especializada para gobiernos',
    resumen:
      'Estudios y acompañamiento técnico en planeación, gestión de proyectos, indicadores de desempeño y otros retos de las haciendas públicas estatales y municipales.',
  },
];

export const principios = [
  {
    titulo: 'Rigor técnico',
    texto: 'Análisis sustentado en metodologías y evidencia.',
  },
  {
    titulo: 'Experiencia pública',
    texto: 'Conocimiento práctico de los procesos gubernamentales.',
  },
  {
    titulo: 'Soluciones aplicables',
    texto: 'Recomendaciones ajustadas a las necesidades de cada institución.',
  },
];
