import { link } from "fs";

export const navItems = [
  { name: "Stack", link: "#stack" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "#resume" },
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
    title: "Ahbab El marda Website",
    des: "Created a web app for managing Ahbab El Marda Association Blood donation campaigns, built using Laravel, Tailwind CSS, and Chart.js.",
    longDes: `- Created a comprehensive web application for managing Ahbab El Marda Association Blood donation campaigns.\n- The platform was built using Laravel for the backend, Tailwind CSS for responsive design, and Chart.js for data visualization. \n - The application allows administrators to track donations, manage donor information, and visualize campaign performance through interactive charts.`,
    img: "/ahbab.png",
    iconLists: ["/laravel.svg", "/js.svg", "/tail.svg"],
    link: "/ui.earth.com",
    screenshots: [
      "/ahbab.png",
      "/ahbab2.png",
      "/ahbab3.png",
    ]
  },
  {
    id: 2,
    title: "Delfiv Events App",
    des: "Created a mobile app to manage events using Flutter, including features for ticketing and mailing.",
    longDes: `- Developed a full‑stack application to track visitor registrations and check‑ins during Delfiv events. The Android version, built using Flutter, includes features for scanning QR tickets.\n- Implemented a comprehensive dashboard to export the visitor list, allowing event organizers to efficiently manage attendance data.\n - The app also supports ticketing and mailing functionalities, providing a seamless experience for both organizers and attendees.`,
    img: "/delfiv-events.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/flutter.svg"],
    link: "/ui.yoom.com",
    screenshots: [
      "/delfiv-events.png",
      "/delfiv-events2.png",
    ]
  },
  {
    id: 3,
    title: "OpenMarket - Multi-vendor e-commerce website",
    des: "Developed a scalable e-commerce platform for multiple vendors using Laravel, Bootstrap CSS, and Stripe.",
    longDes: `- Developed a multi‑vendor e‑commerce website using Laravel, MySQL, JavaScript, and Bootstrap. \n- The platform supports multiple vendors, allowing them to manage their own products and sales. Integrated Stripe API for secure online payments.\n - Designed and implemented interactive visualizations using Chart.js, providing users and administrators with data insights.`,
    img: "/openmarket.png",
    iconLists: ["/laravel.svg", "/js.svg", "stripe.svg", "/bootstrap.svg"],
    link: "/ui.aiimg.com",
    screenshots: [
      "/openmarket.png",
      "/openmarket2.png",
      "/openmarket3.png",
    ]
  },
  {
    id: 4,
    title: "Logifusion",
    des: "Data Governance app for Logicom commerce management software.",
    longDes: `- Developed a cross‑platform application for cloud data governance, enabling ERP administrators to monitor data changes, manage reference data, and visualize key information on a dashboard. \n- Integrated real‑time data monitoring features for improved transparency and control over cloud‑based operations.\n- Designed user‑friendly dashboards to visualize data modifications and key metrics, improving decision‑making and efficiency.\n- The app supports various data governance activities, ensuring data integrity and compliance.`,
    img: "/Logifusion.png",
    iconLists: ["/laravel.svg", "/flutter.svg"],
    link: "/ui.apple.com",
    screenshots: [
      "/Logifusion.png",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "//github.com/saidabderrahmane"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "//linkedin.com/in/hadj-said-abderrahmane/"
  },
];

