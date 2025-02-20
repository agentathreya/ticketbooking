import React, { useState } from 'react';
import { Sun, Calendar, MapPin, Users, CreditCard } from 'lucide-react';

type Match = {
  id: number;
  opponent: string;
  venue: string;
  price: number;
  round: number;
  pitch: string;
};

const matches: Match[] = [
  {
    id: 1,
    opponent: 'Grayman Blitzers',
    venue: 'Chinnaswamy Stadium',
    price: 500,
    round: 1,
    pitch: 'Even',
  },
  {
    id: 2,
    opponent: 'Super Spyders',
    venue: 'RGI Stadium',
    price: 500,
    round: 2,
    pitch: 'Hard',
  },
  {
    id: 3,
    opponent: 'Deccan Chargers',
    venue: "Bull's Ring Arena",
    price: 500,
    round: 3,
    pitch: 'Even',
  },
  {
    id: 4,
    opponent: 'The Darth Vaders',
    venue: "The Vader's Castle",
    price: 500,
    round: 4,
    pitch: 'Even',
  },
  {
    id: 5,
    opponent: 'Thunder Strikers',
    venue: 'RGI Stadium',
    price: 500,
    round: 5,
    pitch: 'Even',
  },
  {
    id: 6,
    opponent: 'Tyrant Yodhas',
    venue: 'Eden Gardens',
    price: 500,
    round: 6,
    pitch: 'Even',
  },
  {
    id: 7,
    opponent: 'The Targaryans',
    venue: "Dragon's Stone",
    price: 500,
    round: 7,
    pitch: 'Hard',
  },
  {
    id: 8,
    opponent: 'Grayman Blitzers',
    venue: 'RGI Stadium',
    price: 500,
    round: 8,
    pitch: 'Hard',
  },
  {
    id: 9,
    opponent: 'Super Spyders',
    venue: 'Chepauk',
    price: 500,
    round: 9,
    pitch: 'Even',
  },
  {
    id: 10,
    opponent: 'Deccan Chargers',
    venue: 'RGI Stadium',
    price: 500,
    round: 10,
    pitch: 'Dusty',
  },
  {
    id: 11,
    opponent: 'The Darth Vaders',
    venue: 'RGI Stadium',
    price: 500,
    round: 11,
    pitch: 'Dusty',
  },
  {
    id: 12,
    opponent: 'Thunder Strikers',
    venue: 'Salarjung Stadium',
    price: 500,
    round: 12,
    pitch: 'Green',
  },
  {
    id: 13,
    opponent: 'Tyrant Yodhas',
    venue: 'RGI Stadium',
    price: 500,
    round: 13,
    pitch: 'Hard',
  },
  {
    id: 14,
    opponent: 'The Targaryans',
    venue: 'RGI Stadium',
    price: 500,
    round: 14,
    pitch: 'Dusty',
  },
];

function App() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [tickets, setTickets] = useState(1);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBooking = (match: Match) => {
    setSelectedMatch(match);
    setShowBookingForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Booking confirmed! ${tickets} ticket(s) for SRH vs ${selectedMatch?.opponent}`
    );
    setShowBookingForm(false);
    setSelectedMatch(null);
    setTickets(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-orange-700">
      {/* Hero Section */}
      <header className="relative h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            filter: 'brightness(0.5)',
          }}
        />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sun className="w-12 h-12 mr-2" />
            <h1 className="text-5xl font-bold">Sunrisers Hyderabad</h1>
          </div>
          <p className="text-xl mt-4">Book Your Match Tickets Now</p>
        </div>
      </header>

      {/* Matches Section */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Season 2024 Matches
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Round {match.round}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  SRH vs {match.opponent}
                </h3>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                  <p className="text-gray-600">{match.venue}</p>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Pitch: {match.pitch}
                  </span>
                </div>
                <p className="text-2xl font-bold text-orange-500 mb-4">
                  ₹{match.price}
                </p>
                <button
                  onClick={() => handleBooking(match)}
                  className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Booking Modal */}
      {showBookingForm && selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Book Tickets</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Match</label>
                <p className="text-gray-900">SRH vs {selectedMatch.opponent}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Venue</label>
                <p className="text-gray-900">{selectedMatch.venue}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Pitch Condition
                </label>
                <p className="text-gray-900">{selectedMatch.pitch}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Number of Tickets
                </label>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={tickets}
                    onChange={(e) => setTickets(parseInt(e.target.value))}
                    className="border rounded-md px-3 py-2 w-full"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Total Amount</label>
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-gray-500 mr-2" />
                  <p className="text-2xl font-bold text-orange-500">
                    ₹{selectedMatch.price * tickets}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
