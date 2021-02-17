import fetch_api from '../lib/fetch_api'

export default async function fetch_shows_trending(results, params) {
 
  // check cache time
  // if cachetime more then 60 mins, re-fetch all data
  if (await cache_time_over()) {
    get_fetch();
  } 
  // else get cache data
  else {
    console.log("data cache available");
  }

  // function to fetch popular shows
  async function get_fetch() {
    // fetch option
    const option = {
      season: `${params.season}`,
      season_year: params.season_year,
    };
    const popular_shows_data = await fetch_api("POPULAR", option);
    
    // save fetched data to the cache
    localStorage.setItem(
      `${params.cache_unit}`,
      JSON.stringify({
        cache_time: Date.now(),
        cache_data: popular_shows_data.data.Page.media,
      })
    );
    // set results
    results.value = popular_shows_data.data.Page.media;
  }
  
  // function to check if cache is still up to date
  async function cache_time_over() {
    const ls = await JSON.parse(localStorage.getItem(`${params.cache_unit}`));
    if (!ls) {
      return true;
    }
    // cache time not over
    if (ls.cache_time > Date.now() - 3600 * 1000) {
      // set data
      results.value = ls.cache_data;
      return false;
    }
    // cache time over
    else {
      return true;
    }
  }
}

// function to convert the next airing shows time
export function convert_next_airing(time_remaining) {
  return {
    day: Math.floor(time_remaining / (3600 * 24)),
    hour: Math.floor((time_remaining % (3600 * 24)) / 3600),
    min: Math.floor((time_remaining % 3600) / 60),
  };
}

// function to convert the end date time
export function convert_end_date(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${(date.day ? date.day : '') + " " + months[date.month - 1]}`;
}
