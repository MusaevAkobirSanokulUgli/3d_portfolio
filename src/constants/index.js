import {
  //Assets layer
  backendtech,
  dotnetcoretech,
  nextreacttech,
  frontendtech,

  //Tech layer
  docker,
  figma,
  git,
  javascript,
  mongodb,
  reactjs,
  tailwind,
  typescript,
  appwrite,
  cs,
  netcore,
  postgresql,
  nextjs,

  // company layer
  yeungnamlogo,
  westminsterlogo,
  dotnetcore,
  unity,

  //Public layer
  carrent,
  jobit,
  tripguide,
  ieee,
  //Certificate Logos
  westminster,
  wimbledon,
  udemy,
  moshhamedani,
  resume
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontendtech
  },
  {
    title: "Backend Developer",
    icon: backendtech
  },
  {
    title: "NextJs/React Developer",
    icon: nextreacttech
  },
  {
    title: "Asp.Net Core",
    icon: dotnetcoretech
  }
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "cs",
    icon: cs
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "nextjs",
    icon: nextjs
  },
  {
    name: "dotnetcore",
    icon: netcore
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "docker",
    icon: docker
  },
  {
    name: "appwrite",
    icon: appwrite
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "postgresql",
    icon: postgresql
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "figma",
    icon: figma
  }
];

const educations = [
  {
    title: "Bachelor of Science",
    university_name: "UNIVERSITY OF WESTMINSTER",
    icon: westminsterlogo,
    iconBg: "#E6DEDD",
    date: "Sep 2016 - June 2020",
    points: [
      "At the University of Westminster, I studied in the faculty of Business Information Systems.",
      "Collaborating with students, doing team projects, and improving time managements skill",
      "Participating coding challenges at the university and learning about Algorithms, Data Structures and OOP",
      "Coding practice by solving 'HackerRank' and 'LeetCode' coding problems"
    ]
  },
  {
    title: "Masters in Coputer Egineering",
    university_name: "YEUNGNAM UNIVERSITY",
    icon: yeungnamlogo,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "At the university I did experiments on Machine Learning and Deep Learning models using PyTorch, TensorFlow and other related technologies.",
      "Collaborating with labarotory members, reading scientific papers and new technologies, and doing disscussion and experiments together",
      "Implementing new ideas that coming from scientific papers related to the use of Deep Learning and Machine Learning Models in Cyber Security (Malware Detection in TLS flow)",
      "Participating in labaratory projects and publishing my paper on IEEE Access journal."
    ]
  }
];

const experiences = [
  {
    title: "Unity Developer",
    company_name: "Fiver,Upwork,Freelancer.com",
    icon: unity,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining applications using Unity and other related technologies.",
      "And using ASP.NET CORE for some part of the projects.",
      "Implementing responsive design and ensuring compatibility.",
      "Participating in code reviews and getting constructive feedback from other senior developers."
    ]
  },
  {
    title: "Internship Unity Developer",
    company_name: "Hey Games",
    icon: unity,
    iconBg: "#E6DEDD",
    date: "June 2021 - Sep 2021",
    points: [
      "Developing and maintaining mobile applications using Unity, C# and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and getting constructive feedback from other developers"
    ]
  },
  {
    title: "ASP.NET CORE Developer",
    company_name: "MAO Group",
    icon: dotnetcore,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Developing and maintaining web applications using ASP.NET CORE and REACT and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Part-time ASP.NET CORE Developer",
    company_name: "F ONE SOFT",
    icon: dotnetcore,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using ASP.NET/ Core ,MVC, Razor Pages, Entity Framework, Docker, Jenkins, PostgreSql, Telerik, ext.net, Kubernetes, RabbitMQ,CI/CD, Microservice Architecture and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Part-time Backend Developer",
    company_name: "Kobotis",
    icon: dotnetcore,
    iconBg: "#383E56",
    date: "May 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using ASP.NET/ Core, NextJS, Entity Framework, Docker, PostgreSql,MongoDb, Kubernetes, RabbitMQ,CI/CD, Microservice Architecture and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Akobir is very determined and eager to learn,I have witnessed this firsthand in the projects we have worked on together.",
    name: "Sayyod Mirzamitdinov",
    designation: "Senior Software Engineer",
    company: "Cloud Initiatives Inc",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQFbUCk2rtFCvA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1553802203874?e=1743033600&v=beta&t=c5rcXijcB73P03eQlJIxV--Kl04NNZ1R9M5fC38DMPY"
  },
  {
    testimonial:
      "He is always passionate about exploring new technologies and applying them in real life.",
    name: "Abdushukur Rasulov",
    designation: "Senior Software Engineer",
    company: "Freelance",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQF8uInOA27z3w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1582309897543?e=2147483647&v=beta&t=2JTwnhVB6YbTsRE5vuA0gFhWAyLLrpGs3flUHUgrm20"
  },
  {
    testimonial:
      "Akobir has a good problem solving ability, during his research he found new and more optimal way of epoch selection in classification, and he wrote about it in his research paper",
    name: "Abdulaziz Anorboev",
    designation: "Ph.D. Researcher",
    company: "Yeungnam University",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGpGVWsSpy6Ww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698978693869?e=1743033600&v=beta&t=pzJPB281XpIcNCyMn9sKnTQxF28vLKrtCsyGg7Q9PEg"
  }
];

