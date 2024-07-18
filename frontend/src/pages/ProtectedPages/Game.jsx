import React, { useState, useEffect } from 'react';
import FullWidthBox from '../../components/Cards/FullWidthBox.jsx';
import axios from 'axios';

const Game = () => {
  const [userNuggets, setUserNuggets] = useState(0); // State to hold user's nuggets
  const [loading, setLoading] = useState(true); // Loading state for fetching nuggets
  const [error, setError] = useState(null); // Error state for fetching nuggets

  useEffect(() => {
    // Fetch user's nuggets from backend
    axios.get('http://localhost:3000/api/v1/getnuggets') // Replace with actual API endpoint
      .then(response => {
        setUserNuggets(response.data.score); // Assuming response has nuggets data
        console.log(response.data.score) ; 
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  console.log(userNuggets)
  const canPlayGame = userNuggets >= 30;

  const boxes = [
    {
      imageSrc: 'https://www.extremetech.com/wp-content/uploads/2014/02/flappy-bird.jpg',
      title: 'Finance Flappy Bird',
      description: 'Dive into the world of finance with Flappy Bird! Navigate through challenges, collecting FD, Stock, and MF coins to earn points. Increase your score as the game speeds up, balancing risk and strategy for maximum success. Test your financial acumen and reflexes in this unique twist on a classic, aiming for high scores and financial mastery!',
      buttonText: canPlayGame ? 'Play Now' : `Need ${30 - userNuggets} more nuggets to play`,
      buttonLink: canPlayGame ? 'https://flappy-bird-one-kappa.vercel.app' : null
    },
    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/56b64ba7d210b80dc90cd22d/1561948465411-9U6YC7WEIEF7QB4J69QV/asset-management-eam.jpg',
      title: 'Asset Management System',
      description: 'Embark on a journey of smart asset management in our project: Strategically craft a diverse portfolio with fixed-rate assets and total capital. Adapt and refine continuously to mitigate potential losses in the face of uncertain future asset rates, ensuring financial stability and growth.',
      buttonText: canPlayGame ? 'Play Now' : `Need ${30 - userNuggets} more nuggets to play`,
      buttonLink: canPlayGame ? 'https://game-simulator-theta.vercel.app/' : null
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading nuggets...</p>}
      {error && <p>Error fetching nuggets: {error}</p>}
      {!loading && !error && (
        <>
          {boxes.map((box, index) => (
            <FullWidthBox
              key={index}
              imageSrc={box.imageSrc}
              title={box.title}
              description={box.description}
              buttonText={box.buttonText}
              buttonLink={box.buttonLink}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Game;
