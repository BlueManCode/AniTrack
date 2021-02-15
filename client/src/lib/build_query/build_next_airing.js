export default function build_next_airing(params) {
  return `query {
    AiringSchedule(id: ${params.id}){
    	episode
      airingAt
      timeUntilAiring
  	}
  }`
}