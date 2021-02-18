const API_KEY = "5ce4fa64a943503e28207b0af872d5b7" ;

const requests = {
    fetchTrending:  `/trending/all/week?api_key=${API_KEY}&language=en-US` ,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networkd=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US` ,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests ;


// https://api.themoviedb.org/3/discover/tv?api_key=5ce4fa64a943503e28207b0af872d5b7with_networkd=213