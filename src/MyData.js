import profilePic from "./assets/img/profile.png"
import resume from "./assets/resume.pdf"
import logo from "./assets/img/logo.jpg"
import mhirj from "./assets/img/companies/mhirj.png"
import gcc from "./assets/img/companies/gcc.png"
import tojobs from "./assets/img/companies/torontojobs.jpeg"
import mock1 from "./assets/img/mocks/mock1.png"
import mock2 from "./assets/img/mocks/mock2.png"
import mock3 from "./assets/img/mocks/mock3.png"
import mock4 from "./assets/img/mocks/mock4.png"
import mock5 from "./assets/img/mocks/mock5.png"

// Styling
import variables from './scss/custom.scss';

export let colors = [`${variables.blue}, ${variables.lightblue}, ${variables.orange}, ${variables.darkpurple}, ${variables.peach}, ${variables.lightergray}`];
/*
These colours come from variables stored in the variables.modules.scss and exported through custom.scss.
Feel free to change and/or add new colours if you want to use the gradient in Hero.js line 23 instead of a random wallpaper generator.
If you prefere, you can test gradients in a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


const navBar = {
    show: true,
};

// MAIN INFORMATION SECTION
const mainInfo = {
    firstName: "Luiz",
    middleName: "",
    lastName: "Claro",
    email: "lfclaro@gmail.com",
    logo: logo, // If you prefer to just have your initials instead of a logo image, change this to "".
    initials: "LC", // The example uses first and last, but feel free to use three or more if you like.
    titles: [
        // "a Mobile Developer",
        // "a Frontend Developer",
        // "a Backend Developer",
        "a Full Stack Developer"
    ], // Add as many titles as you want for the animation in the splash page
    tagline: "Coding solutions that will make you wonder why you haven't hired me yet.",
    gradient: `-webkit-linear-gradient(325deg, ${colors})`, // don't change this either
    baseColor: colors[0],

    wallpapers: "https://picsum.photos/1280/720/?blur=2&gravity=north",

    /*
    Add any image you want as a wallpaper above.
    If your prefer a random walpaper generator, the ones below are really good options:
    wallpapers: "https://source.unsplash.com/random/1280x720/?INSERT_SEARCH_TERMS",
    wallpapers: "https://source.unsplash.com/random/1280x720", // Without search terms for faster loading
    wallpapers: "https://picsum.photos/1280/720?blur=1",
    wallpapers: "https://loremflickr.com/1280/720/dark,texture/all",
    wallpapers: "https://picsum.photos/1280/720/?blur=2&gravity=north",
    */

    socials: [
        {
            url: "https://www.instagram.com/lfclaro/",
            name: 'instagram'
        },
        {
            url: "https://github.com/LFClaro",
            name: 'github'
        },
        {
            url: "https://www.linkedin.com/in/luiz-claro/",
            name: 'linkedin'
        },
        // Feel free to remove any of these that you don't have. You can find icon names at https://simpleicons.org/
        // Just change the urls so that they lead to your social profiles.
    ],
}

// ABOUT SECTION
const about = {
    show: true, // Toggle whether you want to display this section or not
    heading: "About Me",
    bio: "I develop user-friendly software from the ground up.<br /><br />With a background in audiovisual aesthetics, I bring a unique perspective that allows me to think critically about how to make my apps more intuitive and engaging.<br /><br />I'm currently seeking new opportunities to bring creativity and expertise to a collaborative team. Let's connect and create something amazing!",
    imageSize: 380,

    profilePictureLink: "LFClaro",
    /* 
    If you want the "About" section to show a profile picture, fill the profilePictureLink parameter either with:
    a) Substitute "./assets/img/profile.png" for any image WITH THE SAME NAME and change the parameter:
    i.e.: profilePictureLink: profilePic,
    If you want to change the picture name or format, you'll need to change the import on line 1.
    b) Your Github username to use your Github profile photo.
    i.e: profilePictureLink:"johnDoe123",
    c) A link to a hosted image
    i.e: profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
    d) If you do not want any picture to be displayed, just leave it empty :)
    i.e: profilePictureLink: "",
    */

    resume: "",
    /* 
    To display your resume, fill the "resume" parameter above either with:
    a) Substitute "./assets/resume.pdf" for any PDF you upload to that folder and change the paratemer:
    i.e.: resume: resume,
    If you want to change the file name or format, you'll need to change the import on line 2.
    b) A link to a hosted file
    i.e: resume: "https://drive.google.com/file/d/138XN2O8dLMopmYDY2GY7k2lwGEpbFyHd/view?usp=sharing",
    d) If you do not want any resume to be displayed, just leave it empty :)
    i.e: resume: "",
    */
}

