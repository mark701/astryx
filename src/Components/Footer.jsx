import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram,Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const services = [
    "Game Development",
    "3D Design & Modeling",
    "3D Art & Animation",
    "UI/UX Design",
    "VFX & Post-Production",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/astryx-games/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588182742415", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/astryxgames/", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="Assets/Icons/logo.ico" alt="ASTRYX Logo" className="w-10 h-10" />
              <span className="text-xl font-display font-bold">ASTRYX</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Transforming ideas into digital realities. 
              We craft immersive gaming experiences through cutting-edge 3D design,
               development, and creative artistry.            
               </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {/* <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Fse Street, Tech City, Fs 12345
                </span>
              </li> */}
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:Astryxg@gmail.com"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Astryxg@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href="https://wa.me/+201288884834"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  +20 (12) 8888-4834
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} ASTRYX. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/50">
              <p  className=" transition-colors">
                Privacy Policy
              </p>
              <p className=" transition-colors">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;