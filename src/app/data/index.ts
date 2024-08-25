import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "My Previous Next.Js 13 Portfolio",
      des: "Explore the my previous portfolio and you see my work and experience and a lot of knowledge to work out this porfolio.",
      img: "/p1.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://abdulrehman-portfolio.vercel.app/",
    },
    {
      id: 2,
      title: "Creating a Best Music Player",
      des: "I create this music player and spend of many time to create this music player and I learn a lot .",
      img: "/p2.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://rahmangamer12.github.io/Music-Player/",
    },
    {
      id: 3,
      title: "Best Todo App",
      des: "I have created this todo app and you can add and delete, and edit your tasks and homework .",
      img: "/p5.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://todo-app-p5pd.vercel.app/",
    },
    {
      id: 4,
      title: "Facebook Login Page",
      des: "I have created this facebook login page but sorry it is not responsive so i improve this page thank you.",
      img: "/p4.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://login-page-2-eight.vercel.app/",
    },
  ];
  
  export const testimonials = [
    {
        quote:
        "Welcome to my portfolio, where creativity meets precision. Each project reflects my dedication to delivering exceptional quality and innovative solutions. I’m confident that the work showcased here will demonstrate my commitment to excellence and my ability to bring your vision to life .",
        name: "AbdulRehman",
        title: "I am a PIAIC students.",
      },
      {
      quote:
        "Browse through my portfolio to witness the quality and innovation I bring to every project. Each piece showcases my dedication to exceeding client expectations and delivering exceptional results. I look forward to the opportunity to bring your ideas to life.",
      name: "AbdulRehman",
      title: "I am a PIAIC students.",
    },
      {
      quote:
        "Explore my portfolio to see a blend of creativity and technical expertise. Every project highlights my commitment to quality and attention to detail. I’m excited to show how I can turn your ideas into impactful results.",
      name: "AbdulRehman",
      title: " I am a PIAIC students.",
    },
    {
      quote:
        "Take a look at my portfolio to see how I blend creativity with technical expertise. Each project reflects my commitment to delivering high-quality and impactful solutions. I’m eager to collaborate and turn your vision into a successful reality.",
      name: "AbdulRehman",
      title: "I am a PIAIC students.",
    },
    {
      quote:
        "Explore my portfolio to see a range of projects that highlight my expertise and dedication. I focus on delivering high-quality work that meets your unique needs. I’m excited to bring your ideas to life with creativity and precision.",
      name: "AbdulRehman",
      title: "I am a PIAIC students.",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "I am frontend developer and i am working on HTML and CSS and Typescript.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Next.Js Developer",
      desc: "I am a Next.Js developer and i am working on Next.Js and i am a beigner.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Wordpress Developer",
      desc: "I am a word[ress developer and i am intermidiate on wordpress.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Expert OF Typescript",
      desc: "I am a expert of typescript and some projects i create on typescript.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/rahmangamer12",
    },
    {
      id: 2,
      img: "/facebook.svg",
      link: "https://www.facebook.com/profile.php?id=61554083063522"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/abdulrehman-programer/"
    },
  ];