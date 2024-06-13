import React from 'react'
import Card from './Card'
import PageButtons from './PageButtons';
export default function Results({ result }) {

    return (
        <>
            <div className='flex flex-wrap max-w-8xl mx-auto py-4 items-center justify-center '>
                {result &&
                    result.map((result) => (
                        <Card key={result.id} result={result} />
                    ))
                }
            </div>
        </>
    )
}
