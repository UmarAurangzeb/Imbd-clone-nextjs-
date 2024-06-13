// "use client"
import React from 'react'
import Results from '../components/Results'
import PageButtons from '../components/PageButtons'
// import { useRouter } from 'next/navigation';

async function getResults(page, genre) {
  const API_KEY = process.env.API_KEY;
  let res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/day"}?api_key=${API_KEY}&page=${page}`, { next: { revalidate: 10000000 } }).then(response => response.json())
  return res;


}

export default async function Home({ searchParams }) {

  const genre = searchParams.genre || "fetchTrending";
  let page = searchParams.page || 1;
  const res = await getResults(page, genre);

  return (
    <div>
      <Results result={res.results} />
      <PageButtons total_pages={res.total_pages} />
    </div>

  )
}

