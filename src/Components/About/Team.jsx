import { motion } from "framer-motion";
import { Linkedin, Twitter, Dribbble, Box, Github, Instagram } from "lucide-react";

const teamMembers = [
    {
        name: "Aya Tohamy",
        role: "CEO & Creative Director",
        avatar: "/Assets/Images/Aya.jpg",
        initials: "AT",
        bio: " Friendly fire off – ARC Raiders",
        social: { linkedin: "https://www.linkedin.com/in/eclipsayaa", instagram: "https://www.instagram.com/eclipsayaa/", artstation: "https://www.artstation.com/eclipsa" },
    },
    {
        name: "Rober Nagy ",
        role: "Game Developer",
        avatar: "/Assets/Images/roberNagy.png",
        initials: "RN",
        bio: "game developer with Good experience.",
        social: { linkedin: "https://www.linkedin.com/in/rober-nagy/", Github: "https://github.com/ROBERNAGY", itch: "https://rober-nagy.itch.io/" },
    },
    {
        name: "Mohamed Magdy",
        role: "Game Developer",
        avatar: "/Assets/Images/MohamedMagdy.png",
        initials: "MM",
        bio: "game developer with Good experience.",
        social: { linkedin: "https://www.linkedin.com/in/mohamed-magdy--/", Github: "https://pofox.github.io/Mohamed-Magdy-portfolio/" },
    },
    {
        name: "Mahmoud Adel",
        role: "Game Developer",
        avatar: "/Assets/Images/MahmoudAdel.png",
        initials: "MA",
        bio: "game developer with Good experience.",
        social: { linkedin: "https://www.linkedin.com/in/mahmoud-adel-582497162/", Github: "https://github.com/DarkenSoda", itch: "https://darkensoda.itch.io/" },
    },
        {
        name: "Omar Tantawy",
        role: "Game Developer",
        avatar: "/Assets/Images/OmarTantawy.png",
        initials: "OT",
        bio: "Making bugs as a feature 👾 since day one! 🤓.",
        social: { linkedin: "https://github.com/Tantawiii", Github: "https://www.linkedin.com/in/tantawiiumar/", itch: "https://tantawii.itch.io/" },
    },
    {
        name: "Hebatallah Mohamed ",
        role: "3D Animator & Rigger",
        avatar: "/Assets/Images/HebatallahMohamed.jpg",
        initials: "HM",
        bio: "Expert in game engines and real-time rendering.",
        social: { linkedin: "#", Github: "#", },
    },


    {
        name: "Kareem Abaza",
        role: "Game Art",
        avatar: "/Assets/Images/KareemAbaza.png",
        initials: "KA",
        bio: "Creating intuitive and beautiful interfaces.",
        social: { linkedin: "https://www.linkedin.com/in/kareem-abaza-1b6a98280/", artstation: "https://kareemabaza2128.artstation.com/" },
    },
    {
        name: "Duaa Abdullatif",
        role: "Environment Artist",
        avatar: "/Assets/Images/DuaaAbdullatif.png",
        initials: "DA",
        bio: "Support Main.",
        social: { linkedin: "https://www.linkedin.com/in/duaa-abdullatif-7976ab2b6/", artstation: "https://www.artstation.com/duaaabdullatif", itch: "https://duaaabdullatif.itch.io/" },
    },
    {
        name: "Noran Hussain",
        role: "Environment Artist",
        avatar: "/Assets/Images/NoranHussain.png",
        initials: "NH",
        bio: "Environment Artist",
        social: { linkedin: "https://www.linkedin.com/in/noran-hussain-1b56b21b8/", artstation: "https://www.artstation.com/noooor_h231" },
    },
    {
        name: "Youssef Yasser",
        role: "Gameplay & 3D Support",
        avatar: "/Assets/Images/YoussefYasser.png",
        initials: "ME",
        bio: " Precision addict – ARC Raiders",
        social: { linkedin: "https://www.linkedin.com/in/youssef-yasser-896ab2344/" },
    },
    
    // {
    //     name: "Mark Emad",
    //     role: "full stack developer",
    //     avatar: "/Assets/Images/MarkEmad.png",
    //     initials: "ME",
    //     bio: "Pro Gamer, Coding (Pc Environment Only)",
    //     social: { linkedin: "https://www.linkedin.com/in/mark-emad-0583b51a2/" },
    // },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const ItchIcon = ({ size = 14, className = "" }) => (
    <img
        src="/Assets/Icons/itch.ico"
        alt="itch.io"
        style={{ width: size, height: size }}
        className={`object-contain transition-all duration-200 ${className}`}
    />
);


const Artstation = ({ size = 14, className = "" }) => (
    <img
        src="/Assets/Icons/artstation.ico"
        alt="artstation.com"
        style={{ width: size, height: size }}
        className={`object-contain transition-all duration-200 ${className}`}
    />
);
const Team = () => {
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
                    <span className="text-primary font-medium mb-4 block">Our Team</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                        Meet the <span className="gradient-text">Creators</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A passionate team of artists, developers, and visionaries dedicated to crafting extraordinary gaming experiences.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} variants={itemVariants} className="group">
                            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2">
                                {/* Avatar */}
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 mx-auto rounded-full ring-4 ring-primary/10 group-hover:ring-primary/30 overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30 transition-all">
                                        {member.avatar ? (
                                            <img
                                                src={member.avatar}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-primary-foreground text-2xl font-display font-bold">
                                                {member.initials}
                                            </span>
                                        )}
                                    </div>
                                    {/* <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 + 0.3, type: "spring" }}
                                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium"
                                    >
                                        {member.role}
                                    </motion.div> */}
                                </div>

                                {/* Info */}
                                <div className="text-center">
                                    <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-purple-500 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                                    {/* Social Links */}
                                    <div className="flex justify-center gap-2">
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin size={14} />
                                            </a>
                                        )}

                                        {member.social.Github && (
                                            <a
                                                href={member.social.Github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group w-8 h-8 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                                                aria-label="itch.io"
                                            >
                                                <Github size={14} />
                                            </a>
                                        )}


                                        {member.social.twitter && (
                                            <a
                                                href={member.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                                                aria-label="Twitter"
                                            >
                                                <Twitter size={14} />
                                            </a>
                                        )}

                                        {member.social.instagram && (
                                            <a
                                                href={member.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                                                aria-label="instagram"
                                            >
                                                <Instagram size={14} />
                                            </a>
                                        )}
                                        {member.social.dribbble && (
                                            <a
                                                href={member.social.dribbble}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                                                aria-label="Dribbble"
                                            >
                                                <Dribbble size={14} />
                                            </a>
                                        )}

                                        {member.social.Box && (
                                            <a
                                                href={member.social.Box}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                                                aria-label="Box "
                                            >
                                                <Box size={14} />
                                            </a>
                                        )}

                                        {member.social.itch && (
                                            <a
                                                href={member.social.itch}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group w-8 h-8 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                                                aria-label="itch.io"
                                            >
                                                <ItchIcon
                                                    size={20}

                                                />
                                            </a>
                                        )}
                                        {member.social.artstation && (
                                            <a
                                                href={member.social.artstation}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group w-8 h-8 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                                                aria-label="itch.io"
                                            >
                                                <Artstation
                                                    size={20}

                                                />
                                            </a>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
