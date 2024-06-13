import Results from '../../../components/Results';
import React from 'react'

export default async function page({ params }) {
    const Searchterm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${Searchterm}&api_key=${process.env.API_KEY}`)
    let movie = await res.json();
    let result = movie.results;
    // console.log(result);
    return (
        <div className='max-w-9xl'>
            {!result || result && result.length === 0 ?
                (
                    <h1 className='text-5xl text-red-700  dark:text-amber-400 mt-20 text-center font-bold '>no results found</h1>
                ) : (<Results result={result} />)}
        </div>
    )
}
