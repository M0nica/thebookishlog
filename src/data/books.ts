export interface Book {
  title: string;
  author: string[];
  publishedYear: number;
  setting: Setting[];
  genre: Genres[];
  age: Ages;
  type: BookType;
  pages: number;
  medium: Medium;
  rating: number;
  dateStarted: string;
  dateFinished: string;
  dnfDate: string;
  progress: Progress;
  bookCoverColor: string;
  bookCoverObject: string;
  fav: boolean;
  pageProgress: number;
  tbr: boolean;
  tbrMonth: string;
  library: boolean;
  dedication: Dedication | "";
}

export interface Dedication {
  text: string;
  person: string;
}

export type Person = "Mother";

export type Ages =
  | "Young Adult"
  | "New Adult"
  | "Adult"
  | "Middle Grade"
  | "Childrens";

export type Setting =
  | ""
  | "California"
  | "Canada"
  | "Fictional"
  | "Georgia (USA)"
  | "Louisiana"
  | "London"
  | "Mexico"
  | "Minnesota"
  | "New York City"
  | "Philadelphia"
  | "South Korea"
  | "Space"
  | "United Kingdom"
  | "United States"
  | "Washington, DC";

export type Genres =
  | "Alternate History"
  | "Africa"
  | "Asia"
  | "Biography"
  | "Black"
  | "Crime"
  | "Dystopia"
  | "Fairy Tale"
  | "Fantasy"
  | "Feminism"
  | "Health"
  | "Historical Fiction"
  | "History"
  | "Horror"
  | "Humor"
  | "Korea"
  | "LGBTQIA+"
  | "Magic"
  | "Magical Realism"
  | "Music"
  | "Mystery"
  | "Mythology"
  | "Psychology"
  | "Race"
  | "Retelling"
  | "Romance"
  | "Science Fiction"
  | "Short Stories"
  | "Slavery"
  | "Social Justice"
  | "Space"
  | "Thriller"
  | "True Crime"
  | "Vampires"
  | "Werewolves"
  | "Western"
  | "Witches";

export type BookType = "Fiction" | "Non-Fiction";

export type Medium = "Physical" | "E-Book" | "Audio" | "Physical and Audio";

export type Progress = "finished" | "started" | "dnf" | "not started";

