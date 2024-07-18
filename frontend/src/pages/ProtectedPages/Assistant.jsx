import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Assistant = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = 'AIzaSyBGiZEA9xo-gn2Y4rnUHmcxeY5mEK5O4Us';
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    stopSequences: ['END CHAT'],
    responseMimeType: 'text/plain',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const chatSession = await model.startChat({
        generationConfig,
        history: [
          {
            role: 'user',
            parts: [
              { text: "You are an AI assistant integrated into a financial education and management application for students. Your tasks include providing personalized financial tips, helping users set and track financial goals, offering educational assistance on financial concepts, predicting future expenses, and sending alerts and notifications. Here is the detailed user data and requirements for each task:\n\n1. **User Data**\n- User ID: {userId}\n- Income: {userIncome}\n- Expenses: {userExpenses}\n- Financial Goals: {userGoals}\n- Spending Patterns: {userSpendingPatterns}\n- Upcoming Bills and Due Dates: {userDueDates}\n\n2. **Tasks**\n\n**Personalized Financial Tips**\nAnalyze the user's spending patterns and provide tips on how they can save money, optimize their budget, and reduce unnecessary expenses.\n\n**Goal Setting and Tracking**\nHelp the user set realistic financial goals based on their income and expenses. Track their progress towards these goals and provide encouragement or adjustments as needed.\n\n**Educational Assistance**\nOffer explanations and tutorials on financial concepts such as budgeting, saving, investing, and loans. Provide interactive quizzes and challenges to engage the user.\n\n**Expense Predictions**\nPredict future expenses based on current spending trends and alert the user to potential budget overruns. Identify patterns in seasonal spending and help the user prepare for upcoming expenses.\n\n**Alerts and Notifications**\nSend reminders for upcoming bills and due dates. Notify the user when they are nearing or exceeding their budget limits in specific categories. Provide alerts for significant changes in spending patterns and suggest adjustments as necessary.\n\noutput should be small and simple under 100 words \nand output should be formatted well such that it is good to see \n\n" },
            ],
          },
          {
            role: 'model',
            parts: [
              { text: "##  Student Finance AI Assistant - Ready to Help! \n\n💰 **Here's how I can help you with your finances:**\n\n* **Smart Spending Tips:**  Analyze your spending and find ways to save money.\n* **Goal Crusher:** Set achievable financial goals and track your progress. \n* **Finance Guru:**  Learn about budgeting, saving, and investing.\n* **Expense Forecaster:** Predict future costs and avoid budget surprises.\n* **Helpful Reminders:** Get bill reminders and budget alerts. \n\nLet's make smart financial decisions together! 💪 \n" },
            ],
          },
          {
            role: 'user',
            parts: [
              { text: "USER ID: Bhavesh Mankar\nINCOME: 50000\nEXPENSE: 35000\nFinancial goal: Buying a bike in the next two years worth 20000\nSpending Patterns: Spending mostly on 3 duties\nBills: included in expense which is average\n" },
            ],
          },
          {
            role: 'model',
            parts: [
              { text: "## Bhavesh, let's get you that bike! 🚲 \n\n**Based on your income and expenses, here's a snapshot:**\n\n* **Monthly Savings Potential:** ₹15,000 \n* **Bike Fund in 2 Years:** ₹3,60,000 (enough for your bike!)\n\n**I can help you:**\n\n* **Find hidden savings:**  Let's see if we can optimize those 3 main expenses. \n* **Track your bike fund:** Stay motivated and adjust your plan as needed. \n\nReady to roll towards your goal? 😉 \n" },
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage(input);
      setResponse(result.response.text());
    } catch (error) {
      console.error('Error:', error);
      setResponse('There was an error processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text">Finance <span className='bg-[#8BE4B1] block-inline p-2 rounded-md'>Assistant</span></h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          rows="5"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          className="bg-[#F988AF] text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {response && (
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Assistant;