// HOBBIES SECTION
const hobbies = {
    show: true,
    heading: "Stuff I Love:",
    content: [
        {
            label: 'Walking my Dogs',
            emoji: '🐶'
        },
        {
            label: 'Board Games',
            emoji: '🎲'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Theater',
            emoji: '🎭'
        },
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Cooking',
            emoji: '👨🏻‍🍳'
        },
    ]
}

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    skillList: {
        // Add skills in the lists below as desired.
        // Rename or add lists following the data structure.
        // To generate the proper names for the icons, search at https://simpleicons.org/
        // If you cant find the skill you're looking for at SimpleIcons, 
        // there's an alternative for brand icons found at https://fontawesome.com/search?o=r&m=free&f=brands
        "Mobile Development": [
            'flutter',
            'dart',
            'swift',
            'android',
            'java',
            'kotlin',
        ],
        "Web Development": [
            'html5',
            'css3',
            'javascript',
            'bootstrap',
            'php',
            'laravel',
            'react',
            'nodedotjs',
            'express',
            'sass',
            'dotnet',
            'jekyll',
        ],
        "Software Development": [
            'python',
            'java',
            'csharp',
        ],
        "Database & API": [
            'firebase',
            'mongodb',
            'mysql',
            'postgresql',
            'redis',
            'fastapi',
            'axios',
        ],
        "UX / UI": [
            'figma',
            'adobexd',
            'adobephotoshop',
            'adobeillustrator',
            'adobeindesign',
        ],
        "Other Tools": [
            'git',
            'github',
            'jira',
            'confluence',
            'docker',
            'bitbucket',
        ],
    },
}

// This is where your portfolio projects will be detailed
const portfolio = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "LFClaro", //i.e."johnDoe12Gh"
    reposLength: 0, // Keep this at 0 if you want to display specific repos
    specificRepos: [
        "star-realms-score-flutter",
        "flutter_firebase_crud",
        "lfclaro.github.io",
        "shelfie-iOS",
        "MERN-ecommerce-CLIENT",
        "MERN-ecommerce-SERVER",
        // "laravel-food-website-phpparty",
        // "ASP.NET-Boardgame-Web-App",
        // "bitcoin-ticker-flutter",
        // "bmi-calculator-flutter",
        // "magic-8-ball-flutter",
        // "dicee-flutter",
        // "Android_Newcomer_Guide",
    ],
    // TODO: Payton Pierce's Portfolio showcase option
    content: [
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}

const experience = {
    show: true,
    heading: "Experience",
    content: [
        {
            role: 'Full Stack Flutter Developer',
            companyName: 'God\'s Cleaning Crew',
            companyLogo: gcc,
            date: 'May 2023 – Present',
            description: `• Developing and releasing three Flutter cross-platform apps (iOS, Android and web). The apps integrate with Firebase and Google Cloud Platform (GCP) Node.js Functions in the backend to handle client relations and job operations, while speeding up quote generation and service payment process:
            
            - The "Admin" app is a general business logistics manager that allows creation of new jobs, clients and workers in the company's Firestore NoSQL database.  Other features include Algolia search and quote generation with a fully implemented Stripe payment system for cards and direct bank debit;
            - The "Clients" app takes job requests directly, providing quotes and accepting payments via Stripe API;
            - The "Workers" app is an onboarding and management tool for service providers, go through background check, receive new job leads and to get paid for their services, all via multiple REST API services. They're also able to communicate via chat / Zego Cloud video call with clients;
            
            • Maintaining the company's website (created in Jekyll) via SSH and Git.
            
            • Wrote a ChatGPT/Gemini Blog Post automator script in Python which creates a complete AI-generated Jekyll blog post with text, image and HTML code / YAML front matter in less than 2 minutes, resulting in a 90% reduction in manual workload.`,
        },
        {
            role: 'Machine Learning Research Assistant',
            companyName: 'MHIRJ - a Mitsubishi Heavy Industries company',
            companyLogo: mhirj,
            date: 'May 2021 – Sep 2022',
            description: `• Developed a function to train a Machine Learning model in Python to predict aircraft maintenance codes based on text analysis, which improved prediction accuracy up to 91%. This function also proved to be a time-saver tool, reducing errors and streamlining the model training steps.
            
            • Led weekly team meetings between the Humber College team and the Mitsubishi team, reporting advances and keeping track of information distribution.
            
            • Trained a new wave of assistants into the project as part of the Research Assistant program in Humber College.`,
        },
        {
            role: 'iOS Developer',
            companyName: 'TorontoJobs.ca',
            companyLogo: tojobs,
            date: 'Jan 2022 – May 2022',
            description: `• Conducted the development team on the iOS version of "Guhuza", a service that offers the ability for Employers & Job Seekers to complete the entire seeking / interviewing process on their platform.
            
            • Created the wireframe for the UI on Adobe XD according to employer specifications and feedback.
            
            • Implemented Twilio video chat function for the app.
            
            • Wrote about 50% of the codebase by myself for the app's MVP.`,

        },
    ]
}

const footerMessage = {
    show: false,
    heading: "Let's connect!",
    message:
        "Thank you for reading all this way! I'm currently looking for full-time Mobile Developer or Web Developer opportunities! If you know of any roles available, if you have any questions, or if you just want to say hi, please feel free to email me at",
}

export { navBar, mainInfo, about, skills, hobbies, portfolio, experience, footerMessage };