import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Play, Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    type: "image",
    src: "/Assets/Images/LookRight.jpg",
    title: "Showreel",
    subtitle: "experiment insights",

    tag: "Exhibition",
  },
  {
    id: 2,
    type: "image",
    src: "/Assets/Video/FluffyCat.gif",
    title: "Game Jam 2026",
    subtitle: "Character Design Showcase",
    date: "April 2026",
    tag: "Animatex",
  },
  {
    id: 3,
    type: "image",
    src: "/Assets/Images/LookLeft.jpg",
    title: "Pixel Fest",
    subtitle: "Indie Game Awards Night",
    tag: "Awards",
  },
];

const MediaCard = ({ event, isCenter }) => {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: isCenter ? 0.1 : 0.2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative group cursor-pointer ${isCenter ? "lg:scale-105 z-10" : "z-0"
        }`}
    >
      {/* Glow ring on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.02 : 0.97 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 blur-md -z-10"
      />

      {/* Card */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-xl transition-transform duration-300 ${hovered ? "-translate-y-2" : "translate-y-0"
          } ${isCenter ? "h-[420px]" : "h-[340px]"}`}
      >
        {/* Media */}
        <div className="relative w-full h-full">
          {event.type === "video" ? (
            <>
              <video
                src={event.src}
                poster={event.poster}
                loop
                muted
                playsInline
                autoPlay={playing}
                className="w-full h-full object-cover"
                ref={(el) => {
                  if (el) playing ? el.play() : el.pause();
                }}
              />
              {/* Play button overlay */}
              {!playing && (
                <motion.button
                  onClick={() => setPlaying(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/40">
                    <Play className="text-white ml-1" size={28} fill="white" />
                  </div>
                </motion.button>
              )}
            </>
          ) : (
            <img
              src={event.src}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Hover Effect Border */}
          <motion.div
            className="absolute inset-0 border-2 md:border-4 border-primary rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Card footer info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
              {event.tag}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/60">
              <Calendar size={11} />
              {event.date}
            </span>
          </div>
          <h3 className="text-white font-display font-bold text-lg leading-tight">
            {event.title}
          </h3>
          <p className="text-white/60 text-sm mt-0.5">{event.subtitle}</p>


        </div>

        {/* Shine sweep on hover */}
        <motion.div
          animate={{
            x: hovered ? "200%" : "-100%",
            opacity: hovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 pointer-events-none"
        />
      </div>

      {/* External link icon */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? -4 : 4 }}
        transition={{ duration: 0.2 }}
        className="absolute top-3 right-3"
      >
        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center">
          <ExternalLink className="text-white" size={14} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const PastEvents = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      {/* Background glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 space-y-4"
        >
          <span className="text-primary font-medium block">Our Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Past <span className="gradient-text">Events Animatex</span>
          </h2>

        </motion.div>

        {/* Three-column media grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-center">
          {events.map((event, index) => (
            <MediaCard
              key={event.id}
              event={event}
              isCenter={index === 1}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default PastEvents;