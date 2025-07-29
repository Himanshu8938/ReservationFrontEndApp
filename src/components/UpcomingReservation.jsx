import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineXCircle,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi";

const reservations = [
  {
    id: 1,
    venueName: "The Grand Cafe",
    date: "2024-08-15",
    time: "19:00",
    partySize: 2,
    status: "Confirmed",
  },
  {
    id: 2,
    venueName: "Ocean's Breeze",
    date: "2024-08-22",
    time: "20:30",
    partySize: 4,
    status: "Confirmed",
  },
  {
    id: 3,
    venueName: "The Rooftop Grill",
    date: "2024-09-01",
    time: "18:00",
    partySize: 5,
    status: "Pending",
  },
];

const statusBadge = (status) => {
  if (status === "Confirmed")
    return (
      <span className="inline-flex items-center px-3 py-1 bg-green-100 border border-green-500 text-green-800 rounded-full text-xs font-bold">
        <HiCheckCircle className="mr-1 text-green-500" /> Confirmed
      </span>
    );
  // Pending style
  return (
    <span className="inline-flex items-center px-3 py-1 bg-yellow-100 border border-yellow-500 text-yellow-800 rounded-full text-xs font-bold">
      <HiExclamationCircle className="mr-1 text-yellow-500" /> Pending
    </span>
  );
};

function UpcomingReservations() {
  const handleCancel = (id) => {
    console.log("Cancel reservation:", id);
  };

  return (
    <section className="w-full max-w-2xl mx-auto mt-10 p-4">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-2xl p-6 mb-6 relative animate-fade-in-down">
        <h2 className="text-3xl font-extrabold text-white mb-1 drop-shadow-lg tracking-tight">
          Upcoming Reservations
        </h2>
        <p className="text-indigo-100 font-medium">
          Never miss your next great meal out!
        </p>
      </div>
      <ul className="space-y-6">
        {reservations.map((res, idx) => (
          <li
            key={res.id}
            className="group bg-white/90 shadow-xl rounded-lg backdrop-blur-lg border-[1.5px] border-indigo-100 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 hover:ring-2 hover:ring-pink-400"
          >
            <div className="flex flex-col md:flex-row md:items-center p-5 gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-pink-600">
                  <HiOutlineLocationMarker className="text-indigo-500" />{" "}
                  {res.venueName}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                  <span className="flex items-center gap-1">
                    <HiOutlineCalendar />{" "}
                    <span className="font-medium">Date:</span> {res.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiOutlineClock />{" "}
                    <span className="font-medium">Time:</span> {res.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiOutlineUserGroup />{" "}
                    <span className="font-medium">Party:</span> {res.partySize}
                  </span>
                </div>
                <div className="mt-3">{statusBadge(res.status)}</div>
              </div>
              <button
                onClick={() => handleCancel(res.id)}
                className="flex items-center gap-2 bg-gradient-to-tr from-red-500 via-pink-500 to-orange-400 text-white font-bold px-5 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 active:scale-95 ring-2 ring-transparent hover:ring-red-200 transition-all duration-200"
                aria-label="Cancel Reservation"
              >
                <HiOutlineXCircle className="text-white text-lg" />
                Cancel
              </button>
            </div>
            {idx < reservations.length - 1 && (
              <div className="border-b border-dashed border-pink-100 mx-6" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UpcomingReservations;
