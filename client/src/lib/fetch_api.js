import build_search_query from './build_query/build_search_query'
import build_popular from './build_query/build_popular'
import build_show from './build_query/build_show'
import build_next_airing from './build_query/build_next_airing'

async function fetch_function(query) {
  const url = "https://graphql.anilist.co"
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body:  JSON.stringify({
      query: query
    })
  }
  const res = await fetch(url, options)
  const json =  await res.json()
  return json
}

export default function fetch_api(type, params = []) {
    let query = ''
    switch(type) {
      case 'SEARCH': query = build_search_query(params)
      break
      case 'POPULAR': query = build_popular(params)
      break
      case 'SHOW': query = build_show(params)
      break
      case 'NEXT_AIRING': query = build_next_airing(params)
      break
      default: console.log('invalid fetch request')
    } 
    return fetch_function(query);
  }