import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {  Check } from "lucide-react";
// import { Flame, Users, Gamepad2, Code, Rocket, Check } from "lucide-react";

// const highlights = [
//   {
//     icon: Flame,
//     title: "Driven by Passion",
//     description: "A team that genuinely loves creating games and pushing creative boundaries.",
//   },
//   {
//     icon: Users,
//     title: "Dedicated Team",
//     description: "Hard-working developers and artists fully committed to every project.",
//   },
//   {
//     icon: Gamepad2,
//     title: "Game-First Mindset",
//     description: "We design and build with players in mind — fun always comes first.",
//   },
//   {
//     icon: Code,
//     title: "Strong Technical Foundation",
//     description: "Clean code, optimized performance, and modern game development practices.",
//   },
//   {
//     icon: Rocket,
//     title: "Fast & Flexible",
//     description: "Agile workflow that adapts quickly to ideas, feedback, and change.",
//   },
// ];

    
const features = [
  "End-to-end game art and development guided by a clear creative vision",
  "Art and gameplay adapted to different genres and target audiences",
  "Production-ready assets optimized for performance and real-world deployment",
  "Proven experience delivering and polishing playable game content",
];

// Card data with images
const gameCards = [

  {
    id: 1,
    image: "/Assets/Images/env2.png",
    // title: "Second Image",
    // link: "/games/space",
  },
  {
    id: 2,
    image: "/Assets/Images/env3.png",
    // title: "third image",
    // link: "/games/fantasy",
  },
  {
    id: 3,
    image: "/Assets/Images/env4.png",
    // title: "Tantawy the Goat",
    // link: "/games/cyber",
  },
    {
    id: 4,
    image: "/Assets/Images/Char1.png",
    // title: "First Image",
    // link: "/games/adventure",
  },
];

const Overview = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handleCardClick = () => {
    window.location.href = "/Projects";
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center justify-end ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-primary font-medium">About ASTRYX</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Crafting Meaningful Games with{" "}
              <span className="gradient-text">Heart and Vision</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              Astryx is an indie game studio founded by passionate game artists and developers who believe games are a form of art.
              We focus on creating visually distinctive, emotionally engaging experiences, blending strong art direction, thoughtful gameplay, and immersive worlds.
              Whether it's experimental concepts or polished indie titles, our goal is simple: create games that leave an impact.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="text-primary" size={14} />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Playing Cards Stack */}
          <motion.div
            style={{
              y: typeof window !== 'undefined' && window.innerWidth >= 1024 ? y : 0,
              opacity
            }}
            className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0 mb-12 lg:mb-28"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md h-full">
              {gameCards.map((card, index) => {
                const isHovered = hoveredCard === card.id;
                const totalCards = gameCards.length;

                // Responsive calculations
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

                // Calculate rotation and position for stacked effect
                const baseRotation = -8 + (index * 4);
                const hoverRotation = isHovered ? 0 : baseRotation;
                const stackOffset = isMobile ? index * 5 : index * 8;

                // Fan out effect on hover (reduced on mobile)
                const fanSpreadDesktop = hoveredCard !== null ? index * 60 - 90 : 0;
                const fanSpreadMobile = hoveredCard !== null ? index * 40 - 60 : 0;
                const fanSpread = isMobile ? fanSpreadMobile : fanSpreadDesktop;
                const fanRotation = hoveredCard !== null ? (index - 1.5) * (isMobile ? 6 : 8) : 0;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}

                    onHoverStart={() => !isMobile && setHoveredCard(card.id)}
                    onHoverEnd={() => !isMobile && setHoveredCard(null)}
                    onTouchStart={() => setHoveredCard(card.id)}
                    onTouchEnd={() => setTimeout(() => setHoveredCard(null), 2000)}
                    onClick={() => handleCardClick()}

                    animate={{
                      rotate: hoveredCard !== null ? fanRotation : hoverRotation,
                      x: fanSpread,
                      y: hoveredCard !== null ? (isMobile ? -10 : -20) : stackOffset,
                      scale: isHovered ? (isMobile ? 1.05 : 1.1) : 1,
                      zIndex: isHovered ? 50 : totalCards - index,
                    }}

                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}

                    className="absolute top-[20%] sm:top-[25%] md:top-[30%] lg:top-[35%] left-[20%] sm:left-[25%] md:left-[28%] lg:left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"

                    style={{ transformOrigin: "center bottom" }}
                  >
                    <div className="relative w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl group">
                      {/* Card Image */}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Card Title */}
                      {/* <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                        <h3 className="text-white font-display font-bold text-lg sm:text-xl md:text-2xl">
                          {card.title}
                        </h3>
                      </div> */}

                      {/* Hover Effect Border */}
                      <motion.div
                        className="absolute inset-0 border-2 md:border-4 border-primary rounded-xl md:rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />

                      {/* Shine Effect on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%", y: "-100%" }}
                        animate={{ x: isHovered ? "100%" : "-100%", y: isHovered ? "100%" : "-100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative elements - Hidden on mobile for performance */}
            <div className="hidden md:block absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Right Content - Highlights */}
          {/* <motion.div style={{ y, opacity }} className="relative">
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
          {/* <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>  */}


        </div>
      </div>
    </section>
  );
};

export default Overview;