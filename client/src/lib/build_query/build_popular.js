export default function build_popular(params) {
  return `query {
    Page(perPage:20, page:1) {
        media(type: ANIME, seasonYear: ${params.season_year}, sort: POPULARITY_DESC, season: ${params.season}) {
        id
        idMal
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
        status
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        startDate {
          year
          month
          day
        }
        nextAiringEpisode {
          id
          timeUntilAiring
          episode
          airingAt
        }
        episodes
        description
        season
        seasonInt
        seasonYear
        isAdult
        duration
        type
        format
        genres
        popularity
        averageScore
    }
  }
}
  `
}