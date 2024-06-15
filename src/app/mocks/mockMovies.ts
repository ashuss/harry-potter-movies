import { MoviesDetails, MovieData } from '../movieDetails';

const mockMoviesArray: MoviesDetails[] = [
    {
        "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
        "title": "Harry Potter and the Philosopher's Stone",
        "duration": "152",
        "budget": "125",
        "release_date": "2001-11-04"
    }, {
        "id": "1e04ad42-c21f-40d3-9a7e-0a521980c192",
        "title": "Harry Potter and the Chamber of Secrets",
        "duration": "161",
        "budget": "125",
        "release_date": "2002-11-15"
    }, {
        "id": "ab80790f-0f6d-4ca7-bd7e-e7e1f06e6982",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "duration": "142",
        "budget": "130",
        "release_date": "2002-11-15"
    }, {
        "id": "cae233c5-6b08-4201-a665-194110d9c889",
        "title": "Harry Potter and the Goblet of Fire",
        "duration": "157",
        "budget": "150",
        "release_date": "2005-11-06"
    }, {
        "id": "d8a28625-0704-45fe-9be5-cd795eb1b8f4",
        "title": "Harry Potter and the Order of the Phoenix",
        "duration": "138",
        "budget": "150-200",
        "release_date": "2007-07-11"
    }, {
        "id": "37acb245-c015-4bee-be87-c8f7d93d6d24",
        "title": "Harry Potter and the Half-Blood Prince",
        "duration": "153",
        "budget": "250",
        "release_date": "2009-07-07"
    }, {
        "id": "e0fcd0ca-609c-4dd0-82e0-020482856380",
        "title": "Harry Potter and the Deathly Hallows - Part 1",
        "duration": "146",
        "budget": "250",
        "release_date": "2010-11-11"
    }, {
        "id": "ffa6d8a5-4054-46ca-b8e6-9945283c8f18",
        "title": "Harry Potter and the Deathly Hallows – Part 2",
        "duration": "130",
        "budget": "250",
        "release_date": "2011-07-07"
    }, {
        "id": "42f67e56-ec62-4e1a-9c26-04039b0e2494",
        "title": "Fantastic Beasts and Where to Find Them",
        "duration": "133",
        "budget": "175-200",
        "release_date": "2016-11-10"
    }, {
        "id": "2cc602f2-e544-4f00-aec3-6439fad910b9",
        "title": "Fantastic Beasts: The Crimes of Grindelwald",
        "duration": "134",
        "budget": "200",
        "release_date": "2018-11-16"
    }, {
        "id": "bcfd5548-da79-44df-a37b-511aa97d1834",
        "title": "Fantastic Beasts: The Secrets of Dumbledore",
        "duration": "142",
        "budget": "200",
        "release_date": "2022-04-08"
    }
]

const mockMovieData: MovieData =
{
    "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
    "title": "Harry Potter and the Philosopher's Stone",
    "duration": "152",
    "budget": "125",
    "release_date": "2001-11-04",
    "box_office": "1.018",
    "cinematographers": [
        "John Seale"
    ],
    "poster": "https://www.wizardingworld.com/images/products/films/rectangle-1.png",
    "producers": [
        "Chris Columbus",
        "David Heyman",
        "Mark Radcliffe"
    ],
    "summary": "Harry Potter’s dull life is completely changed on his eleventh birthday when a mysterious letter addressed to him arrives in the mail. After finding out about his real parents and a whole hidden wizarding world, he goes on to Hogwarts, his new magical school. From battling a troll to flying on broomsticks to catch golden snitches, Harry’s new life promises to be full of joy and adventure, until he finds out about a certain Dark Lord who murdered his parents is trying to regain power. With his friends Hermione and Ron, Harry sets out to find the philosopher’s stone before Voldemort to prevent his return. After advancing through a particularly difficult set of traps designed by the school, Harry faces the Dark Lord and manages to keep the Philosopher’s Stone safe."
}


export { mockMoviesArray, mockMovieData }