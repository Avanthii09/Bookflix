import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
import axios from 'axios'; 
const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch("'https://bookflix-server.vercel.app/api/all-books'").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))

        // fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"Best Seller Books"} />
        </>
    )
}

export default BestSeller