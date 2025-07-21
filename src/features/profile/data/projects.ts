import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "gutreset",
    title: " Gutreset- Diet planning app",
    period: {
      start: "01.2025",
    },
    link: "https://gutreset.tandenspine.io/login",
    skills: [
      "React",
      "JavaScript",
      "MongoDB",
      "NodeJS",
      "ExpressJS",
      "TailwindCSS"
    ],
    description: `A live project for a medical company that allows doctors to assign
 personalized diet plans to users, who can securely access their plans via a user-friendly interface, featuring
 role-based access.
- Different Dashboards for Users and Admins/Doctors for easy use.
- PDF download support for users.
- Multi-Language support.`,
    logo: "/projects/tanden_favicon.png",
    isExpanded: true,
  },
  {
    id: "gambit",
    title: "Gambit- Multiplayer chess game",
    period: {
      start: "08.2024",
    },
    link: "https://github.com/chaitanyakhair/chess",
    skills: [
      "Open Source",
      "NodeJS",
      "ExpressJS",
      "EJS",
      "SocketIO",
    ],
    description: `A multiplayer chess game with implementation of real-time gameplay features, including live matches,
 move validation, and game state synchronization.
- Implemented Socket.io for realtime move synchronization.
- Easy to use interface with straight forward gameplay without any waiting or loading.
- Validation for each move of every player so no illegal moves allowed.`,
    logo: "/projects/chess.png",
    isExpanded: true,
  },
  {
    id: "realtime-tracker",
    title: "Realtime Tracker- Location tracing application",
    period: {
      start: "07.2024",
    },
    link: "https://github.com/chaitanyakhair/realtime_tracker",
    skills: [
      "Open Source",
      "NodeJS",
      "ExpressJS",
      "EJS",
      "SocketIO",
      "Leaflet Maps"
    ],
    description: `A real-time location tracking application and implemented real-time location updates and tracking
 with high accuracy and minimal latency.
- Multiple users can see locations of each other.
- Used Leaflet library for high accuracy and socket.io for low latency.
- Realtime moving of users is visible.`,
    logo: "/projects/realtime-tracker.png",
    isExpanded: true,
  },
//   {
//     id: "zadark",
//     title: "ZaDark",
//     period: {
//       start: "01.2022",
//     },
//     link: "https://zadark.com",
//     skills: [
//       "Pet Project",
//       "Open Source",
//       "Browser Extension",
//       "CLI",
//       "Docusaurus 3",
//     ],
//     description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
// - 80,000+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
// - 15,000+ active users via Chrome Web Store
// - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
//     logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
//     isExpanded: true,
//   },
//   {
//     id: "qabox",
//     title: "QABox",
//     period: {
//       start: "07.2023",
//       end: "07.2023",
//     },
//     link: "https://github.com/ncdai/qabox",
//     skills: [
//       "University Project",
//       "PHP",
//       "MySQL",
//       "MVC",
//       "Docker",
//       "Docker Compose",
//     ],
//     description:
//       "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
//   },
//   {
//     id: "taskbox",
//     title: "TaskBox",
//     period: {
//       start: "07.2023",
//       end: "07.2023",
//     },
//     link: "https://github.com/ncdai/taskbox",
//     skills: [
//       "University Project",
//       "PHP",
//       "MySQL",
//       "MVC",
//       "Docker",
//       "Docker Compose",
//     ],
//     description:
//       "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
//   },
//   {
//     id: "daichat-app",
//     title: "DaiChat App",
//     period: {
//       start: "07.2020",
//       end: "07.2020",
//     },
//     link: "https://www.youtube.com/watch?v=H5U3J_W1low",
//     skills: ["University Project", "Java", "Java Swing", "Java Networking"],
//     description: `- Course: Java Application Programming — FIT@HCMUS
// - Requirement: Developed a real-time chat application using Java technologies
// - Project Score: 10/10
// - Source Code:
//   - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server
//   - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client`,
//   },
//   {
//     id: "qlsv-app",
//     title: "QLSV App",
//     period: {
//       start: "06.2020",
//       end: "06.2020",
//     },
//     link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
//     skills: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
//     description: `- Course: Java Application Programming — FIT@HCMUS
// - Requirement: Built a student management system with role-based functionalities using Java technologies
// - Project Score: 10/10
// - Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate`,
//   },
//   {
//     id: "penphy",
//     title: "Penphy",
//     period: {
//       start: "01.2019",
//       end: "08.2019",
//     },
//     link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
//     skills: ["Startup Project", "JavaScript", "React Native"],
//     description: "2nd Prize — Business Startup Competition 2019",
//   },
//   {
//     id: "unlimitedstudy",
//     title: "UnlimitedStudy",
//     period: {
//       start: "01.2017",
//       end: "08.2018",
//     },
//     link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
//     skills: [
//       "National Competition",
//       "Creative Software",
//       "PHP",
//       "Laravel 4",
//       "MySQL",
//       "jQuery",
//       "Bootstrap 3",
//     ],
//     description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
// - 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
// - 1st Prize — Can Tho City Science and Engineering Fair 2018
// - 3rd Prize — National Young Informatics Contest 2018
// - 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
// - 3rd Prize — Can Tho City Young Informatics Contest 2018
// - Reached 7,000+ users, mainly high school students in Can Tho City.
// - Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training.`,
//     logo: "https://assets.chanhdai.com/images/project-logos/unlimitedstudy.webp",
//   },
//   {
//     id: "dmessage",
//     title: "DMessage",
//     period: {
//       start: "05.2017",
//       end: "05.2017",
//     },
//     link: "https://github.com/ncdai/DMessage",
//     skills: [
//       "Self-learning Project",
//       "Pet Project",
//       "Express.js",
//       "Socket.io",
//       "MongoDB",
//       "Mongoose ODM",
//     ],
//     description:
//       "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
//   },
//   {
//     id: "study-english",
//     title: "Study English",
//     period: {
//       start: "11.2016",
//       end: "12.2017",
//     },
//     link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
//     skills: [
//       "National Competition",
//       "Creative Software",
//       "PHP",
//       "Laravel 4",
//       "MySQL",
//     ],
//     description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
// - Consolation Prize — National Youth and Children's Creativity Contest 2016
// - 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
// - Consolation Prize — Can Tho City Young Informatics Contest 2016`,
//   },
];
