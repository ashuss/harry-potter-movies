export interface MoviesDetails {
    id: string,
    title: string,
    duration: string,
    budget: string,
    release_date: string
}

export interface MovieData {
    box_office: string,
    budget: string,
    cinematographers: string[],
    duration: string,
    id: string,
    poster: string,
    producers: string[],
    release_date: string,
    summary: string,
    title: string
}