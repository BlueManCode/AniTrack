export default function build_popular(param) {
  return `query {
    Page(page: 1, perPage: 20){
       media (season: ${param.season} , seasonYear: ${param.season_year} , type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
    	}
    }
  }
  `
}