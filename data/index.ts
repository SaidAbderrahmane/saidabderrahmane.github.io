import { link } from "fs";

export const navItems = [
  { name: "Stack", link: "/#stack" },
  { name: "Projects", link: "/#projects" },
  { name: "Contact", link: "/#contact" },
  { name: "Resume", link: "/resume" },
];

export const projects = [
  {
    id: 1,
    title: "Ahbab El marda Website",
    des: "Created a web app for managing Ahbab El Marda Association Blood donation campaigns, built using Laravel, Tailwind CSS, and Chart.js.",
    longDes: `- Created a comprehensive web application for managing Ahbab El Marda Association Blood donation campaigns.\n- The platform was built using Laravel for the backend, Tailwind CSS for responsive design, and Chart.js for data visualization. \n - The application allows administrators to track donations, manage donor information, and visualize campaign performance through interactive charts.`,
    img: "/ahbab.png",
    iconLists: ["/laravel.svg", "/js.svg", "/tail.svg"],
    link:"https:/github.com/saidabderrahmane/ahbab_almarda",
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
    link: "",
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
    link: "https:/github.com/saidabderrahmane/openmarket",
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
    link: "",
    screenshots: [
      "/Logifusion.png",
    ],
  },
  {
    id: 5,
    title: "Bus Line Supervision",
    des: "Performance evaluation of the Saint-Sébastien bus line using real data to predict the number of passengers.",
    longDes: `- Evaluated the performance of the Saint-Sébastien bus line using real-world data to forecast passenger numbers.
    - Data analysis and extraction of contextual variables (temporal factors, weather conditions, special events).
    - Design of a predictive model for passenger flow using XGBoost, based on temporal, weather, and event-related data.
    - Hyperparameter optimization and evaluation using metrics such as MSE and RMSE to ensure accuracy.`,
    img: "/busline.jpg",
    iconLists: ["/python.svg"],
    link: "https:/github.com/saidabderrahmane/bus_line_supervision",
    screenshots: [
      "/busline.jpg",
    ],
  },
  {
    id: 5,
    title: "LeCoinCoin",
    des: "A classified ads website for buying and selling products, inspired from Leboncoin.",
    longDes: `- Developed a full-stack application for posting and managing classified ads, replicating the admin panel features of Leboncoin.
    - Implemented user authentication and authorization using Spring Security, enabling users to post and manage ads.
    - Designed and implemented a REST API, tested and documented it using Postman.
    - Used Tailwind CSS for styling and responsive design.`,
    img: "/busline.jpg",
    iconLists: ["/spring.svg","/java.svg","/grails.svg","/tail.svg","/js.svg"],
    link: "https:/github.com/saidabderrahmane/bus_line_supervision",
    screenshots: [
      "/busline.jpg",
    ],
  },
];

export const education = [

  {
    id: 1,
    title: "Msc in Big Data & AI",
    school: "ESTIA - Institute of Advanced Industrial Technologies",
    period: "2024 - 2025",
    desc: `• Software Engineering: Agile Methodology, Full‑Stack Development, DevOps, Cloud Computing, Cybersecurity.
    • Data Engineering: Big Data Management, Advanced Databases (Oracle, NoSQL, MongoDB), MLOps.
    • Data Analysis: Machine Learning, Deep Learning`,
    thumbnail: "/edu2.svg",
  },
  {
    id: 2,
    title: "Bachelor's Degree in Computer Science",
    school: "USTHB - University of Science and Technology Houari Boumediene",
    period: "2018 - 2022",
    desc: `• Algorithms and data structures, Programming basics.
    • Calculus, Linear Algebra, Probabilities and Statistics.
    • Software engineering, Information Systems, OOP`,
    thumbnail: "/edu1.svg",
  }
]

