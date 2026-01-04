import React, { useState, useEffect } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);
    // it will run only on first render

    return (
        <>
            {Loading ? (
                <h1> Data loading.....</h1>
            ) : (
                <ul>
                    {data.map(post => (
                        <li key={post.id} >{post.title}  </li>
                    ))}
                </ul>
            )}

        </>
    )
}

export default DataFetcher