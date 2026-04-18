import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [readList, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([])

    const handleMarkAsRead = (currentBook) =>{
        const isExistBook = readList.find(book => book.bookId === currentBook.bookId)
        if(isExistBook)
        {
            toast.error("Book is already exist!")
        }
        else
        {
            setReadList([...readList, currentBook])
            toast.success(`${currentBook.bookName} is added to read list`)
        }
    }

    const handleWishList = (currentBook) =>{

        const isExistInReadList = readList.find((book) => book.bookId === currentBook.bookId)

        if(isExistInReadList)
        {
            toast.error("This book is already in read list");
            return;
        }

        const isExistBook = wishlist.find(book => book.bookId === currentBook.bookId)
        if(isExistBook)
        {
            toast.error("Book is already exist!")
        }
        else
        {
            setWishlist([...wishlist, currentBook])
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
    }

    const data = {
        readList,
        setReadList,
        handleMarkAsRead,
        wishlist,
        setWishlist,
        handleWishList
    }
    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;