import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-95" />

      {/* Animated Circles */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl"
         style={{ willChange: 'transform, opacity' }}
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-background rounded-full blur-3xl"
         style={{ willChange: 'transform, opacity' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Build Your Next Game?
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
            Let&apos;s collaborate to create something extraordinary. Our team is
            ready to transform your vision into an immersive gaming experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Portfolio Button */}
            <Link
              to="/Projects"
              onClick={() => window.scrollTo(0, 0)}
              className="btn btn-lg btn-default bg-background text-foreground hover:bg-background/90 group"
            >
              View Our Portfolio
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>

            {/* Contact Button */}
            <a
              href="mailto:Astryxg@gmail.com"
              className="btn btn-lg btn-outline border-primary-foreground/30  hover:bg-primary-foreground/10"
            >
              <MessageCircle className="mr-2" size={20} />
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
