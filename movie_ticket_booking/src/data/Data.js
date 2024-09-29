


import Inception from "../assets/inception.jpg";
import Dark_Knight from "../assets/darkKnight.jpg";
import Intersteller from "../assets/intersteller.jpg";
import Avengers from "../assets/avengers.png";
import Matrix from "../assets/matrix.jpg";

export const Movies = [
  {
    id: 7,
    title: "Inception",
    image: Inception,
    rating: 8.8,
    genre: "Action, Sci-Fi",
    releaseYear: 2010,
    duration: "2h 28m",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 8,
    title: "The Dark Knight",
    image: Dark_Knight,
    rating: 9.0,
    genre: "Action, Crime, Drama",
    releaseYear: 2008,
    duration: "2h 32m",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.",
  },
  {
    id: 9,
    title: "Interstellar",
    image: Intersteller,
    rating: 8.6,
    genre: "Adventure, Drama, Sci-Fi",
    releaseYear: 2014,
    duration: "2h 49m",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 10,
    title: "Avengers: Endgame",
    image: Avengers,
    rating: 8.4,
    genre: "Action, Adventure, Drama",
    releaseYear: 2019,
    duration: "3h 1m",
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions.",
  },
  {
    id: 11,
    title: "The Matrix",
    image: Matrix,
    rating: 8.7,
    genre: "Action, Sci-Fi",
    releaseYear: 1999,
    duration: "2h 16m",
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
  },
];




import tumbaad from "../assets/tumbaad.avif";
import arm from "../assets/arm.avif";
import goat from "../assets/goat.avif";
import joker from "../assets/joker.avif";
import stree from "../assets/stree.avif";
import Iron_Man from "../assets/ironman.jpg";
import { delay } from "framer-motion";

export const Movie_Data = [
  {
    id: 1,
    title: "Tumbaad",
    image: tumbaad,
    rating: 8.5,
    genre: "Action, Adventure, Drama",
    releaseYear: 2000,
    duration: "2h 35m",
    delay: 0.3, 
    description:
      "A former Roman General seeks vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
  },
  {
    id: 2,
    title: "Goat",
    image: goat,
    rating: 9.2,
    genre: "Crime, Drama",
    releaseYear: 1972,
    duration: "2h 55m",
    delay: 0.5,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 3,
    title: "ARM",
    image: arm,
    rating: 8.9,
    genre: "Crime, Drama",
    releaseYear: 1994,
    duration: "2h 34m",
    delay: 0.7,
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 4,
    title: "Joker",
    image:joker,
    rating: 8.8,
    genre: "Drama",
    releaseYear: 1999,
    duration: "2h 19m",
    delay: 0.3,
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.",
  },
  {
    id: 5,
    title: "Stree",
    image: stree,
    rating: 8.8,
    genre: "Horror, Romance",
    releaseYear: 1994,
    duration: "2h 22m",
    delay: 0.3,
    description:
      "The story of Forrest Gump, a man with a low IQ, who witnesses and inadvertently influences several historical events in 20th-century America.",
  },
  {
    id: 6,
    title: "Iron Man",
    image: Iron_Man,
    rating: 8.8,
    genre: "Adventure, Drama, Fantasy",
    releaseYear: 2001,
    duration: "2h 58m",
    description: "A meek Hobbit from the Shire and eight companions set out on",
  },
];



      // TICKET PLAN DATA 
export const ticketPlanData = [
  {
    id: 1,
    cinemaHall: "Cinema Hall A",
    timings: ["10:00 AM", "1:30 PM", "5:00 PM"],
  },
  {
    id: 2,
    cinemaHall: "Cinema Hall B",
    timings: ["11:00 AM", "2:30 PM", "6:00 PM"],
  },
  {
    id: 3,
    cinemaHall: "Cinema Hall C",
    timings: ["12:00 PM", "3:30 PM", "7:00 PM"],
  },
  {
    id: 4,
    cinemaHall: "Cinema Hall D",
    timings: ["10:00 AM", "1:30 PM", "5:00 PM"],
  },
  {
    id: 5,
    cinemaHall: "Cinema Hall E",
    timings: ["11:00 AM", "2:30 PM", "6:00 PM"],
  },
  {
    id: 6,
    cinemaHall: "Cinema Hall F",
    timings: ["12:00 PM", "3:30 PM", "7:00 PM"],
  },
  {
    id: 7,
    cinemaHall: "Cinema Hall G",
    timings: ["10:00 AM", "1:30 PM", "5:00 PM"],
  },
  {
    id: 8,
    cinemaHall: "Cinema Hall H",
    timings: ["11:00 AM", "2:30 PM", "6:00 PM"],
  },
  {
    id: 9,
    cinemaHall: "Cinema Hall I",
    timings: ["12:00 PM", "3:30 PM", "7:00 PM"],
  },
];
