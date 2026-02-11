import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PersonStanding, Code, Palette, Gamepad2, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src={`${process.env.PUBLIC_URL}/Assets/Images/logo.png`}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div> */}

      {/* Animated Gradient Orbs */}


      {/* <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
      /> */}


      {/* Animated Gradient Orbs */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-2/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />


      {/* Triangle shape */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}   // entrance: fade + move up
        animate={{ opacity: 1, y: 0 }}   // final position
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} // entrance timing
        className="absolute top-1/2 right-20"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],           // looping scale
            opacity: [0.4, 0.8, 0.4],      // looping opacity
            rotate: [0, 120, 0],            // looping rotation
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block w-72 h-72 bg-purple-500/20 blur-3xl"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </motion.div> */}


      {/* Square/Diamond shape */}
      {/* <motion.div
  animate={{
    scale: [1.1, 1.3, 1.1],
    opacity: [0.8, 0.4, 0.8],
    rotate: [45, 90, 45],
  }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-60 right-1/2 w-64 h-64 bg-blue-500/20 blur-2xl"
/> */}

      {/* Hexagon shape */}
      {/* <motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [100, 12,100],
    rotate: [0, 60, 0],
  }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/2 left-20 w-80 h-80 bg-green-500/15 blur-3xl"

/> */}

      {/* Star shape */}
      {/* <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 0.8, x: 40 }}
        transition={{ duration: 2, ease: "easeOut" }}>
        <motion.div
          animate={{
            scale: [1.8, 1.5, 1.8],
            opacity: [0.8, 1.3, 0.8],
            rotate: [20, 180, 380],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="absolute  left-20 w-60 h-60 bg-pink-500/20 blur-2xl"
          style={{
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      </motion.div> */}


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Game Development Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
            >
              <span className="block">INNOVATION</span>
              <span className="block gradient-text">DRIVEN BY VISION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              Transforming ideas into digital realities. We craft immersive gaming experiences through cutting-edge 3D design, development, and creative artistry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/Projects"
                className="btn btn-lg gradient-bg group"
              >
                <span className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                </span>
              </Link>

              <Link
                to="/about"
                className="btn btn-lg btn-outline flex items-center gap-2 border-primary/30 hover:bg-primary/10"
              >
                <PersonStanding size={30} />
                Know About Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-8"
            >
              {[
                { value: "7+", label: "Projects Delivered" },
                { value: "1+", label: "Year Experience" },
                { value: "12+", label: "Team Members" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Game Development Animation - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg h-[500px]">
              {/* Central Game Controller */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-3xl bg-background/90 backdrop-blur flex items-center justify-center">
                    <Gamepad2 className="text-primary" size={64} />
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Icons */}
              {[
                { Icon: Code, delay: 0, color: "from-blue-500 to-cyan-500", label: "Code" },
                { Icon: Palette, delay: 0.6, color: "from-purple-500 to-pink-500", label: "Design" },
                { Icon: Sparkles, delay: 1.2, color: "from-amber-500 to-orange-500", label: "Effects" },
              ].map(({ Icon, delay, color, label }, index) => (
                <motion.div
                  key={index}
                  animate={{
                    rotate: [0, 360, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay,
                    repeatDelay: 1.5,
                  }}
                  className="absolute top-40 left-16 -z-10"
                  style={{
                    width: '400px',
                    height: '400px',
                    transformOrigin: "center",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay,
                    }}
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br ${color} p-1 shadow-lg`}
                  >
                    <div className="w-full h-full rounded-xl bg-background/90 backdrop-blur flex flex-col items-center justify-center gap-1">
                      <Icon className="text-foreground" size={32} />
                      <span className="text-xs font-medium">{label}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Connecting Lines */}
              {[0, 120, 240].map((angle, index) => (
                <motion.div
                  key={index}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: '2px',
                    height: '136px',
                    background: 'linear-gradient(to bottom, transparent, rgba(var(--primary), 0.5), transparent)',
                    transformOrigin: 'top center',
                    transform: `translate(-50%, 0) rotate(${angle}deg)`,
                  }}
                />
              ))}

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.sin(i) * 50, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent"
                  style={{
                    left: `${50 + Math.cos(i * 30) * 40}%`,
                    top: `${50 + Math.sin(i * 30) * 40}%`,
                  }}
                />
              ))}

              {/* Background Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
              />
                <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-[110vh] -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>)
}

export default Hero