import { MapPin, Phone, ExternalLink } from "lucide-react";

export default function DealerPage() {
  const dealers = [
    {
      name: "Kesor Official Store",
      location: "Manila",
      address: "123 Main St, Manila",
      contact: "0912 345 6789",
    },
    {
      name: "SpeedWorks Motorcycles",
      location: "Quezon City",
      address: "45 Quezon Ave, QC",
      contact: "0987 654 3210",
    },
    {
      name: "Cebu Performance Center",
      location: "Cebu City",
      address: "88 Mango Ave, Cebu",
      contact: "0917 111 2222",
    },
    {
      name: "Davao Cycle Hub",
      location: "Davao City",
      address: "12 Bajada St, Davao",
      contact: "0922 333 4444",
    },
    {
      name: "Northern Luzon Motors",
      location: "Baguio City",
      address: "55 Session Rd, Baguio",
      contact: "0918 555 7777",
    },
    {
      name: "Iloilo Speed Shop",
      location: "Iloilo City",
      address: "10 Diversion Rd, Iloilo",
      contact: "0919 888 9999",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-kesor-dark mb-4 uppercase tracking-tight">
          Authorized Dealers
        </h1>
        <p className="text-gray-500 font-medium text-lg">
          Find genuine Kesor parts near you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dealers.map((dealer, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-kesor-purple/40 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-900 pr-4">
                {dealer.name}
              </h2>
              <span className="bg-kesor-purple/10 text-kesor-purple text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {dealer.location}
              </span>
            </div>

            <div className="space-y-4 mt-6">
              <p className="text-gray-600 flex items-start gap-3 text-sm leading-relaxed">
                <MapPin size={18} className="text-kesor-red shrink-0 mt-0.5" />
                {dealer.address}
              </p>
              <p className="text-gray-900 font-bold flex items-center gap-3 text-sm">
                <Phone size={18} className="text-kesor-red shrink-0" />
                {dealer.contact}
              </p>
            </div>

            <button className="mt-8 w-full flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-bold py-2.5 rounded-lg group-hover:border-kesor-purple group-hover:text-kesor-purple transition-colors">
              View Store <ExternalLink size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
