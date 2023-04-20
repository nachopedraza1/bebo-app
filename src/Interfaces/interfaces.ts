export interface Post {
    id?: string,
    date?: string,
    imgUrl?: string,
    price?: string,
    title?: string,
    category?: string,
    urlVideo?: string,
    description?: string,
}

export interface PostState {
    isLoading: boolean,
    posts: Post[],
}