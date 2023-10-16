export const Projects = [
    {
        title: "Personal Website",
        completed: true,
        link: "https://danieljonas.dev/",
        picture:
            "https://projectimages123.s3.amazonaws.com/personalwebsite.png",
        index: 1,
    },
    {
        title: "Flashicards",
        completed: true,
        link: "https://Flashicards.com",
        picture: "https://projectimages123.s3.amazonaws.com/flashicards.png",
        index: 2,
        description: `
        This is a group project I worked on over the summer with two other people. We used the PERN (PostgreSQL, Express, React and Node.js) stack and I was able to upload it to the internet using an S3 bucket, Amazon Route53 and Amazon cloudfront.
                `,

    },
    // {
    //     title: "Migraine",
    //     completed: true,
    //     picture: "https://via.placeholder.com/640x360",
    //     index: 3,
    // },
    {
        title: "Flixster",
        completed: true,
        link: "https://github.com/02danieljonas/flixster",
        picture: "https://projectimages123.s3.amazonaws.com/flixster.png",
        index: 4,
        description: `In this project I will built a website showing the latest movies currently playing in theaters. I used the The Movie Database API to get the list of latest movies and used vanilla HTML, CSS, and JavaScript to create my own clone of Netflix.`

    },
    {
        title: "Student Store",
        link: "https://github.com/02danieljonas/tdd-student-store",
        completed: true,
        picture: "https://projectimages123.s3.amazonaws.com/studentstore.png",
        index: 5,
        description: `Selling merchandise in the modern era requires digital solutions. For this project, I'll was tasked with designing and constructing an online student store for the "College of Codepath." The application entails a frontend user interface for potential customers to peruse the goods, and a backend API to handle data management. The API was built with Node and Express and the UI was built using React.`
    },

    // {
    //     title: "Snake",
    //     completed: true,
    //     picture: "https://via.placeholder.com/640x360",
    //     index: 6,
    // },
    {
        title: "Memory Game",
        completed: true,
        picture: "https://projectimages123.s3.amazonaws.com/memorygame.png",
        index: 7,
        link: "https://github.com/02danieljonas/Memory-Game",
        description: `
        This is my first real Javascript+CSS+HTML webpage. I had fun and I focused on user customizability more information can be found on my github. 
        `,
    },
    // {
    //     title: "PC Build",
    //     completed: true,
    //     picture: "https://via.placeholder.com/640x360",
    //     index: 7,
    // },
    {
        title: "Pi-Hole",
        completed: false,
        picture: "https://projectimages123.s3.amazonaws.com/pihole.svg",
        index: 7,
        description: `
        This project is failed because my routers does not support changing the settings, I have plans to come back to this when I have a better router.
        A Pi-Hole is a Linux network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole and optionally a DHCP server, intended for use on a private network. It is designed for low-power embedded devices with network capability, such as the Raspberry Pi, but can be installed on almost any Linux machine (https://en.wikipedia.org/wiki/Pi-hole).
        `,
    },
];
