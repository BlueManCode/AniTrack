export default function build_show(params) {
  return `
  query {
    Media(id: ${params.id}) {
    	coverImage {
    	  extraLarge
    	  large
    	  medium
    	  color
    	}
    	title {
    	  romaji
    	  english
    	  native
    	  userPreferred
    	}
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
    	nextAiringEpisode {
    	  id
    	}
			episodes
  	}
  }
  `
}