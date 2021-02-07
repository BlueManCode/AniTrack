const { build_search_string } = require('./query_builds/build_search_string')

async function get_fetch(input, type, params=[]) {
  const url = 'https://graphql.anilist.co'
  let query = null
  
  // operations to build query string
  switch(type) {
    case 'SEARCH':  
      query = await build_search_string(input)
      break
    default: query = null
      break
  }

  console.log(query)
  // early returns
  if(query === null) return []

  // get query data
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query
    })
  })
  const json = await res.json()
  return json
}


module.exports = {
  get_fetch
}