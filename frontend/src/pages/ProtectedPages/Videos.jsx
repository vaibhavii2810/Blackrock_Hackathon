import React, { useState } from "react";
import VdoButton from "../../components/Cards/VdoButton";
import { useAddnuggetsMutation } from "../../features/api/apiSlices/userApiSlice";

const Videos = () => {
  const items = [
    {
      id: "Basic Personal Finance Math",
      title: "Basic Personal Finance Math",
      imageSrc: "https://img.youtube.com/vi/qoY2lz5IOGs/sddefault.jpg",
      videoUrl: "https://www.youtube.com/embed/qoY2lz5IOGs",
    },
    {
      id: "Financial Freedom",
      title: "Financial Freedom",
      imageSrc: "https://img.youtube.com/vi/KN0y9lMZQRQ/sddefault.jpg",
      videoUrl: "https://www.youtube.com/embed/KN0y9lMZQRQ",
    },
    {
      id: "Stock Market",
      title: "Stock Market",
      imageSrc: "https://img.youtube.com/vi/HNPbY6fSeo8/sddefault.jpg",
      videoUrl: "https://www.youtube.com/embed/HNPbY6fSeo8",
    },
    {
      id: "Mutual Funds",
      title: "Mutual Funds",
      imageSrc: "https://img.youtube.com/vi/ACpQo1a_RBk/sddefault.jpg",
      videoUrl: "https://www.youtube.com/embed/ACpQo1a_RBk",
    },
    {
      id: "Taxes Explained",
      title: "Taxes Explained",
      imageSrc: "https://img.youtube.com/vi/MQpbxF_RngI/sddefault.jpg",
      videoUrl: "https://www.youtube.com/embed/MQpbxF_RngI",
    },
    {
      id: "SIP",
      title: "SIP",
      imageSrc: "https://img.youtube.com/vi/Wy2aEUmf_OE/sddefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Wy2aEUmf_OE",
    },
  ];

  const questions = [
    {
      question: "What is your name?",
      options: ["Indranil", "Bhavesh", "Aditya", "Atharwa"],
      correctAnswer: "Indranil",
    },
    {
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: "Blue",
    },
    {
      question: "What is your favorite animal?",
      options: ["Dog", "Cat", "Elephant", "Tiger"],
      correctAnswer: "Dog",
    },
    {
      question: "What is your favorite food?",
      options: ["Pizza", "Burger", "Pasta", "Salad"],
      correctAnswer: "Pizza",
    },
    {
      question: "What is your favorite sport?",
      options: ["Football", "Basketball", "Cricket", "Tennis"],
      correctAnswer: "Cricket",
    },
    {
      question: "What is your favorite season?",
      options: ["Spring", "Summer", "Autumn", "Winter"],
      correctAnswer: "Winter",
    },
    {
      question: "What is your favorite movie genre?",
      options: ["Action", "Comedy", "Drama", "Horror"],
      correctAnswer: "Action",
    },
    {
      question: "What is your favorite hobby?",
      options: ["Reading", "Traveling", "Cooking", "Painting"],
      correctAnswer: "Reading",
    },
    {
      question: "What is your favorite subject?",
      options: ["Math", "Science", "History", "Literature"],
      correctAnswer: "Math",
    },
    {
      question: "What is your favorite holiday destination?",
      options: ["Beach", "Mountains", "City", "Countryside"],
      correctAnswer: "Beach",
    },
    {
      question: "What is your favorite beverage?",
      options: ["Tea", "Coffee", "Juice", "Water"],
      correctAnswer: "Coffee",
    },
    {
      question: "What is your favorite book?",
      options: [
        "Harry Potter",
        "Lord of the Rings",
        "Pride and Prejudice",
        "1984",
      ],
      correctAnswer: "Harry Potter",
    },
    {
      question: "What is your favorite music genre?",
      options: ["Rock", "Pop", "Classical", "Jazz"],
      correctAnswer: "Rock",
    },
    {
      question: "What is your favorite time of day?",
      options: ["Morning", "Afternoon", "Evening", "Night"],
      correctAnswer: "Morning",
    },
    {
      question: "What is your favorite ice cream flavor?",
      options: ["Vanilla", "Chocolate", "Strawberry", "Mint"],
      correctAnswer: "Chocolate",
    },
  ];

  const financeQuestions = [
    {
      question: "What is the primary goal of budgeting in personal finance?",
      options: ["Growth", "Stability", "Investment", "Savings"],
      correctAnswer: "Stability",
    },
    {
      question: "How is compound interest different from simple interest?",
      options: ["Fixed", "Accumulated", "Single", "Variable"],
      correctAnswer: "Accumulated",
    },
    {
      question: "What formula is used to calculate simple interest?",
      options: [
        "I = P × r × t",
        "I = P + r + t",
        "I = P / r / t",
        "I = P - r - t",
      ],
      correctAnswer: "I = P × r × t",
    },
    {
      question:
        "Why is it important to understand the time value of money in personal finance?",
      options: ["Earnings", "Expenses", "Investments", "Decisions"],
      correctAnswer: "Decisions",
    },
    {
      question: "What is the 'Rule of 72' and how is it used?",
      options: ["Savings", "Doubling", "Halving", "Budgeting"],
      correctAnswer: "Doubling",
    },
    {
      question: "What are the benefits of creating an emergency fund?",
      options: ["Growth", "Investment", "Security", "Expenses"],
      correctAnswer: "Security",
    },
    {
      question:
        "How does one calculate the monthly payment for a loan using the annuity formula?",
      options: ["Sum", "Formula", "Subtraction", "Division"],
      correctAnswer: "Formula",
    },
    {
      question:
        "What is the importance of having a diversified investment portfolio?",
      options: ["Growth", "Savings", "Investment", "Risk"],
      correctAnswer: "Risk",
    },
    {
      question:
        "What factors should be considered when planning for retirement?",
      options: ["Income", "Expenses", "Savings", "Investments"],
      correctAnswer: "Expenses",
    },
    {
      question: "How can credit card debt impact personal finances?",
      options: ["Growth", "Savings", "Investment", "Burden"],
      correctAnswer: "Burden",
    },
  ];

  const financialFreedomQuestions = [
    {
      question: "What is the primary topic of the video?",
      options: ["Freedom", "Investment", "Budgeting", "Savings"],
      correctAnswer: "Freedom",
    },
    {
      question:
        "What is the starting capital mentioned in the video for achieving financial freedom?",
      options: ["10000", "15000", "20000", "25000"],
      correctAnswer: "20000",
    },
    {
      question:
        "What is the first step suggested in the video for financial planning?",
      options: ["Investing", "Saving", "Budgeting", "Spending"],
      correctAnswer: "Budgeting",
    },
    {
      question: "Which type of fund is emphasized for security in emergencies?",
      options: ["Savings", "Mutual", "Emergency", "Retirement"],
      correctAnswer: "Emergency",
    },
    {
      question: "What investment type is highlighted for steady returns?",
      options: ["Stocks", "Real Estate", "Mutual", "Cryptocurrency"],
      correctAnswer: "Mutual",
    },
    {
      question: "What financial instrument is recommended for long-term goals?",
      options: [
        "Fixed Deposit",
        "SIP (Systematic Investment Plan)",
        "Bonds",
        "Recurring Deposit",
      ],
      correctAnswer: "SIP (Systematic Investment Plan)",
    },
    {
      question: "What is a key practice for reducing unnecessary expenses?",
      options: ["Investing", "Budgeting", "Tracking", "Saving"],
      correctAnswer: "Tracking",
    },
    {
      question: "Which tool is advised for monitoring financial progress?",
      options: ["Spreadsheet", "Journal", "App", "Diary"],
      correctAnswer: "App",
    },
    {
      question: "What term is used for avoiding impulsive purchases?",
      options: ["Saving", "Investing", "Discipline", "Budgeting"],
      correctAnswer: "Discipline",
    },
    {
      question:
        "What is the suggested strategy for handling high-interest debt?",
      options: ["Investing", "Saving", "Repayment", "Budgeting"],
      correctAnswer: "Repayment",
    },
  ];

  const stockMarketQuestions = [
    {
      question: "Who is the target audience for the video?",
      options: ["Beginners", "Experts", "Intermediate", "Professionals"],
      correctAnswer: "Beginners",
    },
    {
      question: "What is the primary subject of the video?",
      options: ["Trading", "Investing", "Saving", "Budgeting"],
      correctAnswer: "Investing",
    },
    {
      question: "Which market is the focus of the video?",
      options: ["Stock", "Bond", "Commodity", "Currency"],
      correctAnswer: "Stock",
    },
    {
      question: "What is the first tip mentioned for new investors?",
      options: ["Saving", "Research", "Speculation", "Trading"],
      correctAnswer: "Research",
    },
    {
      question: "Which investment strategy is highlighted for reducing risk?",
      options: ["Diversification", "Speculation", "Trading", "Saving"],
      correctAnswer: "Diversification",
    },
    {
      question: "What is recommended to have before investing?",
      options: ["Money", "Knowledge", "Broker", "App"],
      correctAnswer: "Knowledge",
    },
    {
      question: "What should investors avoid according to the video?",
      options: ["Trading", "Saving", "Speculation", "Diversification"],
      correctAnswer: "Speculation",
    },
    {
      question: "What is emphasized as a key to successful investing?",
      options: ["Patience", "Quick Decisions", "Speculation", "Trading"],
      correctAnswer: "Patience",
    },
    {
      question: "Which type of stocks is suggested for long-term growth?",
      options: ["Penny Stocks", "Growth Stocks", "Blue-chip", "Speculative"],
      correctAnswer: "Blue-chip",
    },
    {
      question: "What should investors regularly monitor?",
      options: ["Market Trends", "Portfolio", "News", "Interest Rates"],
      correctAnswer: "Portfolio",
    },
  ];

  const mutualFundsQuestions = [
    {
      question: "What is the main focus of the video 'Mutual Funds'?",
      options: ["Growth", "Diversification", "Returns", "Investing"],
      correctAnswer: "Returns",
    },
    {
      question:
        "What is emphasized as a key strategy for investing in mutual funds?",
      options: ["Diversification", "Savings", "Budgeting", "Insurance"],
      correctAnswer: "Diversification",
    },
    {
      question: "How are mutual funds different from individual stocks?",
      options: ["Risk", "Ownership", "Returns", "Volatility"],
      correctAnswer: "Risk",
    },
    {
      question: "What is recommended before investing in mutual funds?",
      options: ["Research", "Savings", "Budgeting", "Insurance"],
      correctAnswer: "Research",
    },
    {
      question: "What is the primary advantage of mutual funds?",
      options: ["Diversification", "Returns", "Simplicity", "Flexibility"],
      correctAnswer: "Diversification",
    },
    {
      question:
        "What should investors monitor regularly when investing in mutual funds?",
      options: ["Performance", "Volatility", "Ownership", "Dividends"],
      correctAnswer: "Performance",
    },
    {
      question:
        "What is recommended to understand before choosing a mutual fund?",
      options: ["Fees", "Ownership", "Returns", "Volatility"],
      correctAnswer: "Fees",
    },
    {
      question:
        "What role do financial advisors play in mutual fund investments?",
      options: ["Guidance", "Ownership", "Returns", "Volatility"],
      correctAnswer: "Guidance",
    },
    {
      question: "What is a common concern related to mutual fund investments?",
      options: ["Risk", "Ownership", "Returns", "Volatility"],
      correctAnswer: "Risk",
    },
    {
      question:
        "What is emphasized as a key to successful mutual fund investing?",
      options: ["Patience", "Timing", "Strategy", "Luck"],
      correctAnswer: "Patience",
    },
  ];

  const taxesExplainedQuestions = [
    {
      question: "What is the purpose of income taxes?",
      options: ["Revenue", "Growth", "Investment", "Profit"],
      correctAnswer: "Revenue",
    },
    {
      question: "What does property tax depend on?",
      options: ["Ownership", "Location", "Income", "Value"],
      correctAnswer: "Ownership",
    },
    {
      question: "Which type of tax applies to purchases?",
      options: ["Sales", "Income", "Property", "Corporate"],
      correctAnswer: "Sales",
    },
    {
      question: "What are sin taxes associated with?",
      options: ["Specific goods", "Services", "Income", "Investments"],
      correctAnswer: "Specific goods",
    },
    {
      question: "What do capital gains taxes relate to?",
      options: ["Profits", "Sales", "Income", "Expenses"],
      correctAnswer: "Profits",
    },
    {
      question: "What is the primary purpose of estate taxes?",
      options: ["Inherited wealth", "Income", "Growth", "Investment"],
      correctAnswer: "Inherited wealth",
    },
    {
      question: "What is the opposite of a progressive tax system?",
      options: ["Regressive", "Flat", "Income-based", "Property-based"],
      correctAnswer: "Regressive",
    },
    {
      question: "What does VAT stand for?",
      options: [
        "Value Added Tax",
        "Value Assessment Tax",
        "Value Adjustment Tax",
        "Variable Added Tax",
      ],
      correctAnswer: "Value Added Tax",
    },
    {
      question:
        "What is the tax rate for long-term capital gains in some countries?",
      options: ["Lower", "Higher", "Equal", "Zero"],
      correctAnswer: "Lower",
    },
    {
      question: "What is the term for avoiding taxes legally?",
      options: ["Tax planning", "Tax evasion", "Tax avoidance", "Tax fraud"],
      correctAnswer: "Tax planning",
    },
  ];

  const sipQuestions = [
    {
      question: "What is SIP, and how does it work?",
      options: ["Investing", "Savings", "Spending", "Borrowing"],
      correctAnswer: "Investing",
    },
    {
      question: "What benefit does SIP offer without timing the stock market?",
      options: ["Regular", "Irregular", "Inconsistent", "Delayed"],
      correctAnswer: "Regular",
    },
    {
      question:
        "What strategy does SIP benefit from, involving buying shares at various prices over time?",
      options: ["Averaging", "Maximizing", "Minimizing", "Stagnating"],
      correctAnswer: "Averaging",
    },
    {
      question:
        "What is Step-Up SIP, and how does it help build a bigger corpus?",
      options: ["Gradual", "Sudden", "Immediate", "Delayed"],
      correctAnswer: "Gradual",
    },
    {
      question: "What is the primary purpose of SIP in mutual funds?",
      options: ["Systematic", "Haphazard", "Disorganized", "Random"],
      correctAnswer: "Systematic",
    },
    {
      question: "What intervals are used for SIP investments?",
      options: ["Predefined", "Flexible", "Dynamic", "Static"],
      correctAnswer: "Predefined",
    },
    {
      question: "What type of investment plan is SIP?",
      options: ["Fixed", "Variable", "Permanent", "Temporary"],
      correctAnswer: "Fixed",
    },
    {
      question: "What does SIP allow you to do with your investments?",
      options: ["Invest", "Spend", "Save", "Borrow"],
      correctAnswer: "Invest",
    },
    {
      question: "What is the opposite of lump-sum investing?",
      options: ["Regular", "Irregular", "One-time", "Occasional"],
      correctAnswer: "Regular",
    },
    {
      question: "What does SIP stand for?",
      options: ["Systematic", "Structured", "Sequential", "Scheduled"],
      correctAnswer: "Systematic",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [score, setScore] = useState(null);
  const [addNugget, { isLoading: addnuggetsLoading }] = useAddnuggetsMutation();
  const handleItemClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setShowModal(true);
  };

  const handleQuizClick = (item) => {
    if (item.id === "Basic Personal Finance Math") {
      setCurrentQuestions(financeQuestions);
    } else if (item.id === "Financial Freedom") {
      setCurrentQuestions(financialFreedomQuestions);
    } else if (item.id === "Stock Market") {
      setCurrentQuestions(stockMarketQuestions);
    } else if (item.id === "This Is YouTube") {
      setCurrentQuestions(thisIsYouTubeQuestions);
    } else if (item.id === "Mutual Funds") {
      setCurrentQuestions(mutualFundsQuestions);
    } else if (item.id === "Taxes Explained") {
      setCurrentQuestions(taxesExplainedQuestions);
    } else if (item.id === "SIP") {
      setCurrentQuestions(sipQuestions);
    } else {
      setCurrentQuestions(
        questions.sort(() => 0.5 - Math.random()).slice(0, 10)
      );
    }
    setShowQuizModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideoUrl("");
  };

  const closeQuizModal = () => {
    setShowQuizModal(false);
    setScore(null);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    let score = 0;
    const formData = new FormData(e.target);
    currentQuestions.forEach((q, index) => {
      if (formData.get(`question-${index}`) === q.correctAnswer) {
        score++;
      }
    });
    setScore(score);

    const addPoints = async () => {

      const updatedScore = score*10;
      const res = await addNugget({score : updatedScore});
      console.log("res : ", res);
    };

    addPoints();

    console.log(currentQuestions);
  };

  return (
    <div>
      <div className="mt-3 text-center">
        <h1 className="text-4xl font-bold text mb-8">
          Quiz{" "}
          <span className="bg-[#8BE4B1] inline-block rounded-md p-2">
            Videos
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-9">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-2xl shadow-lg relative overflow-hidden"
            style={{
              backgroundImage: `url(${item.imageSrc})`,
              backgroundSize: "cover",
              height: "350px",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <VdoButton
                imageSrc={item.imageSrc}
                onClick={() => handleItemClick(item.videoUrl)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="absolute top-2 left-0 right-0 text-center text-white">
              <p className="text-lg font-bold">{item.title}</p>
            </div>
            <div className="absolute bottom-4 left-4">
              <button
                className="bg-white text-gray-800 hover:text-red-600 hover:bg-red-100 py-2 px-3 rounded-full shadow-md focus:outline-none"
                onClick={() => handleQuizClick(item)}
              >
                Take Quiz
              </button>
            </div>
            <button
              className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transform transition hover:scale-105 focus:outline-none"
              onClick={() => handleItemClick(item.videoUrl)}
            >
              Watch Video
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-black bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-md focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
            <iframe
              width="100%"
              height="500px"
              src={currentVideoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
            ></iframe>
          </div>
        </div>
      )}

      {showQuizModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div
            className="bg-white p-4 rounded-lg w-full max-w-3xl relative"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <button
              className="absolute top-2 right-2 text-black bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-md focus:outline-none"
              onClick={closeQuizModal}
            >
              Close
            </button>
            <form className="mt-4 text-left" onSubmit={handleSubmit}>
              {currentQuestions.map((q, index) => (
                <div key={index} className="mb-4">
                  <h2 className="text-2xl font-bold mb-2">{q.question}</h2>
                  {q.options.map((option, i) => (
                    <label key={i} className="block text-gray-700">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md focus:outline-none"
              >
                Submit
              </button>
            </form>
            {score !== null && (
              <div className="mt-4 text-2xl font-bold text-center">
                Your score: {score} / {currentQuestions.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