export const workExperience = [
  {
    id: 1,
    title: "Junior Full-Stack Developer",
    company: "Delfiv",
    period: "June 2022 - September 2024",
    desc: `• Analyzed and specified project requirements.
          • Implemented and documented RESTful API server for a Data synchronsation system.
          • Created and managed MySql databases.
          • Conducted integration testing, performed system maintenance, and automated tasks using Python and shell scripts.
          • Provided training sessions for team members and end‑users.
          • Collaborated with development and operations teams to deliver efficient solutions..
          • Relevant Projects:
          \t– Data Synchronization System: Developed a backend using Laravel and MySQL, along with a cross‑platform admin app (Android & Win‑
          dows) in Flutter, used by 30+ clients.
          \t– Event Management System: Built a web app for event registration and an Android app that included a QR code scanner for virtual ticket
          validation and a dashboard, using Node.js, Express.js, Next.js, Flutter, and MySQL.`,
    Stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Technical Support Specialist",
    company: "Delfiv",
    period: "September 2021 - June 2022",
    desc: `• Provided technical support to clients, including troubleshooting, diagnosing, and resolving hardware and software issues.
    • Installed, configured, and maintained computer systems, networks, and software applications.
    • Assisted in the development of a web‑based platform using React.js, enhancing interactivity.
    • Conducted training sessions for clients on software usage and best practices.
    • Collaborated with the development team to identify and resolve software bugs and issues.
    • Managed and maintained databases, ensuring availability and security.
    • Configured and managed ERP environments (Windows, Android, VPN, RDP).
    • Automated routine tasks and streamlined processes using scripts and software tools.`,
    Stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Full-Stack Developer Intern",
    company: "Azimut Business Solutions",
    period: "April 2021 - June 2021",
    desc: `• Developed and maintained web applications using React.js, Node.js, and MongoDB.
    • Implemented RESTful APIs for data retrieval and manipulation.
    • Designed and developed user interfaces using React.js and Tailwind CSS.
    • Conducted code reviews and provided feedback to team members.`,
    Stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    thumbnail: "/exp1.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "//github.com/saidabderrahmane"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "//linkedin.com/in/hadj-said-abderrahmane/"
  },
];

export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools';

export const skills: Record<SkillCategory, { name: string, icon: string, description: string }[]> = {
  frontend: [
      { name: 'JavaScript', icon: "/js.svg", description: 'A versatile programming language mainly used for web development.' },
      { name: 'React', icon: "/react.svg", description: 'A JavaScript library for building user interfaces.' },
      { name: 'TypeScript', icon: "/ts.svg", description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
      { name: 'Tailwind', icon: "/tail.svg", description: 'A utility-first CSS framework for rapid UI development.' },
      { name: 'Bootstrap', icon: "/bootstrap.svg", description: 'A popular CSS framework for developing responsive and mobile-first websites.' }
  ],
  backend: [
      { name: 'Node.js', icon: "/node.svg", description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
      { name: 'Express', icon: "/js.svg", description: 'A minimal and flexible Node.js web application framework.' },
      { name: 'MongoDB', icon: "/mongodb.svg", description: 'A document-oriented NoSQL database used for high volume data storage.' },
      { name: 'MySQL', icon: "/mysql.svg", description: 'An open-source relational database management system.' }
  ],
  mobile: [
      { name: 'Flutter', icon: "/flutter.svg", description: 'A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.' },
      { name: 'React Native', icon: "/react.svg", description: 'A framework for building native apps using React.' },
  ],
  devops: [
      { name: 'Git', icon: "/git.svg", description: 'A distributed version control system for tracking changes in source code.' },
      { name: 'GitHub Actions', icon: "/github.svg", description: 'A CI/CD service that allows you to automate your software workflows.' },
      { name: 'Docker', icon: "/docker.svg", description: 'A platform for developing, shipping, and running applications in containers.' }
  ],
  tools: [
      { name: 'VSCode', icon: "/vscode.svg", description: 'A source-code editor made by Microsoft for Windows, Linux and macOS.' },
      { name: 'Jira', icon: "/jira.svg", description: 'A proprietary issue tracking product developed by Atlassian.' },
      { name: 'Postman', icon: "/postman.svg", description: 'An API platform for building and using APIs.' }
  ]
};
