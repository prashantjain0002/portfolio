import project1Img from "../assets/Movies.png";
import project2Img from "../assets/Restaurant Website.png";
import project3Img from "../assets/Result Management.png";
import project4Img from "../assets/Weather.png";
import project5Img from "../assets/Movie Recommendation.png";
import project6Img from "../assets/Smart Toll Tax.jpg";

export const projects = [
  {
    id: 1,
    title: "Movie Website",
    date: "June 2024",
    description: "The Movies Website, built with HTML, React.js, SCSS, and the TMDB API, offers users a dynamic platform to explore popular TV shows and movies with daily/monthly updates. It features search functionality by name, displays IMDb ratings, provides detailed views with cast information and trailers, and recommends similar titles, all in a responsive and visually appealing interface.",
    image: project1Img,
    tags: ["HTML", "CSS", "SCSS", "JavaScript", "React Js", "API (TMDB)"],
    github: "https://github.com/prashantjain0002/Movix",
    webapp: "https://movix-eight-murex.vercel.app/",
  },
  {
    id: 2,
    title: "Restaurant Website",
    date: "May 2024",
    description: "The Restaurant Website, crafted with HTML, CSS, React.js, Node.js, MongoDB, and Firebase, features secure Google login, menu browsing, cart management, and order placement for users. Admins oversee menu items, orders, user lists, and assign roles. The interface is responsive, intuitive, and visually appealing, ensuring smooth user interactions and efficient restaurant management.",
    image: project2Img,
    tags: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React Js",
      "Node Js",
      "Mongo DB",
    ],
    github: "#",
    webapp: "#",
  },
  {
    id: 3,
    title: "Result Management System",
    date: "July 2022",
    description: "The Result Management System is a web application using HTML, CSS, JavaScript, Bootstrap, Ajax, PHP, and MySQL. It allows admins to manage students, subjects, and classes, publish results, and generate printable mark sheets. Features include user authentication, role-based access, and a user-friendly interface for seamless administration and result management.",
    image: project3Img,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "PHP",
      "MySQL",
    ],
    github: "#",
    webapp: "#",
  },
  {
    id: 4,
    title: "Weather App",
    date: "August 2023",
    description: "The Weather Website, crafted with HTML, CSS, and JavaScript, integrates a Weather API for users to check current conditions like temperature, wind speed, and weather description for any city. It features a user-friendly interface with search functionality and real-time updates for accurate weather information retrieval.",
    image: project4Img,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "API",
    ],
    github: "https://github.com/prashantjain0002/WeatherApp",
    webapp: "#",
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    date: "March 2024",
    description: "The Movie Recommendation System utilizes Pandas, NumPy, Streamlit, and Pickle to offer personalized movie suggestions. It employs collaborative filtering to predict user preferences, enhancing the movie selection process. Streamlit enables user interaction, ensuring a seamless experience, while Pickle optimizes model storage for efficiency and scalability.",
    image: project5Img,
    tags: [
      "Python",
      "Pandas",
      "Numpy",
      "Pickle",
      "API",
      "Streamlit",
    ],
    github: "https://github.com/prashantjain0002/Movie-Recommendation-System",
    webapp: "#",
  },
  {
    id: 6,
    title: "Smart Toll Tax",
    date: "March 2024",
    description: "The Smart Toll Tax System uses Arduino Uno, RFID reader, servo motor, and 16x2 LCD to automate toll collection. It identifies vehicles via RFID tags, lifts the toll gate with the servo motor upon payment verification, and displays transaction details on the LCD, aiming to streamline operations and enhance traffic management efficiency.",
    image: project6Img,
    tags: [
      "Arduino",
      "IOT",
      "Sensor",
    ],
    github: "#",
    webapp: "#",
  },
];
