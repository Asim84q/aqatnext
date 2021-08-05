import React from 'react'
import Link from 'next/link';

export default function success() {
    return (
        <div>
            <h1>Done</h1>
            <p>
            <Link href="/">
                <a>Back</a>
            </Link>
            </p>
        </div>
    )
}
