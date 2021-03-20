// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  gradientColors: "#E73C7E, #23A6D5, #23D5AB, #893FA6",
  firstName: "Shilpi",
  middleName: "",
  lastName: "Kumari",
  message: " Software Engineer|Leisure Artist|Kalimba Learner",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shilpi5",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shilpi-kumari-94b570128/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/shilpi.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/shilpi-resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/shilpi.jpg"),
  imageSize: 375,
  message:
    "Enthusiastic software engineer with 2 years experience participating in the complete product development lifecycle of successfully launched applications. Designed Continuous Integration/ Delivery pipeline, gained knowledge on major cloud service providers, like AWS and Azure,  software containerization platforms like Docker and container orchestration tools like Kubernetes. Looking forward to applying the acquired gamut of skills in a challenging role",
  resume: require("../editable-stuff/shilpi-resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "shilpi5",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const workExperience = {
  show: true,
  heading: "Work Experience",
  // message:
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Shape.png"), 
      label: "Software Engineer", 
      date: 'August 2019 – Present',
      paragraph: "1. Integrated logging and monitoring stacks on aws cloud platform in production environment for troubleshooting application and infrastructure performance. - 2. Configured S3 bucket in aws to archive kube logs. Worked with IAM role and policy creation, managing secretes on secret manager. - 3. Deployed and maintained application on cloudnative microservices architecture for one of the international bank client. Implemented Jenkins Jobs to make deployment easier.",
      fontSizeNum: "10"
    },
    { 
      img: require("../editable-stuff/Shape.png"), 
      label: "Intern", 
      date: 'Jan 2019 – July 2019',
      paragraph: "1. Developed spring boot application to test the performance of gRPC services and generate report for the same. - 2. Worked with kafka, spring boot, gRPC technologies for product development. - 3. Gained knowledge of custom kubernetes operator and its working in kubernetes cluster for CI/CD pipeline." ,
      fontSizeNum: "20"
    },
  ],
  imageSize: {
    width:"1000",
    height:"400"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
   
    { name: "Java", value: 80 },
    { name: "Python", value: 70 },
    { name: "goLang", value: 50 },
    { name: "C/C++", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Data Structures", value: 85 },
    { name: "SQL", value: 60 },
    { name: "Logging and monitoring tools", value: 70 },
    { name: "Kubernetes", value: 70 },
    { name: "AWS Cloud Platform", value: 50 },
    { name: "Azure Cloud Platform", value: 40 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 91 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or DevOps Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "xkshilpi@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      // companylogo: require('../assets/img/dell.png'),
      date: 'August 2019 – Present',
      message: "1. Integrated logging and monitoring stacks on aws cloud platform in production environment for troubleshooting application and infrastructure performance. 2. Configured S3 bucket in aws to archive kube logs. Worked with IAM role and policy creation, managing secretes on secret manager. 3. Deployed and maintained application on cloud-native microservices architecture for one of the international bank client. Implemented Jenkins Jobs to make deployment easier. "
    },
    {
      role: 'Intern',
      // companylogo: require('../assets/img/boeing.png'),
      date: 'Jan 2019 – July 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, workExperience, getInTouch, experiences };
