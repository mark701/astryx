import React from 'react'
import { motion } from "framer-motion";
import ViewProject from '../Components/Projects/ViewProject';

const mainVideo = {
    id: 'main',
    title: "Fluff and rage Showreel ",
    category: "Featured Showreel",
    description: "Stay Tuned!",
    video: "", // Replace with your main video path 
    thumbnail: "/Assets/Images/GameLogo.png", // Replace with your main thumbnail
    tags: [],
};

const imageProjects = [
    {
        id: 1,
        title: "Main Character Rig",
        category: "3D Character Art",
        description: "",
        image: "/Assets/Images/Char1.png", // Replace with your image path
        tags: ["3D", "Character", "Rig"],
        position: { x: -280, y: -180 }, // Position relative to center (desktop only)
    },
    {
        id: 2,
        title: "main character Transformation",
        category: "3D Character Art",
        description: "the main character transformation is still in development process because we want it epic 😀",
        image: "/Assets/Images/env2.png",
        tags: ["3D", "Character", "sculpting"],
        position: { x: 280, y: -180 },
    },
    {
        id: 3,
        title: "Fluff and rage Forest Wilds",
        category: "environment",
        description: "",
        image: "/Assets/Images/env3.png",
        tags: ["3D Assets","3D Modeling","environment"],
        position: { x: -320, y: 120 },
    },
    {
        id: 4,
        title: "Fluff and rage Boss Base",
        category: "environment",
        description: "",
        image: "/Assets/Images/env4.png",
        tags: ["3D Assets", "3D Modeling", "environment"],
        position: { x: 320, y: 120 },
    },
    // {
    //     id: 5,
    //     title: "Weapon & Props",
    //     category: "3D Asset Modeling",
    //     description: "High-quality game assets including weapons, props, and collectibles with PBR materials.",
    //     image: "/path-to-image5.jpg",
    //     tags: ["Assets", "3D", "PBR"],
    //     position: { x: -180, y: 260 },
    // },
    // {
    //     id: 6,
    //     title: "Character Animation",
    //     category: "Motion & Animation",
    //     description: "Smooth character animations, combat moves, and cinematic sequences.",
    //     image: "/path-to-image6.jpg",
    //     tags: ["Animation", "Rigging", "Motion"],
    //     position: { x: 180, y: 260 },
    // },
    // {
    //     id: 7,
    //     title: "Character Animation",
    //     category: "Motion & Animation",
    //     description: "Smooth character animations, combat moves, and cinematic sequences.",
    //     image: "/path-to-image6.jpg",
    //     tags: ["Animation", "Rigging", "Motion"],
    //     position: { x: 280, y: 300 },
    // },
];

function Projects() {
    return (
        <div className="min-h-screen">
            <section className="pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 relative overflow-hidden">
                {/* Animated Background Orbs */}

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-1/4 w-56 md:w-80 h-56 md:h-80 bg-accent/20 rounded-full blur-3xl"
                />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2  text-primary  mb-4 md:mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                            </span>
                            <span className="text-sm md:text-sm font-medium">Our Work</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">
                            Our <span className="gradient-text">Portfolio</span>
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-6 md:mb-8 px-4">
                            Explore our game, 3D project, and creative works that showcase our expertise and passion for game development.
                        </p>
                    </motion.div>
                </div>

                {/* Theme Component */}
                <ViewProject mainVideo={mainVideo} imageProjects={imageProjects} />
                {/* <Theme1/> */}
            </section>
        </div>
    )
}

export default Projects;