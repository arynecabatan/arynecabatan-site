import {
  SiBehance,
  SiDribbble,
  SiGithub,
  SiLinkedin,
  SiVite,
} from "react-icons/si";
import {
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobexd,
  SiAdobeacrobatreader,
  SiSketch,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiReact,
  SiGatsby,
  SiWordpress,
  SiMarkdown,
  SiJava,
  SiPython,
  SiArduino,
  SiGit,
  SiSquarespace,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiNotion,
  SiAffinitydesigner,
  SiAffinityphoto,
} from "react-icons/si";
import { FiHelpCircle, FiMail } from "react-icons/fi";
import { FaElementor } from "react-icons/fa";

export const config = {
  siteName: "Aryne Cabatan",
  siteDescription:
    "Welcome to my portfolio - a showcase of captivating visual designs that engage and inspire. Browse through a divers range of branding, print design, web design and UI/UX projects, expertly crafted to leave a lasting impression.",
  siteUrl: "https://arynecabatan.com/",
  siteImage: "/seo-image/default-portfolio-thumb.jpg",
  resume:
    "https://firebasestorage.googleapis.com/v0/b/ryne-design.appspot.com/o/Resume%2FAryneCabatan_DesignResume2023v2.pdf?alt=media&token=42bba4ba-c024-4cfc-88c4-19b123ad411a",

  // Variables
  navLinks: [
    {
      name: "Projects",
      path: "/",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "About",
      path: "/about",
    },
  ],

  galleryCategory: [
    {
      name: "Poster",
      description:
        "Welcome to my ever-evolving poster collection. From minimalist elegance to bold and vibrant compositions, every poster has been meticulously crafted to evoke emotions and leave a lasting impression. Each poster in this portfolio is a reflection of my passion for design, showcasing the seamless fusion of artistry and purpose. Whether it's sparking curiosity, promoting a cause, or celebrating beauty, these posters speak a language all their own — a language that connects hearts, ignites inspiration, and captures the essence of the human experience.",
    },
    {
      name: "Logofolio",
      description:
        "Logos help to build an identity of a brand; I approached my logos based on product's target audiences. Each logo incorporates design thinking sketches, and took design inspirations on existing competitions, designs and client needs. In addition, the list of logo below demonstrate my ability to come up with different ideas however, they were commonly consist of vibrant colors (e.g Material Design color palette), solid geometric designs and sans serif typeface, giving a playful and bold vibe.",
    },
  ],

  socialLinks: [
    {
      name: "Email",
      path: "mailto:arynecabatan@gmail.com",
      icon: FiMail,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/arynecabatan/",
      icon: SiLinkedin,
    },
    {
      name: "Github",
      path: "https://github.com/arynecabatan",
      icon: SiGithub,
    },
    {
      name: "Behance",
      path: "https://www.behance.net/arynecabatan",
      icon: SiBehance,
    },
    {
      name: "Dribbble",
      path: "https://dribbble.com/arynecabatan",
      icon: SiDribbble,
    },
  ],
};

export const StackIcon = ({ iconName }) => {
  let iconType;

  switch (iconName) {
    case "Adobe Photoshop":
      iconType = <SiAdobephotoshop />;
      break;
    case "Adobe Lightroom":
      iconType = <SiAdobelightroom />;
      break;
    case "Adobe Premiere":
      iconType = <SiAdobepremierepro />;
      break;
    case "Adobe After Effects":
      iconType = <SiAdobeaftereffects />;
      break;
    case "Adobe Illustrator":
      iconType = <SiAdobeillustrator />;
      break;
    case "Adobe InDesign":
      iconType = <SiAdobeindesign />;
      break;
    case "Adobe XD":
      iconType = <SiAdobexd />;
      break;
    case "Adobe Acrobat Reader":
      iconType = <SiAdobeacrobatreader />;
      break;
    case "Sketch":
      iconType = <SiSketch />;
      break;
    case "Figma":
      iconType = <SiFigma />;
      break;
    case "Framer":
      iconType = <SiFramer />;
      break;
    case "HTML5":
      iconType = <SiHtml5 />;
      break;
    case "Javascript":
      iconType = <SiJavascript />;
      break;
    case "CSS3":
      iconType = <SiCss3 />;
      break;
    case "React":
      iconType = <SiReact />;
      break;
    case "Gatsby":
      iconType = <SiGatsby />;
      break;
    case "Wordpress":
      iconType = <SiWordpress />;
      break;
    case "Markdown":
      iconType = <SiMarkdown />;
      break;
    case "Python":
      iconType = <SiPython />;
      break;
    case "Arduino":
      iconType = <SiArduino />;
      break;
    case "Git":
      iconType = <SiGit />;
      break;
    case "Square Space":
      iconType = <SiSquarespace />;
      break;
    case "Tailwind":
      iconType = <SiTailwindcss />;
      break;
    case "Nextjs":
      iconType = <SiNextdotjs />;
      break;
    case "GraphQL":
      iconType = <SiGraphql />;
      break;
    case "Notion":
      iconType = <SiNotion />;
      break;
    case "Elementor":
      iconType = <FaElementor />;
      break;
    case "Affinity Designer":
      iconType = <SiAffinitydesigner />;
      break;
    case "Affinity Photo":
      iconType = <SiAffinityphoto />;
      break;
    case "Vite":
      iconType = <SiVite />;
      break;
    default:
      iconType = <FiHelpCircle />;
      break;
  }

  return <>{iconType}</>;
};
