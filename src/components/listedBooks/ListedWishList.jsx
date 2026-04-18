import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = ({sortingType}) => {
    const {wishlist} = useContext(BookContext)
    const [filteredWishList, setFilteredWishList] = useState(wishlist)
    
        useEffect(()=>{
            if(sortingType)
            {
                if(sortingType === 'pages')
                {
                    const sortedData = [...wishlist].sort((a,b) => a.totalPages - b.totalPages)
                    setFilteredWishList(sortedData)
                }
                else if(sortingType === 'rating')
                {
                    const sortedData = [...wishlist].sort((a,b) => a.rating - b.rating)
                    setFilteredWishList(sortedData)
                }
            }
        },[sortingType, wishlist])

    if(filteredWishList.length === 0)
    {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Wish List Data Found</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                wishlist.map((book, ind) => (
                    <BookCard key={ind} book={book}></BookCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ListedWishList;