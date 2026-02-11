import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Folder, Image as ImageIcon } from "lucide-react";

function ViewProject({ mainVideo, imageProjects }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isExploded, setIsExploded] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    const handleExplode = () => {
        setIsExploded(true);
    };

    const handleImageClick = (project) => {
        setSelectedImage(project);
    };

    const handleVideoClick = () => {
        setShowVideo(true);
    };

    const handleClose = () => {
        setSelectedImage(null);
        setShowVideo(false);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Interactive Project Hub */}
            <section className="py-8 md:py-12 lg:py-20 relative min-h-[600px] md:min-h-[800px]">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Desktop View - Exploding Cards Layout */}
                    <div className="hidden lg:block relative w-full h-[700px]">
                        {/* Central Animated Icon */}
                        <AnimatePresence>
                            {!isExploded && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        y: [0, -20, 0],
                                        rotate: [0, 5, 0, -5, 0],
                                    }}
                                    exit={{
                                        scale: 0,
                                        opacity: 0,
                                        transition: { duration: 0.5 }
                                    }}
                                    transition={{
                                        scale: { duration: 0.6 },
                                        opacity: { duration: 0.6 },
                                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute top-1/2 left-[68vh] -translate-x-1/2 -translate-y-1/2 z-10"
                                >
                                    <motion.button
                                        onClick={handleExplode}
                                        className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary to-accent p-1 shadow-2xl hover:shadow-primary/50 transition-shadow"
                                    >
                                        <div className="w-full h-full rounded-3xl bg-background/90 backdrop-blur flex items-center justify-center">
                                            <Folder className="text-primary" size={80} />
                                        </div>
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Central Video (appears after explosion) */}
                        <AnimatePresence>
                            {isExploded && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                    className="absolute top-1/2 left-[60vh] -translate-x-1/2 -translate-y-1/2 z-20"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        onClick={handleVideoClick}
                                        className="w-80 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 p-1 shadow-2xl hover:shadow-primary/50 transition-shadow cursor-pointer"
                                    >
                                        <div className="w-full rounded-2xl bg-card/95 backdrop-blur overflow-hidden">
                                            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black group overflow-hidden">
                                                {/* Glowing background effect */}
                                                <div className="absolute inset-0">
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-3xl" />
                                                </div>

                                                {/* Logo - MUCH BIGGER NOW */}
                                                <img
                                                    src={mainVideo.thumbnail}
                                                    alt={mainVideo.title}
                                                    className="relative w-full h-full object-cover  drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                                                />

                                                {/* Hover gradient */}

                                                {/* Play button - MOVED TO BOTTOM RIGHT */}
                                                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/50 group-hover:scale-110 transition-transform">
                                                        <Play className="text-white ml-0.5" size={20} fill="white" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <span className="text-xs text-primary font-medium">{mainVideo.category}</span>
                                                <h3 className="text-sm font-display font-bold mt-1">{mainVideo.title}</h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Exploding Image Cards */}
                        <AnimatePresence>
                            {isExploded && imageProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                    animate={{
                                        x: project.position.x,
                                        y: project.position.y,
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        delay: index * 0.1 + 0.3,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    }}
                                    drag
                                    dragConstraints={{
                                        top: -300,
                                        bottom: 300,
                                        left: -500,
                                        right: 500,
                                    }}
                                    dragElastic={0.1}
                                    whileHover={{ scale: 1.05, zIndex: 50 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute top-1/2 left-[68vh] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                    style={{ touchAction: 'none' }}
                                >
                                    <div className="w-56 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-shadow">
                                        <div className="w-full rounded-2xl bg-card/90 backdrop-blur overflow-hidden">
                                            <div onClick={() => handleImageClick(project)} className="relative aspect-video bg-muted overflow-hidden group">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                                                        <ImageIcon
                                                            className="text-primary-foreground" size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <span className="text-xs text-primary font-medium">{project.category}</span>
                                                <h3 className="text-sm font-display font-bold mt-1 line-clamp-1">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Connecting Lines */}
                        {isExploded && imageProjects.map((project, index) => (
                            <motion.div
                                key={`line-${project.id}`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.15 }}
                                transition={{
                                    delay: index * 0.1 + 0.3,
                                    duration: 0.8,
                                    ease: "easeOut"
                                }}
                                className="absolute top-1/2 left-1/2 pointer-events-none"
                            >
                                <svg
                                    width="800"
                                    height="800"
                                    className="absolute -translate-x-1/2 -translate-y-1/2"
                                    style={{ overflow: 'visible' }}
                                >
                                    <motion.line
                                        x1="400"
                                        y1="400"
                                        x2={400 + project.position.x}
                                        y2={400 + project.position.y}
                                        stroke="url(#gradient)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="rgb(var(--primary))" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0.5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            {/* Main Video Card - Mobile */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                onClick={handleVideoClick}
                                className="w-full rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 p-1 shadow-xl cursor-pointer"
                            >
                                <div className="w-full rounded-2xl bg-card/95 backdrop-blur overflow-hidden">
                                    <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black group overflow-hidden">
                                        {/* Glowing background effect */}
                                        <div className="absolute inset-0">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-3xl" />
                                        </div>

                                        {/* Logo */}
                                        <img
                                            src={mainVideo.thumbnail}
                                            alt={mainVideo.title}
                                            className="relative w-full h-full object-cover drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                                        />

                                        {/* Play button - Bottom Right */}
                                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/50 group-hover:scale-110 transition-transform">
                                                <Play className="text-white ml-0.5" size={24} fill="white" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <span className="text-xs text-primary font-medium">{mainVideo.category}</span>
                                        <h3 className="text-lg font-display font-bold mt-1 mb-2">{mainVideo.title}</h3>
                                        <p className="text-sm text-muted-foreground">{mainVideo.description}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Grid - Mobile */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {imageProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleImageClick(project)}
                                        className="cursor-pointer"
                                    >
                                        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-lg">
                                            <div className="w-full rounded-xl bg-card/90 backdrop-blur overflow-hidden">
                                                <div className="relative aspect-square bg-muted overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                                </div>
                                                <div className="p-2 md:p-3">
                                                    <span className="text-xs text-primary font-medium">{project.category}</span>
                                                    <h3 className="text-sm font-display font-bold mt-1 line-clamp-1">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Full Screen Video Modal */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleClose}
                                className="absolute -top-4 -right-4 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-xl"
                            >
                                <div className="w-full h-full rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-colors">
                                    <X className="text-primary" size={24} />
                                </div>
                            </motion.button>

                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                                <div className="relative aspect-video bg-muted">
                                    {mainVideo.video && mainVideo.video !== "" ? (
                                        <video
                                            className="w-full h-full object-cover"
                                            poster={mainVideo.thumbnail}
                                            controls
                                            autoPlay
                                        >
                                            <source src={mainVideo.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-accent/20" />

                                            {/* Content */}
                                            <div className="relative text-center">
                                                <motion.div
                                                    animate={{
                                                        opacity: [0.5, 1, 0.5],
                                                        scale: [1, 1.05, 1]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="inline-block"
                                                >
                                                    <Play
                                                        className="w-20 h-20 text-primary/50 mb-4 mx-auto"
                                                        strokeWidth={1.5}
                                                    />
                                                </motion.div>
                                                <h3 className="text-2xl font-display font-bold gradient-text mb-2">
                                                    Coming Soon
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    Video not yet published
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-4 md:p-8"
                                >
                                    <span className="text-primary text-sm font-medium">{mainVideo.category}</span>
                                    <h2 className="text-2xl md:text-4xl font-display font-bold mt-2 mb-4">
                                        {mainVideo.title}
                                    </h2>
                                    <p className="text-muted-foreground text-base md:text-lg mb-6">
                                        {mainVideo.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {mainVideo.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 md:px-4 py-1 md:py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleClose}
                                className="absolute -top-4 -right-4 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-xl"
                            >
                                <div className="w-full h-full rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-colors">
                                    <X className="text-primary" size={24} />
                                </div>
                            </motion.button>

                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                                <div className="relative aspect-video bg-muted">
                                    <img
                                        src={selectedImage.image}
                                        alt={selectedImage.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-4 md:p-8"
                                >
                                    <span className="text-primary text-sm font-medium">{selectedImage.category}</span>
                                    <h2 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-4">
                                        {selectedImage.title}
                                    </h2>
                                    <p className="text-muted-foreground text-base md:text-lg mb-6">
                                        {selectedImage.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedImage.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 md:px-4 py-1 md:py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Call to Action */}
            <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
                />

            </section>
        </div>
    );
}

export default ViewProject;