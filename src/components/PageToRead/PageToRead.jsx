import React, { useEffect, useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    LabelList,
} from 'recharts';

const PagesToRead = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const chartData = books.map(book => ({
        name: book.bookName,
        pages: book.totalPages
    }));

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-8">
                Pages to Read
            </h2>

            <div className="bg-gray-100 p-10 rounded-3xl shadow-md">

                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={chartData}>

                        <CartesianGrid strokeDasharray="3 3" vertical={false} />

                        <XAxis 
                            dataKey="name" 
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis />

                        <Tooltip />

                        <Area
                            type="linear"
                            dataKey="pages"
                            stroke="#00C49F"
                            fill="#00C49F"
                            dot={{ r: 4 }}
                        >
                            <LabelList dataKey="pages" position="top" />
                        </Area>

                    </AreaChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default PagesToRead;