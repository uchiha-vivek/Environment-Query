

const ScrollableCard = () => {
  // Sample data for cards
  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the content of card 1.' },
    { id: 2, title: 'Card 2', content: 'This is the content of card 2.' },
    { id: 3, title: 'Card 3', content: 'This is the content of card 3.' },
    { id: 4, title: 'Card 4', content: 'This is the content of card 4.' },
    { id: 5, title: 'Card 5', content: 'This is the content of card 5.' },
  ];

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl overflow-x-auto px-4 py-8">
        <div className="flex space-x-4 overflow-x-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[90%] md:w-1/5 min-h-[300px] p-4 bg-white rounded-lg shadow-md" // Responsive card width
            >
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableCard;
