import Results from '@/components/Results';
import React from 'react'
// const API_KEY = process.env.API_KEY

export default async function SearchPage({params}: any) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${process.env.API_KEY}&query=${params.searchTerm}&include_adult=false&language=en-US&page=1`)

  if(!res.ok) {
    console.log(res)
    throw new Error('Error fetching data')
  }

  const data = await res.json()
  const results = data.results;

  console.log("searchResult", results);

  return (
    <div>
      {results && results.length === 0 &&
        ( <h1>No results found</h1> )
      }
      {results && <Results results={results} />}
    </div>
  )
}
