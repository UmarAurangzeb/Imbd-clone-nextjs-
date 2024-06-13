"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
export default function NavbarHelper({ title, param }) {
    const Searchparam = useSearchParams();
    let genre = Searchparam.get("genre");
    return (
        <Link href={`/?genre=${param}`} className={`hover:text-amber-400 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-2 decoration-amber-500' : ``}`}>
            {title}
        </Link>
    )
}
