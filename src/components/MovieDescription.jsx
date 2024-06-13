import React from 'react'

export default function MovieDescription({ title, description }) {
    return (
        <p><span className='font-semibold mr-1'>{title}</span>{description}</p>
    )
}
