import React, { useState } from "react";

const RightBar: React.FC = () => {
  interface StudyEvent {
    id: string;
    title: string;
    time: string;
    type: "class" | "study" | "assignment";
  }

  interface EventsByDate {
    [key: string]: StudyEvent[];
  }

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<EventsByDate>({});
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    time: "09:00",
    type: "class" as const,
  });

  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();

  const getDaysInMonth = (): (Date | null)[] => {
    const firstDay = new Date(year, currentDate.getMonth(), 1);
    const lastDay = new Date(year, currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    return [
      ...Array(startingDay).fill(null),
      ...Array.from(
        { length: daysInMonth },
        (_, i) => new Date(year, currentDate.getMonth(), i + 1)
      ),
    ];
  };

  const formatDateKey = (date: Date): string =>
    date.toISOString().split("T")[0];
  const hasEvents = (date: Date): boolean =>
    !!events[formatDateKey(date)]?.length;
  const isToday = (date: Date): boolean =>
    date.toDateString() === new Date().toDateString();
  const isSelected = (date: Date): boolean =>
    date.toDateString() === selectedDate.toDateString();

  const saveEvent = () => {
    if (!newEvent.title.trim()) return;

    const event = {
      id: Date.now().toString(),
      ...newEvent,
    };

    const key = formatDateKey(selectedDate);
    setEvents((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), event],
    }));

    setShowModal(false);
    setNewEvent({ title: "", time: "09:00", type: "class" });
  };

  const selectedEvents = events[formatDateKey(selectedDate)] || [];
  const days = getDaysInMonth();
  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="bg-white shadow-sm border border-gray-100 p-3 w-[18%] text-xs">
      <div className="flex justify-between items-center mb-3">
        <div className="font-poppins font-semibold text-[#102844]">
          {month} {year}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() =>
              setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1))
            }
            className="w-5 h-5 flex items-center justify-center bg-gray-50 rounded text-[#102844] hover:bg-[#0D9165] hover:text-white"
          >
            ‹
          </button>
          <button
            onClick={() =>
              setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1))
            }
            className="w-5 h-5 flex items-center justify-center bg-gray-50 rounded text-[#102844] hover:bg-[#0D9165] hover:text-white"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-0.5 mb-3">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-[#767278] py-1 text-[10px]"
          >
            {day}
          </div>
        ))}

        {days.map((day, i) =>
          day ? (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center rounded text-[10px] cursor-pointer transition-all
                ${isToday(day) ? "border border-[#0D9165]" : ""}
                ${
                  isSelected(day)
                    ? "bg-[#0D9165] text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }
              `}
              onClick={() => setSelectedDate(day)}
            >
              <div className="flex flex-col items-center">
                <span>{day.getDate()}</span>
                {hasEvents(day) && (
                  <div
                    className={`w-1 h-1 rounded-full mt-0.5 ${
                      isSelected(day) ? "bg-white" : "bg-[#0D9165]"
                    }`}
                  />
                )}
              </div>
            </div>
          ) : (
            <div key={i} className="aspect-square" />
          )
        )}
      </div>

      <div className="border-t border-gray-100 pt-2">
        <div className="text-[#102844] font-medium mb-2">
          {selectedDate.getDate()}{" "}
          {selectedDate.toLocaleString("default", { month: "short" })}
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-[#0D9165] text-white py-3 rounded text-[10px] font-medium hover:bg-[#17B883] transition-colors mb-2"
        >
          + Add Event
        </button>
               {/* Upcoming Event */}
        <div
          className={
            selectedEvents.length > 3 ? "max-h-[150px] overflow-y-auto" : ""
          }
        > 
        <p className="text-[14px] mb-2">Upcoming Event</p>
          {selectedEvents.map((event) => (
            <div  
              key={event.id}
              className="flex items-center gap-2 p-1 py-3 bg-[#0D9165] text-white rounded mb-1"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  event.type === "class"
                    ? "bg-blue-400"
                    : event.type === "study"
                    ? "bg-green-400"
                    : "bg-amber-400"
                }`}
              />
              <span className="truncate flex-1 text-xs">
                {event.time} {event.title}
              </span>
            </div>
          ))}
        </div>

        {selectedEvents.length === 0 && (
          <div className="text-center text-gray-500 text-xs py-2">
            No events for today
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 w-full max-w-[280px] text-xs">
            <h3 className="font-poppins font-semibold text-[#102844] mb-3">
              Add Event
            </h3>

            <div className="space-y-2">
              <div>
                <input
                  type="text"
                  placeholder="Event title"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full p-2 border border-gray-200 rounded text-xs"
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) =>
                    setNewEvent((prev) => ({ ...prev, time: e.target.value }))
                  }
                  className="flex-1 p-2 border border-gray-200 rounded text-xs"
                />
                <select
                  value={newEvent.type}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      type: e.target.value as any,
                    }))
                  }
                  className="flex-1 p-2 border border-gray-200 rounded text-xs"
                >
                  <option value="class">Class</option>
                  <option value="study">Study</option>
                  <option value="assignment">Assignment</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 bg-gray-100 text-[#102844] rounded font-medium"
              >
                Cancel
              </button>
              <button
                onClick={saveEvent}
                className="flex-1 py-2 bg-[#0D9165] text-white rounded font-medium hover:bg-[#17B883]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightBar;
