import Image from 'next/image';
import React from 'react'
import MovieDescription from '../../../components/MovieDescription'
export const dynamic = 'force-dynamic'
export default async function Page(movieId) {
    let API_KEY = process.env.API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId.params.id}?api_key=${API_KEY}`);
    const movie = await res.json();
    console.log(movie);
    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 items-center mt-4 px-4 content-center overflow-hidden flex-none max-w-6xl mx-auto '>
                <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
                    className=''
                    width={500}
                    height={500}
                />
                <div className='flex flex-col 
                text-lg mb-2 relative top-0 sm:text-sm gap-2'>
                    <h1 className='font-semibold '>{movie.title}</h1>
                    <MovieDescription title="Overview:" description={movie.overview} />
                    <MovieDescription title="Date Released:" description={movie.release_date} />
                    <MovieDescription title="Rating:" description={movie.vote_average} />
                </div>
            </div>


        </>

    )
}
