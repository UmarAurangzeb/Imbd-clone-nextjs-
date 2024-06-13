"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function PageButtons({ total_pages }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const page = Number(searchParams.get("page")) || 1;
    const genre = searchParams.get('genre') || "fetchTrending";
    const router = useRouter();
    const handleBackButton = () => {
        const params = new URLSearchParams(searchParams);
        let newpage = Number(page) - 1;
        params.set('page', newpage);
        params.set('genre', genre);
        replace(`${pathname}?${params.toString()}`);
    }
    const handleNextButton = () => {
        const params = new URLSearchParams(searchParams);
        let newpage = Number(page) + 1;
        params.set('page', newpage);
        params.set('genre', genre);
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div>
            <div className='flex justify-between max-w-6xl mx-auto'>
                <button className='border-2 bg-amber-600 rounded-md p-2 px-4 disabled:bg-gray-500 '
                    disabled={page === 1} onClick={handleBackButton}>Back</button>
                <button className='border-2 bg-amber-600 rounded-md p-2 px-4' disabled={page === total_pages} onClick={handleNextButton} >Next</button>
            </div>
        </div>
    )
}
