import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'


export default function Card({ result }) {
    // console.log(result)
    return (
        <div className='border-2 rounded-sm px-2 dark:border-gray-50 border-black-400 group mr-2 mb-2 ' style={{ width: "300px", height: "300px" }}>

            <Link href={`/movie/${result.id}`} >
                <div className='h-[165px]'>
                    <Image
                        src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`}
                        width={300}
                        height={250}
                        alt='nomovie.jpg'
                        className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 cursor-pointer'
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className=''>
                    <p className='line-clamp-2 text-md '>{result.overview}</p>
                    <h1 className='text-lg font-semibold'>{result.title || result.name}</h1>
                    <p className='flex items-center gap-2'>{result.release_data || result.first_air_date}
                        <FiThumbsUp />
                        {result.vote_count}
                    </p>
                </div>
            </Link>

        </div>
    )
}
