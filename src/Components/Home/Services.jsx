import { motion } from "framer-motion";
import { Gamepad2, Box, Palette, Layout, Sparkles, Clapperboard } from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Game Development (Unity & Unreal)",
    description: "Full game development using Unity and Unreal Engine, from early prototypes to playable, production-ready builds.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Box,
    title: "Game Art & Asset Production (2D & 3D)",
    description: "Stylized and high-quality 2D and 3D game assets, including low-poly and high-poly models designed for real-time performance.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Palette,
    title: "Character Rigging & Animation",
    description: "Game-ready character rigging and animation focused on movement clarity, performance, and in-engine integration.",
    color: "from-primary to-accent",
  },
  {
    icon: Layout,
    title: "Optimization & Technical Performance",
    description: "Asset and scene optimization to ensure stable performance across target platforms and real production constraints.",
    color: "from-accent to-primary",
  },
  {
    icon: Sparkles,
    title: "End-to-End Game Production",
    description: "A complete development workflow covering concept, production, iteration, and final delivery.",
    color: "from-primary/80 to-accent/80",
  },
  {
    icon: Clapperboard,
    title: "VFX & Shader Integration",
    description: "Real-time visual effects and shader implementation designed to support gameplay, enhance visuals, and integrate seamlessly within game engines.",
    color: "from-accent/80 to-primary/80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


function Services() {
  return (
 <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium mb-4 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive game development and creative services to bring your vision to life with cutting-edge technology and artistic excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              {/* Card replacement */}
              <div className="h-full group border border-border/50 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
                <div className="p-6 md:p-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>



        
      </div>
    </section>
  )
}

export default Services