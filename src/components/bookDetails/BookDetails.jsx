import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
    const {id} = useParams();
    console.log(id)
    // const books = use(booksPromise);
    const books = useLoaderData();
    console.log(books)

    const expectedBook = books.find(book => book.bookId == id)
    console.log(expectedBook)

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = expectedBook

    

    const {handleMarkAsRead, handleWishList} = useContext(BookContext)

    return (
        <div className="grid md:grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
            <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl'>
                <img
                src={image}
                alt="Album" className='h-100' />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <p className='py-2 border-y'>{category}</p>
                <p className='py-2'>Review: {review}</p>
                <div className='flex items-center gap-2'>
                    {tags.map((tag, ind) => (
                <div key={ind} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
                ))}
                </div>
                <div className="border-t space-y-3">
                    <div className='flex justify-between items-center gap-2'>
                        <span>Number Of Pages: </span> <span>{totalPages}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Publisher: </span> <span>{publisher}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Year Of Publishing: </span> <span>{yearOfPublishing}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Rating: </span> <span>{rating}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button onClick={()=> handleMarkAsRead(expectedBook)} className="btn">Mark as Read</button>
                        <button className="btn btn-primary" onClick={() => handleWishList(expectedBook)}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;