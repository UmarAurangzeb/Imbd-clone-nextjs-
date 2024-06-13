"use client";
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import NavbarHelper from './NavbarHelper'
export default function Navbar() {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    return (
        <div className='flex gap-x-2 marging-auto bg-orange-200 py-4  font-semibold justify-center dark:bg-gray-600 lg:text-lg text-md'>
            <NavbarHelper title="Trending" param="fetchTrending" />
            <NavbarHelper title="Top Rated" param="fetchTopRated" />
        </div>

    )
}
