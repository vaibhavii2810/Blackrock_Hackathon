import React from 'react'; 
import StockMarketNews from '../../components/ProtectedNavigations/StockMarketNews' 
const articles = [ 
  { 
    title: 'The Importance of Saving Money', 
    description: 'An insightful article on why saving money is crucial for financial health.', 
    author: 'John Doe', 
    link: 'https://mkobo.medium.com/the-importance-of-saving-money-985198caf016', 
  }, 
  { 
    title: 'Value Investing 101: How to Become a Value Investor', 
    description: 'Guide to mastering value investing principles, strategies, and breaking in.', 
    author: 'Brian DeChesare', 
    link: 'https://mergersandinquisitions.com/value-investing/', 
  }, 
  { 
    title: 'Non-Fungible Tokens (NFTs) and Brand Building', 
    description: 'NFTs, like Bored Ape Yacht Club, redefine brand building by offering ownership, community engagement, and exclusive experiences, transforming digital asset interaction.', 
    author: 'Scott Duke Kominers', 
    link: 'https://hbswk.hbs.edu/item/cold-call-non-fungible-tokens-nfts-and-brand-building', 
  }, 
  { 
    title: 'When Does Impact Investing Make the Biggest Impact', 
    description: 'More investors want to back businesses that contribute to social change, but are impact funds the only approach? Research by Shawn Cole, Leslie Jeng, Josh Lerner, Natalia Rigol, and Benjamin Roth', 
    author: 'Rachel Layne', 
    link: 'https://hbswk.hbs.edu/item/when-does-impact-investing-make-the-biggest-impact', 
  }, 
  { 
    title: 'More Than Memes: NFTs Could Be the Next Gen Deed for a Digital World', 
    description: 'Non-fungible tokens might seem like a fad approach to selling memes, but the concept could help companies open new markets and build communities. Scott Duke Kominers and Steve Kaczynski go beyond the NFT hype in their book, The Everything Token.', 
    author: 'Dina Gerdeman', 
    link: 'https://hbswk.hbs.edu/item/more-than-memes-nfts-could-be-the-next-gen-deed-for-a-digital-world', 
  }, 
  { 
    title: 'Weighing Digital Tradeoffs in Private Equity: Do Costly Upgrades Pay Off?', 
    description: "Private equity firms often streamline the operations of portfolio companies, but cost-cutting isn't the only road to efficiency. The right technology improvements can increase the value of PE investments, says research by Brian Baik and Suraj Srinivasan.", 
    author: 'Michael Blanding', 
    link: 'https://hbswk.hbs.edu/item/weighing-digital-tradeoffs-in-private-equity-do-costly-upgrades-pay-off', 
  }, 
  { 
    title: "After the 'Crypto Crash,' What's Next for Digital Currencies?", 
    description: "After soaring to dizzying levels, Bitcoin and other cryptocurrencies have lost more than half of their value in recent months. Scott Duke Kominers discusses crypto's volatility, potential for regulation, and why these digital assets are likely here to stay", 
    author: 'Christina Pazzanese', 
    link: 'https://hbswk.hbs.edu/item/after-the-crypto-crash-whats-next-for-digital-currencies', 
  }, 
 
 
  // Add more articles here 
]; 
 
const Articles = () => { 
  return ( 
    <div className="container mx-auto p-4"> 
      <h1 className="text-4xl font-bold text-center mb-8">Articles</h1> 
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {articles.map((article, index) => ( 
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" 
          > 
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3> 
            <p className="mb-2 text-gray-700">{article.description}</p> 
            <p className="mb-4 text-sm bg-[#F87171] inline-block rounded-md p-2 font-semibold">By {article.author}</p> 
            <br /> 
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-700 underline transition-colors duration-300" 
            > 
              Read more</a> 
          </div> 
        ))} 
      </div> 
      <StockMarketNews/> 
    </div> 
  ); 
}; 
 
export default Articles;