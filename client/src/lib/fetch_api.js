import build_search_query from './build_query/build_search_query'

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
      default: console.log('invalid fetch request')
    } 
    return fetch_function(query);
  }