export const bookData: Book[] = [
  {
    title: "She Came to Slay: The Life and Times of Harriet Tubman",
    author: ["Erica Armstrong Dunbar"],
    publishedYear: 2019,
    setting: ["United States"],
    genre: ["History", "Biography", "Feminism", "Race", "Slavery", "Black"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 157,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "12/18/2020",
    dateFinished: "02/07/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Tan",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Cinderella Is Dead",
    author: ["Kalynn Bayron"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "LGBTQIA+",
      "Retelling",
      "Fairy Tale",
      "Dystopia",
      "Romance",
      "Black"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 389,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/07/2021",
    dateFinished: "02/08/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Purple",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "I'm Not Dying with You Tonight",
    author: ["Kimberly Jones", "Gilly Segal"],
    publishedYear: 2019,
    setting: ["United States", "Georgia (USA)"],
    genre: ["Race", "Social Justice", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 247,
    medium: "Physical",
    rating: 4,
    dateStarted: "02/09/2021",
    dateFinished: "02/09/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Black",
    bookCoverObject: "Face",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "The Year of the Witching",
    author: ["Alexis Henderson"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Horror",
      "Witches",
      "Feminism",
      "Historical Fiction",
      "Race",
      "Black"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 359,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/09/2021",
    dateFinished: "02/11/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Gray",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Monday's Not Coming",
    author: ["Tiffany D. Jackson"],
    publishedYear: 2018,
    setting: ["United States", "Washington, DC"],
    genre: ["Mystery", "Black", "Crime", "Psychology"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/11/2021",
    dateFinished: "02/12/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Red",
    bookCoverObject: "Woman",
    fav: true,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Uprooted",
    author: ["Naomi Novik"],
    publishedYear: 2015,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "Fairy Tale", "Retelling"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/11/2021",
    dateFinished: "",
    dnfDate: "02/16/2021",
    progress: "dnf",
    bookCoverColor: "Yellow",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 6,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "Full Disclosure",
    author: ["Camryn Garrett"],
    publishedYear: 2019,
    setting: ["United States", "California"],
    genre: ["LGBTQIA+", "Romance", "Health", "Mystery", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 290,
    medium: "E-Book",
    rating: 2.5,
    dateStarted: "02/12/2021",
    dateFinished: "02/14/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "The Five: The Untold Lives of the Women Killed by Jack the Ripper",
    author: ["Hallie Rubenhold"],
    publishedYear: 2019,
    setting: ["United Kingdom", "London"],
    genre: ["History", "True Crime", "Feminism", "Mystery", "Biography"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 333,
    medium: "E-Book",
    rating: 4.5,
    dateStarted: "01/30/2021",
    dateFinished: "02/20/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "The First Sister",
    author: ["Linden Lewis"],
    publishedYear: 2020,
    setting: ["Fictional", "Space"],
    genre: ["Science Fiction", "Fantasy", "LGBTQIA+", "Space"],
    age: "Adult",
    type: "Fiction",
    pages: 352,
    medium: "Physical",
    rating: 0,
    dateStarted: "02/14/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 9,
    bookCoverColor: "Gold",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "The Testaments",
    author: ["Margaret Atwood"],
    publishedYear: 2019,
    setting: ["United States", "Canada"],
    genre: ["Dystopia", "Feminism"],
    age: "Adult",
    type: "Fiction",
    pages: 422,
    medium: "Physical",
    rating: 0,
    dateStarted: "11/29/2020",
    dateFinished: "",
    dnfDate: "09/09/2021",
    progress: "dnf",
    pageProgress: 40,
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "The Good Luck Girls",
    author: ["Charlotte Nicole Davis"],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Fantasy", "Historical Fiction", "LGBTQIA+", "Western", "Dystopia"],
    age: "Young Adult",
    type: "Fiction",
    pages: 352,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/15/2021",
    dateFinished: "",
    dnfDate: "09/23/2021",
    progress: "dnf",
    pageProgress: 13,
    bookCoverColor: "Brown",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title:
      "Maybe You Should Talk to Someone: A Therapist, Her Therapist, and Our Lives Revealed",
    author: ["Lori Gottlieb"],
    publishedYear: 2019,
    setting: ["United States", "California"],
    genre: ["Biography", "Psychology"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 415,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/17/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 30,
    bookCoverColor: "Blue",
    bookCoverObject: "Tissue",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Gods of Jade and Shadow",
    author: ["Silvia Moreno-Garcia"],
    publishedYear: 2019,
    setting: ["Mexico"],
    genre: ["Fantasy", "Historical Fiction", "Mythology", "Magical Realism"],
    age: "Adult",
    type: "Fiction",
    pages: 338,
    medium: "E-Book",
    rating: 3.5,
    dateStarted: "04/12/2021",
    dateFinished: "05/01/2021",
    dnfDate: "",
    progress: "finished",
    bookCoverColor: "Blue",
    bookCoverObject: "Tissue",
    fav: false,
    pageProgress: 100,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "Kim Jiyoung, Born 1982",
    author: ["Cho Nam-Joo"],
    publishedYear: 2016,
    setting: ["South Korea"],
    genre: ["Dystopia", "Feminism", "Asia", "Korea"],
    age: "Adult",
    type: "Fiction",
    pages: 163,
    medium: "Physical",
    rating: 3.5,
    dateStarted: "08/09/2021",
    dateFinished: "08/23/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "The Grace Year",
    author: ["Kim Liggett"],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Dystopia", "Fantasy", "Feminism"],
    age: "Young Adult",
    type: "Fiction",
    pages: 404,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "08/23/2021",
    dateFinished: "08/24/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Pink",
    bookCoverObject: "Woman",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Ring Shout",
    author: ["P. Djèlí Clark"],
    publishedYear: 2020,
    setting: ["Fictional", "Georgia (USA)"],
    genre: [
      "Fantasy",
      "Horror",
      "Historical Fiction",
      "Race",
      "Black",
      "Alternate History"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 185,
    medium: "E-Book",
    rating: 5,
    dateStarted: "08/24/2021",
    dateFinished: "08/27/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Person",
    fav: true,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "Boyfriend Material",
    author: ["Alexis Hall"],
    publishedYear: 2020,
    setting: ["United Kingdom", "London"],
    genre: ["LGBTQIA+", "Romance", "Humor"],
    age: "Adult",
    type: "Fiction",
    pages: 185,
    medium: "E-Book",
    rating: 3,
    dateStarted: "08/27/2021",
    dateFinished: "08/29/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Two People",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "Red, White & Royal Blue",
    author: ["Casey McQuiston"],
    publishedYear: 2019,
    setting: ["United Kingdom", "United States", "Washington, DC", "London"],
    genre: ["LGBTQIA+", "Romance"],
    age: "New Adult",
    type: "Fiction",
    pages: 418,
    medium: "Physical",
    rating: 0,
    dateStarted: "08/29/2021",
    dateFinished: "",
    dnfDate: "09/17/2021",
    progress: "dnf",
    pageProgress: 42,
    bookCoverColor: "Pink",
    bookCoverObject: "Two People",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "The Vanishing Half",
    author: ["Brit Bennett"],
    publishedYear: 2020,
    setting: [
      "United States",
      "Louisiana",
      "California",
      "New York City",
      "Washington, DC",
      "Minnesota"
    ],
    genre: ["Historical Fiction", "Race", "Black"],
    age: "Adult",
    type: "Fiction",
    pages: 343,
    medium: "E-Book",
    rating: 5,
    dateStarted: "08/29/2021",
    dateFinished: "09/13/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Purple",
    bookCoverObject: "Two Women",
    fav: true,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "Raybearer",
    author: ["Jordan Ifueko"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: ["Fantasy", "LGBTQIA+", "Magic", "Africa", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 368,
    medium: "E-Book",
    rating: 4.5,
    dateStarted: "09/13/2021",
    dateFinished: "09/19/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Gold",
    bookCoverObject: "Woman's Face",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "Allegedly",
    author: ["Tiffany D. Jackson"],
    publishedYear: 2017,
    setting: ["New York City", "United States"],
    genre: ["Mystery", "Black", "Psychology", "Crime"],
    age: "Young Adult",
    type: "Fiction",
    pages: 387,
    medium: "Physical",
    rating: 4,
    dateStarted: "09/22/2021",
    dateFinished: "09/24/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "White",
    bookCoverObject: "Girl",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Let Me Hear a Rhyme",
    author: ["Tiffany D. Jackson"],
    publishedYear: 2019,
    setting: ["United States", "New York City"],
    genre: ["Mystery", "Black", "Psychology", "Crime", "Music"],
    age: "Young Adult",
    type: "Fiction",
    pages: 377,
    medium: "Physical and Audio",
    rating: 4,
    dateStarted: "09/24/2021",
    dateFinished: "06/18/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Black",
    bookCoverObject: "Three People",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: {
      text:
        "For my cousin Sherrill Lavonne Bryant, who introduced me to hip-hop, bamboo earrings, Martin, Yo-Yo, En Vouge, and Jodeci. For the hustler in front of my autie's building who taught me how to move in a room full of vultures. For Brooklyn, home no matter where I go.",
      person: "Family, Place"
    }
  },
  {
    title: "Mexican Gothic",
    author: ["Silvia Moreno-Garcia"],
    publishedYear: 0,
    setting: [""],
    genre: ["Horror"],
    age: "Adult",
    type: "Fiction",
    pages: 301,
    medium: "Physical",
    rating: 0,
    dateStarted: "10/12/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 5,
    bookCoverColor: "",
    bookCoverObject: "",
    fav: false,
    tbr: true,
    tbrMonth: "November",
    library: false,
    dedication: { text: "Para mi madre", person: "Mother" }
  },
  {
    title: "The Afterlife of Holly Chase",
    author: ["Cynthia Hand"],
    publishedYear: 0,
    setting: [""],
    genre: ["Retelling"],
    age: "Young Adult",
    type: "Fiction",
    pages: 0,
    medium: "Physical",
    rating: 0,
    dateStarted: "",
    dateFinished: "",
    dnfDate: "",
    progress: "not started",
    pageProgress: 0,
    bookCoverColor: "",
    bookCoverObject: "",
    fav: false,
    tbr: true,
    tbrMonth: "December",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Grown",
    author: ["Tiffany D. Jackson"],
    publishedYear: 2020,
    setting: ["New York City"],
    genre: ["Mystery", "Black", "Thriller"],
    age: "Young Adult",
    type: "Fiction",
    pages: 384,
    medium: "Audio",
    rating: 5,
    dateStarted: "06/16/2022",
    dateFinished: "06/17/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Yellow",
    bookCoverObject: "Woman",
    fav: true,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Such A Fun Age",
    author: ["Kiley Reid"],
    publishedYear: 2019,
    setting: ["Philadelphia", "New York City"],
    genre: ["Race", "Black"],
    age: "Adult",
    type: "Fiction",
    pages: 310,
    medium: "E-Book",
    rating: 5,
    dateStarted: "09/30/2021",
    dateFinished: "10/03/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Blue",
    bookCoverObject: "Text",
    fav: true,
    tbr: true,
    tbrMonth: "October",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "Blackout",
    author: [
      "Dhonielle Clayton",
      "Tiffany D. Jackson",
      "Nic Stone",
      "Angie Thomas",
      "Ashley Woodfolk",
      "Nicola Yoon"
    ],
    publishedYear: 2021,
    setting: ["United States", "New York City"],
    genre: ["Short Stories", "Black", "LGBTQIA+", "Romance"],
    age: "Young Adult",
    type: "Fiction",
    pages: 256,
    medium: "E-Book",
    rating: 3.5,
    dateStarted: "09/28/2021",
    dateFinished: "10/12/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 10,
    bookCoverColor: "Black",
    bookCoverObject: "Bridge",
    fav: false,
    tbr: true,
    tbrMonth: "October",
    library: true,
    dedication: { text: "", person: "" }
  },
  {
    title: "Crier's War",
    author: ["Nina Varela"],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "LGBTQIA+", "Science Fiction", "Dystopia"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "E-Book",
    rating: 5,
    dateStarted: "10/05/2021",
    dateFinished: "10/16/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Gray",
    bookCoverObject: "Words",
    fav: true,
    tbr: true,
    tbrMonth: "October",
    library: true,
    dedication: {
      text: "For the queer readers. You deserve every adventure.",
      person: "LGBTQIA+"
    }
  },
  {
    title: "Iron Heart",
    author: ["Nina Varela"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "LGBTQIA+", "Science Fiction", "Dystopia"],
    age: "Young Adult",
    type: "Fiction",
    pages: 400,
    medium: "Physical",
    rating: 0,
    dateStarted: "10/17/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 10,
    bookCoverColor: "Gold",
    bookCoverObject: "Words",
    fav: false,
    tbr: true,
    tbrMonth: "November",
    library: false,
    dedication: {
      text: "",
      person: ""
    }
  },
  {
    title: "Written in the Stars",
    author: ["Alexandria Bellefleur"],
    publishedYear: 0,
    setting: [""],
    genre: ["Romance"],
    age: "Young Adult",
    type: "Fiction",
    pages: 0,
    medium: "E-Book",
    rating: 0,
    dateStarted: "12/06/2021",
    dateFinished: "",
    dnfDate: "",
    progress: "started",
    pageProgress: 5,
    bookCoverColor: "",
    bookCoverObject: "",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Dread Nation",
    author: ["Justina Ireland"],
    publishedYear: 2018,
    setting: ["United States"],
    genre: [
      "Fantasy",
      "Horror",
      "Historical Fiction",
      "Race",
      "Black",
      "Alternate History"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 455,
    medium: "E-Book",
    rating: 4,
    dateStarted: "10/16/2021",
    dateFinished: "10/22/2021",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Brown",
    bookCoverObject: "Woman",
    fav: false,
    tbr: true,
    tbrMonth: "October",
    library: true,
    dedication: {
      text: "For all the colored girls. I see you. <3",
      person: "Black Girls"
    }
  },
  {
    title: "Ace of Spades",
    author: ["Faridah Àbíké-Íyímídé"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: ["Horror", "Thriller", "LGBTQIA+", "Black", "Race"],
    age: "Young Adult",
    type: "Fiction",
    pages: 470,
    medium: "Physical and Audio",
    rating: 5,
    dateStarted: "06/18/2022",
    dateFinished: "06/19/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Two People",
    fav: false,
    tbr: true,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  },
  {
    title: "Redemptor",
    author: ["Jordan Ifueko"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: ["Fantasy", "LGBTQIA+", "Magic", "Africa", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 336,
    medium: "Physical and Audio",
    rating: 3.5,
    dateStarted: "06/20/2022",
    dateFinished: "06/28/2022",
    dnfDate: "",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Purple",
    bookCoverObject: "Woman's Face",
    fav: false,
    tbr: false,
    tbrMonth: "",
    library: false,
    dedication: { text: "", person: "" }
  }
];