const projects = [
  {
    name: "Reseach Paper in IEEE Access",
    description:
      "Optimized Epoch Selection Ensemble: Integrating Custom CNN and Fine-Tuned MobileNetV2 for Malimg Dataset Classification",
    tags: [
      {
        name: "DL",
        color: "blue-text-gradient"
      },
      {
        name: "Image Classification",
        color: "green-text-gradient"
      },
      {
        name: "Cyber Security",
        color: "pink-text-gradient"
      },
      {
        name: "Malware Detection",
        color: "orange-text-gradient"
      },
      {
        name: "Malimg Dataset",
        color: "blue-text-gradient"
      },
      {
        name: "Epoch Selection",
        color: "green-text-gradient"
      }
    ],
    image: ieee,
    source_code_link:
      "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10909518",
    websitelink:
      "https://ieeexplore.ieee.org/document/10909518/keywords#keywords"
  },
  {
    name: "Horizon_Banking",
    description:
      "Web-based banking platform that allows users to receive and transfer money from one to another bank account safely. One interesesting fact about the project is that when user creates an account they shoud add abbreviation of state in US where they live in.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "appwrite",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      },
      {
        name: "plaid",
        color: "orange-text-gradient"
      },
      {
        name: "oz",
        color: "blue-text-gradient"
      },
      {
        name: "dwolla-v2",
        color: "green-text-gradient"
      },
      {
        name: "centry",
        color: "pink-text-gradient"
      },
      {
        name: "typescript",
        color: "orange-text-gradient"
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/MusaevAkobirSanokulUgli/MyBanking",
    websitelink: "https://my-banking-blue.vercel.app"
  },
  {
    name: "azoom_zoomClone",
    description:
      "Web-based video call application named azoom to create this project I inspired by zoom, this project includes all the functionalities that zoom does, like screen sharing, video recording, scheduling a meeting and etc. Since, it is a testing project there is not any payment for now. However, later I am plannig to add it as well.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "clerk",
        color: "green-text-gradient"
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient"
      },
      {
        name: "stream",
        color: "orange-text-gradient"
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "green-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/MusaevAkobirSanokulUgli/azoom_nextjs",
    websitelink: "https://azoom-nextjs.vercel.app/"
  },
  {
    name: "Promptia",
    description:
      "Discover & Share Ai Powered prompts. Promptia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "TS",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      },
      {
        name: "TailwindCSS",
        color: "orange-text-gradient"
      },
      {
        name: "Js",
        color: "green-text-gradient"
      }
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/MusaevAkobirSanokulUgli/NextJs_Promptopia",
    websitelink: "https://next-js-promptopia-blush.vercel.app/"
  }
];

const certificates = [
  {
    name: "MY RESUME",
    description:
      "2016-Now: This is my resume that includes the other information that is not shown in portfolio website, like my constact informations, detailed information about work and study and even the link of this portfolio website",
    tags: [
      {
        name: "Contact Number",
        color: "blue-text-gradient"
      },
      {
        name: "email",
        color: "green-text-gradient"
      },
      {
        name: "Instagram",
        color: "pink-text-gradient"
      },
      {
        name: "Facebook",
        color: "blue-text-gradient"
      },
      {
        name: "LinkedIn",
        color: "green-text-gradient"
      },
      {
        name: "Protfolio Website",
        color: "orange-text-gradient"
      }
    ],
    image: resume,
    websitelink:
      "https://drive.google.com/file/d/1ztcwrS3P-6nq8cGBO2fA593zIYhOcik6/view?usp=drive_link"
  },
  {
    name: "Bachelor of Science Diploma",
    description:
      "This certificate was given by Westminster University for successfull graduation of bachelors degree",
    tags: [
      {
        name: "Westminster",
        color: "blue-text-gradient"
      },
      {
        name: "Information Systems",
        color: "green-text-gradient"
      },
      {
        name: "2016-2020",
        color: "pink-text-gradient"
      }
    ],
    image: westminster,
    websitelink:
      "https://drive.google.com/file/d/1Kp-vgSQC4uk_5GGRXxXKGAxd5Y66tpkq/view?usp=sharing"
  },
  {
    name: "Certificate of Wimbledon School Of English",
    description:
      "This certificate was given by Wimbledon School of English in London for completing business and academic english course",
    tags: [
      {
        name: "London",
        color: "blue-text-gradient"
      },
      {
        name: "WSE",
        color: "green-text-gradient"
      },
      {
        name: "2018",
        color: "pink-text-gradient"
      }
    ],
    image: wimbledon,
    websitelink:
      "https://drive.google.com/file/d/1rK7cMwcJlqXp_qQjC-VXbSv_vdaic1l1/view?usp=drive_link"
  },
  {
    name: "Complete Python Mastery",
    description:
      "This certificate was given by Udemy for completion of this online 'COmplete Python Mastery' course. Through that 'Download PDF' button you can find this certificate",
    tags: [
      {
        name: "Types",
        color: "blue-text-gradient"
      },
      {
        name: "Loops",
        color: "green-text-gradient"
      },
      {
        name: "Functions",
        color: "pink-text-gradient"
      },
      {
        name: "Data Structures",
        color: "orange-text-gradient"
      },
      //
      {
        name: "Exeptions",
        color: "blue-text-gradient"
      },
      {
        name: "Classes",
        color: "green-text-gradient"
      },
      {
        name: "Standard Lybrary",
        color: "pink-text-gradient"
      },
      {
        name: "Package Index",
        color: "orange-text-gradient"
      },
      //
      {
        name: "Packages",
        color: "blue-text-gradient"
      },
      {
        name: "Django",
        color: "green-text-gradient"
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient"
      },
      {
        name: "2022",
        color: "orange-text-gradient"
      }
    ],
    image: moshhamedani,
    websitelink:
      "https://drive.google.com/file/d/1Q_7UVyACNhX-zU_mj_YqPewkx_cefGVL/view?usp=drive_link"
  },
  {
    name: "Certificate of Foundation Studies| Social Events",
    description:
      "This certificates were given by Westminster University for completing foundation studies and for being active in social events. Through that 'Download PDF' button you can find several certificates",
    tags: [
      {
        name: "Westmninster",
        color: "blue-text-gradient"
      },
      {
        name: "IFS",
        color: "green-text-gradient"
      },
      {
        name: "Public Speaking",
        color: "pink-text-gradient"
      },
      {
        name: "Cooking Conest",
        color: "orange-text-gradient"
      },
      {
        name: "Social Events",
        color: "blue-text-gradient"
      },
      {
        name: "2017-2018",
        color: "green-text-gradient"
      }
    ],
    image: westminster,
    websitelink:
      "https://drive.google.com/drive/folders/13n_CrooV25fDO7hF8gPSMoRRRGgpr3Nj?usp=drive_link"
  },
  {
    name: "Rest Api | ASP.Net Core| MVC | WCF 4.0| XAMARIN FORMS",
    description:
      "This certificates were given by Udemy for completion of this online .NET CORE/NET MVC, WFC, XAMARIN, RestAPI courses. Through that 'Download PDF' button you can find several certificates",
    tags: [
      {
        name: "PostgreSQL",
        color: "blue-text-gradient"
      },
      {
        name: " C#",
        color: "green-text-gradient"
      },
      {
        name: " .NetCore",
        color: "pink-text-gradient"
      },
      {
        name: "Micorosoft Azure",
        color: "green-text-gradient"
      },
      {
        name: "Entity Framework",
        color: "orange-text-gradient"
      },
      {
        name: "IIS",
        color: "blue-text-gradient"
      },
      {
        name: " RestAPI",
        color: "green-text-gradient"
      },
      {
        name: " MVC",
        color: "pink-text-gradient"
      },
      {
        name: "Postman",
        color: "orange-text-gradient"
      },
      {
        name: "XAML",
        color: "blue-text-gradient"
      },
      {
        name: " Swagger",
        color: "green-text-gradient"
      },
      {
        name: " Xamarin Forms",
        color: "pink-text-gradient"
      },
      {
        name: "Indenity",
        color: "green-text-gradient"
      }
    ],
    image: udemy,
    websitelink:
      "https://drive.google.com/drive/folders/1QJg8abyxbO9uuAXqNlbM6dcDFvfh2Q-3?usp=drive_link"
  },
  {
    name: "Complete C# Unity Game Developer 3D",
    description:
      "This certificates were given by Udemy for completion of this online Unity courses. Throught that 'Download PDF' button you can find several certificates",
    tags: [
      {
        name: "Unity 6",
        color: "blue-text-gradient"
      },
      {
        name: " C#",
        color: "green-text-gradient"
      },
      {
        name: " .Net",
        color: "pink-text-gradient"
      },
      {
        name: " 3D",
        color: "orange-text-gradient"
      },
      {
        name: "2.5D",
        color: "blue-text-gradient"
      },
      {
        name: " RPG",
        color: "green-text-gradient"
      },
      {
        name: " Combat",
        color: "orange-text-gradient"
      },
      {
        name: " Mobile",
        color: "blue-text-gradient"
      },
      {
        name: " Particle System",
        color: "green-text-gradient"
      },
      {
        name: " Mesh Rendering",
        color: "pink-text-gradient"
      },
      {
        name: " AI Agent",
        color: "orange-text-gradient"
      }
    ],
    image: udemy,
    websitelink:
      "https://drive.google.com/drive/folders/1blztrvyljobpjOIfWnELGshGTTBiXZhN?usp=drive_link"
  },
  {
    name: "The Ultimate C# Series: 1, 2, 3 | Unit Testing For C# Developers",
    description:
      "This certificates were given by Udemy for completion of this online Ultimate C# and Unit tesinf courses. Throught that 'Download PDF' button you can find several certificates",
    tags: [
      {
        name: "Class",
        color: "blue-text-gradient"
      },
      {
        name: "Instance",
        color: "green-text-gradient"
      },
      {
        name: "OOP",
        color: "pink-text-gradient"
      },
      {
        name: "Async/Await",
        color: "orange-text-gradient"
      },
      {
        name: "Generics",
        color: "blue-text-gradient"
      },
      {
        name: "Delegates",
        color: "green-text-gradient"
      },
      {
        name: "Linq",
        color: "pink-text-gradient"
      }
    ],
    image: moshhamedani,
    websitelink:
      "https://drive.google.com/drive/folders/1vTSix0hoeiuvaIU_EV9cOrYqHQPzDubm?usp=drive_link"
  }
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
  certificates
};
