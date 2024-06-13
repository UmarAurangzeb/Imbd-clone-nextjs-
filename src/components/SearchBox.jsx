"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    let handleSearch = (e) => {
        setSearch(e.target.value);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)
    }

    return (
        <form className='flex px-5 max-w-6xl mx-auto ' onSubmit={handleSubmit}>
            <input type="text" placeholder='search keywords...' className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent' onChange={handleSearch} />
            <button className='text-amber-600 border-2 rounded-md dark:bg-black px-2 py-0 box-border h-8 mt-2 disabled:text-gray-400' disabled={search === ''}>Search</button>
        </form>
    )
}
