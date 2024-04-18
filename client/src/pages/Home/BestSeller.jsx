// import React, { useEffect, useState } from 'react'
// import BookCards from '../shared/BookCards';
// import axios from 'axios'; 
// const BestSeller = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {

//         fetch("'https://bookflix-server.vercel.app/api/all-books'").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))

//         // fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
//     }, [])

//     return (
//         <>
//             <BookCards books={books} headline={"Best Seller Books"} />
//         </>
//     )
// }

// export default BestSeller

import React, { useEffect, useState } from 'react';
import BookCards from '../shared/BookCards';
import axios from 'axios';

const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Use axios to fetch data from the backend API
        axios.get('https://bookflix-server.vercel.app/api/all-books')
            .then(response => {
                // Update the state with the fetched data
                setBooks(response.data.slice(0, 8));
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching best seller books:', error);
            });
    }, []);

    return (
        <>
            <BookCards books={books} headline={"Best Seller Books"} />
        </>
    );
}

export default BestSeller;
