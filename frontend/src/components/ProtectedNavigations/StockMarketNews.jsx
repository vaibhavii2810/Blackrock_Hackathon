import React, { useEffect, useState } from 'react';

const StockMarketNews = () => {
    const [articles, setArticles] = useState([]);
    const API_KEY = 'dae01d33597a47bbace6ac8d792b23b5'; // Replace with your actual API key

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=finance OR "stock market" OR "personal finance education"&apiKey=${API_KEY}&pageSize=10`);
            const data = await response.json();
            if (data.status === 'ok') {
                setArticles(data.articles);
            } else {
                console.error('Error fetching news:', data.message);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mt-9 mb-8">Finance <span className='bg-[#8BE4B1] block-inline p-2 rounded-md'>News</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-md overflow-hidden p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                        onClick={() => window.open(article.url, '_blank')}
                    >
                        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                        <p className="mb-2 text-gray-700">{article.description || 'No description available.'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StockMarketNews;
