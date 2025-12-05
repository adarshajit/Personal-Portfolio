import { ASSETS } from "@constants/assets";
const img1 = ASSETS.PROJECTS.IMG1;
const img2 = ASSETS.PROJECTS.IMG2;
const img3 = ASSETS.PROJECTS.IMG3;
const img4 = ASSETS.PROJECTS.IMG4;

const p1_user = ASSETS.PROJECTS.P1_USER;
const p1_dash_user = ASSETS.PROJECTS.P1_DASH_USER;
const p1_dash_tweet = ASSETS.PROJECTS.P1_DASH_TWEET;

const p2_landing = ASSETS.PROJECTS.P2_LANDING;

const p3_landing = ASSETS.PROJECTS.P3_LANDING;
const p3_register = ASSETS.PROJECTS.P3_REGISTER;

const p4_landing = ASSETS.PROJECTS.P4_LANDING;
const p4_quote = ASSETS.PROJECTS.P4_QUOTE;

const ProjectData = [
  {
    id: "1",
    name: "Depression Recogniser",
    BgColor: "#FDD180",
    cardImg: img1,
    visibility: "block",
    projectLink: "https://depression-recognizer-for-twitter.vercel.app/",
    gitLink: "https://github.com/adarshajit/Depression-Recognizer-for-Twitter",
    features: [
      "Enter a twitter handle to check depression of user",
      "Enter a tweet to detect depression of user",
      "Fetches upto 20 real time tweets of the user",
      "Trained model has an Accuracy of 86%",
      "Minimal UI",
      "Completely Responsive",
    ],
    builtWith: [
      "Tweepy",
      "Django",
      "textblob",
      "nltk",
      "numpy",
      "pandas",
      "sklearn",
      "Algorithm : Multinomial Naive Bayes",
      "React",
      "Styled Components for styling",
      "react-router-dom: for routing",
      "Vercel: for hosting",
    ],

    screenshots: [
      p1_user,
      p1_dash_user,
      p1_dash_tweet,
    ],
  },

  {
    id: "2",
    name: "Covid-19 Awareness",
    BgColor: "#8D9FFF",
    cardImg: img2,
    visibility: "none",
    projectLink: "https://covid19-awareness.netlify.app/",
    gitLink: "https://github.com/adarshajit/Covid19-Awareness",
    features: [
      "All the neccesary information about COVID-19",
      "Ease of use",
      "Minimal UI",
      "Fully Responsive",
    ],
    builtWith: [
      "React",
      "Styled Components: for styling",
      "react-router-dom: for routing",
      "Netlify: for hosting",
    ],
    screenshots: [p2_landing],
  },

  {
    id: "3",
    name: "ICEFOSS 2021",
    BgColor: "#B8F7CA",
    cardImg: img3,
    visibility: "none",
    projectLink: "https://icefoss.fisat.ac.in/",
    gitLink: "https://github.com/adarshajit/ICEFOSS2021",
    features: [
      "The official website for ICEFOSS 2021",
      "Fully Responsive",
      "Get information about various workshops and talks all in one place.",
      "Option to register",
    ],
    builtWith: ["HTML", "Tailwind CSS", "Javascript", "particles.js"],
    screenshots: [
      p3_landing,
      p3_register,
    ],
  },
  {
    id: "4",
    name: "Quotify",
    BgColor: "#ffa3ea",
    cardImg: img4,
    visibility: "none",
    projectLink: "https://quotify-app.netlify.app/",
    gitLink: "https://github.com/adarshajit/Quote-App",
    features: [
      "Read from a collection of 2000 quotes",
      "Share quote to social media (Currently supports twitter only)",
      "Minimal UI",
      "Fully Responsive",
    ],
    builtWith: [
      "React",
      "Styled Components: for styling",
      "react-router-dom: for routing",
      "react-share: social icons",
      "Netlify: for hosting",
    ],
    screenshots: [
      p4_landing,
      p4_quote,
    ],
  },
  // {
  //   id: "5",
  //   name: "Technical Essay Assessor",
  //   BgColor: "#FB8A80",
  //   cardImg: require("../../Assets/5.svg").default,
  //   projectLink: "https://icefoss.fisat.ac.in/",
  //   gitLink: "https://github.com/adarshajit/ICEFOSS2021",
  //   features: [
  //     "Read from a collection of 2000 quotes",
  //     "Share quote to social media (Currently supports twitter only)",
  //     "Minimal UI",
  //     "Fully Responsive",
  //   ],
  //   builtWith: [
  //     "React",
  //     "Styled Components: for styling",
  //     "react-router-dom: for routing",
  //     "react-share: social icons",
  //     "Netlify: for hosting",
  //   ],
  // },

  // {
  //   id: "5",
  //   name: "CRUD Application",
  //   BgColor: "#A7FFEB",
  //   cardImg: require("../../Assets/6.svg").default,
  //   projectLink: "https://icefoss.fisat.ac.in/",
  //   gitLink: "https://github.com/adarshajit/CRUD-app",
  //   features: [
  //     "Read from a collection of 2000 quotes",
  //     "Share quote to social media (Currently supports twitter only)",
  //     "Minimal UI",
  //     "Fully Responsive",
  //   ],
  //   builtWith: [
  //     "React",
  //     "Styled Components: for styling",
  //     "react-router-dom: for routing",
  //     "react-share: social icons",
  //     "Netlify: for hosting",
  //   ],
  // },
];

export default ProjectData;
