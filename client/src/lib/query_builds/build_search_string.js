module.exports = {
  build_search_string(search_term) {
   return `query {
      Page(page: 1, perPage: 10){
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
         media (search: "${search_term}", type: ANIME) {
          id
          idMal
          title {
            romaji
            english
            native
            userPreferred
          }
          status
          description
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
          updatedAt
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
          studios {
            edges {
              id
            }
          }
          nextAiringEpisode {
            id
          }
          airingSchedule {
            edges {
              id
            }
          }
          streamingEpisodes {
            title
            thumbnail
            url
            site
          }
          siteUrl
          seasonInt
          season
          seasonYear
          format
          status
          episodes
          duration
          chapters
          volumes
          isAdult
          genres
          popularity
         }
      }
    }`
  }
}