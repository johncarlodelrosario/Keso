import { MapPin, Calendar, Clock } from "lucide-react";

export default function EventPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-kesor-dark mb-4 uppercase tracking-tight">
          Upcoming Events
        </h1>
        <p className="text-gray-500 font-medium text-lg">
          Join the Keso community at our latest track days and meetups.
        </p>
      </div>

      <div className="space-y-8">
        {/* Event 1 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300 group">
          <div className="bg-kesor-dark text-white p-8 flex flex-col items-center justify-center min-w-[160px] group-hover:bg-kesor-purple transition-colors duration-300">
            <span className="text-4xl font-black">15</span>
            <span className="text-lg font-bold uppercase tracking-widest text-kesor-red group-hover:text-white">
              Dec
            </span>
            <span className="text-sm text-gray-400 mt-1">2024</span>
          </div>

          <div className="p-8 flex-grow flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Keso Track Day
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join us for a full day of racing and testing the latest Kesor
              performance parts. Meet our pro riders, get suspension tuning
              tips, and experience the thrill of the track.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-kesor-red" /> Clark
                International Speedway
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="text-kesor-red" /> 8:00 AM - 5:00 PM
              </span>
            </div>
          </div>

          <div className="p-8 border-t md:border-t-0 md:border-l border-gray-100 flex items-center justify-center">
            <button className="bg-kesor-red text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors shadow-lg w-full md:w-auto">
              Register Now
            </button>
          </div>
        </div>

        {/* Event 2 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300 group">
          <div className="bg-kesor-dark text-white p-8 flex flex-col items-center justify-center min-w-[160px] group-hover:bg-kesor-purple transition-colors duration-300">
            <span className="text-4xl font-black">28</span>
            <span className="text-lg font-bold uppercase tracking-widest text-kesor-red group-hover:text-white">
              Dec
            </span>
            <span className="text-sm text-gray-400 mt-1">2024</span>
          </div>

          <div className="p-8 flex-grow flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Annual Keso Meetup
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Meet the community, showcase your custom builds, and get exclusive
              discounts on EBikes and parts. Food, drinks, and giveaways await!
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-kesor-red" /> BGC Amphitheater
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="text-kesor-red" /> 4:00 PM - 10:00
                PM
              </span>
            </div>
          </div>

          <div className="p-8 border-t md:border-t-0 md:border-l border-gray-100 flex items-center justify-center">
            <button className="bg-kesor-purple text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-800 transition-colors shadow-lg w-full md:w-auto">
              RSVP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
