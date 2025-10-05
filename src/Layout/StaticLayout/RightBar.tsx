// import React, { useState } from "react";

// const RightBar: React.FC = () => {
//   interface StudyEvent {
//     id: string;
//     title: string;
//     time: string;
//     type: "class" | "study" | "assignment";
//     date: string;
//   }

//   interface EventsByDate {
//     [key: string]: StudyEvent[];
//   }

//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState<EventsByDate>({});
//   const [showModal, setShowModal] = useState(false);
//   const [editingEvent, setEditingEvent] = useState<StudyEvent | null>(null);
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     time: "09:00",
//     type: "class" as const,
//   });

//   const month = currentDate.toLocaleString("default", { month: "short" });
//   const year = currentDate.getFullYear();

//   const getDaysInMonth = (): (Date | null)[] => {
//     const firstDay = new Date(year, currentDate.getMonth(), 1);
//     const lastDay = new Date(year, currentDate.getMonth() + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDay = firstDay.getDay();

//     return [
//       ...Array(startingDay).fill(null),
//       ...Array.from(
//         { length: daysInMonth },
//         (_, i) => new Date(year, currentDate.getMonth(), i + 1)
//       ),
//     ];
//   };

//   const formatDateKey = (date: Date): string =>
//     date.toISOString().split("T")[0];
//   const hasEvents = (date: Date): boolean =>
//     !!events[formatDateKey(date)]?.length;
//   const isToday = (date: Date): boolean =>
//     date.toDateString() === new Date().toDateString();
//   const isSelected = (date: Date): boolean =>
//     date.toDateString() === selectedDate.toDateString();

//   const saveEvent = () => {
//     if (!newEvent.title.trim()) return;

//     if (editingEvent) {
    
//       const key = editingEvent.date;
//       setEvents((prev) => ({
//         ...prev,
//         [key]: prev[key].map((event) =>
//           event.id === editingEvent.id ? { ...event, ...newEvent } : event
//         ),
//       }));
//       setEditingEvent(null);
//     } else {
      
//       const event = {
//         id: Date.now().toString(),
//         ...newEvent,
//         date: formatDateKey(selectedDate),
//       };

//       const key = formatDateKey(selectedDate);
//       setEvents((prev) => ({
//         ...prev,
//         [key]: [...(prev[key] || []), event],
//       }));
//     }

//     setShowModal(false);
//     setNewEvent({ title: "", time: "09:00", type: "class" });
//   };

//   const handleEventClick = (eventDate: string) => {
//     const date = new Date(eventDate);
//     setSelectedDate(date);
//     setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
//   };

//   const handleEditEvent = (event: StudyEvent, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setEditingEvent(event);
//     setNewEvent({
//       title: event.title,
//       time: event.time,
//       type: event.type,
//     });
//     setShowModal(true);
//   };

//   const handleDeleteEvent = (event: StudyEvent, e: React.MouseEvent) => {
//     e.stopPropagation();
//     const key = event.date;
//     setEvents((prev) => ({
//       ...prev,
//       [key]: prev[key].filter((e) => e.id !== event.id),
//     }));
//   };

//   const formatEventDate = (dateString: string): string => {
//     const date = new Date(dateString);
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(tomorrow.getDate() + 1);

//     if (date.toDateString() === today.toDateString()) {
//       return "Today";
//     } else if (date.toDateString() === tomorrow.toDateString()) {
//       return "Tomorrow";
//     } else {
//       return date.toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//       });
//     }
//   };

//   // Get ALL events from all dates and include date info
//   const allEvents = Object.entries(events).flatMap(([date, events]) =>
//     events.map((event) => ({ ...event, date }))
//   );

//   const selectedEvents = events[formatDateKey(selectedDate)] || [];
//   const days = getDaysInMonth();
//   const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 p-3 w-[18%] text-xs">
//       <div className="flex justify-between items-center mb-3">
//         <div className="font-poppins font-semibold text-[#102844]">
//           {month} {year}
//         </div>
//         <div className="flex gap-1">
//           <button
//             onClick={() =>
//               setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1))
//             }
//             className="w-5 h-5 flex items-center justify-center bg-gray-50 rounded text-[#102844] hover:bg-[#0D9165] hover:text-white"
//           >
//             ‹
//           </button>
//           <button
//             onClick={() =>
//               setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1))
//             }
//             className="w-5 h-5 flex items-center justify-center bg-gray-50 rounded text-[#102844] hover:bg-[#0D9165] hover:text-white"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-7 gap-0.5 mb-3">
//         {dayNames.map((day) => (
//           <div
//             key={day}
//             className="text-center font-semibold text-[#767278] py-1 text-[10px]"
//           >
//             {day}
//           </div>
//         ))}

//         {days.map((day, i) =>
//           day ? (
//             <div
//               key={i}
//               className={`aspect-square flex items-center justify-center rounded text-[10px] cursor-pointer transition-all
//                 ${isToday(day) ? "border border-[#0D9165]" : ""}
//                 ${
//                   isSelected(day)
//                     ? "bg-[#0D9165] text-white"
//                     : "bg-gray-50 hover:bg-gray-100"
//                 }
//               `}
//               onClick={() => setSelectedDate(day)}
//             >
//               <div className="flex flex-col items-center">
//                 <span>{day.getDate()}</span>
//                 {hasEvents(day) && (
//                   <div
//                     className={`w-1 h-1 rounded-full mt-0.5 ${
//                       isSelected(day) ? "bg-white" : "bg-[#0D9165]"
//                     }`}
//                   />
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div key={i} className="aspect-square" />
//           )
//         )}
//       </div>

//       <div className="border-t border-gray-100 pt-2">
//         <div className="text-[#102844] font-medium mb-2">
//           {selectedDate.getDate()}{" "}
//           {selectedDate.toLocaleString("default", { month: "short" })}
//         </div>

//         <button
//           onClick={() => {
//             setEditingEvent(null);
//             setNewEvent({ title: "", time: "09:00", type: "class" });
//             setShowModal(true);
//           }}
//           // className="w-full bg-[#0D9165] text-white py-3 rounded text-[10px] font-medium hover:bg-[#17B883] transition-colors mb-2 cursor-pointer"
//           className="md:text-[18px] md:px-5 py-1.5 px-7 md:py-1 lg:py-2
//               lg:px-9  rounded-md font-[400] text-[20px] cursor-pointer bg-[#0d9165] font-inter text-[white] 
//         hover:rounded-[30px] hover:bg-white hover:text-[#0d9165] border hover:border-[#0d9165] 
//         transition-all duration-150 ease-in-out"
        
//         >
//           + Add Event
//         </button>

//         {/* Upcoming Event - Shows ALL events from ALL days */}
//          <p className="text-[16px] mb-1 ">Upcoming Event</p>
//         <div
//           className={
//             allEvents.length > 3 ? "max-h-[180px] overflow-y-auto" : ""
//           }
//         >
//           {/* <p className="text-[16px] mb-2 ">Upcoming Event</p> */}
//           {allEvents.map((event) => (
//             <div
//               key={event.id}
//               className="flex items-center gap-2 p-1 py-3 bg-[#0D9165] text-white rounded mb-1 cursor-pointer hover:bg-[#0D9165] transition-colors group relative"
//               onClick={() => handleEventClick(event.date)}
//             >
//               <div
//                 className={`w-2 h-2 rounded-full ${
//                   event.type === "class"
//                     ? "bg-blue-400"
//                     : event.type === "study"
//                     ? "bg-green-400"
//                     : "bg-amber-400"
//                 }`}
//               />
//               <div className="flex-1 min-w-0">
//                 <div className="truncate text-xs">
//                   {event.time} {event.title}
//                 </div>
//                 <div className="text-[10px] text-gray-200">
//                   {formatEventDate(event.date)}
//                 </div>
//               </div>

//               {/* Edit/Delete buttons */}
//               <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button
//                   onClick={(e) => handleEditEvent(event, e)}
//                   className="w-5 h-5 rounded text-white flex items-center justify-center text-[10px] hover:bg-white"
//                 >
//                   ✏️
//                 </button>
//                 <button
//                   onClick={(e) => handleDeleteEvent(event, e)}
//                   className="w-5 h-5 rounded text-white flex items-center justify-center text-[10px] hover:bg-white "
//                 >
//                   🗑️  
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {allEvents.length === 0 && (
//           <div className="text-center text-gray-500 text-xs py-2">
//             No events for today
//           </div>
//         )}
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-4 w-full max-w-[280px] text-xs">
//             <h3 className="font-poppins font-semibold text-[#102844] mb-3 ">
//               {editingEvent ? "Edit Event" : "Add Event"}
//             </h3>

//             <div className="space-y-2">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Event title"
//                   value={newEvent.title}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({ ...prev, title: e.target.value }))
//                   }
//                   className="w-full p-2 border border-gray-200 rounded text-xs"
//                 />
//               </div>

//               <div className="flex gap-2">
//                 <input
//                   type="time"
//                   value={newEvent.time}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({ ...prev, time: e.target.value }))
//                   }
//                   className="flex-1 p-2 border border-gray-200 rounded text-xs cursor-pointer"
//                 />
//                 <select
//                   value={newEvent.type}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({
//                       ...prev,
//                       type: e.target.value as any,
//                     }))
//                   }
//                   className="flex-1 p-2 border border-gray-200 rounded text-xsm cursor-pointer"
//                 >
//                   <option className="bg-[#0D9165]" value="class">Class</option>
//                   <option value="study">Study</option>
//                   <option value="assignment">Assignment</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   setEditingEvent(null);
//                   setNewEvent({ title: "", time: "09:00", type: "class" });
//                 }}
//                 // className="flex-1 py-2 bg-gray-100 text-[#102844] rounded font-medium cursor-pointer"
//                  className="md:text-[18px] md:px-5 py-1.5 px-7 md:py-1 lg:py-2
//               lg:px-9  rounded-md font-[400] text-[20px] cursor-pointer bg-[#0d9165] font-inter text-[white] 
//         hover:rounded-[30px] hover:bg-white hover:text-[#0d9165] border hover:border-[#0d9165] 
//         transition-all duration-150 ease-in-out"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={saveEvent}
//               className="md:text-[18px] md:px-5 py-1.5 px-7 md:py-1 lg:py-2
//               lg:px-9  rounded-md font-[400] text-[20px] cursor-pointer bg-[#0d9165] font-inter text-[white] 
//         hover:rounded-[30px] hover:bg-white hover:text-[#0d9165] border hover:border-[#0d9165] 
//         transition-all duration-150 ease-in-out"
//                 // className="flex-1 py-2 bg-[#0D9165] text-white rounded font-medium hover:bg-[#0D9165] cursor-pointer"
//               >
//                 {editingEvent ? "Update" : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RightBar;


import React, { useState, useRef, useEffect } from "react";

const RightBar: React.FC = () => {
  interface StudyEvent {
    id: string;
    title: string;
    time: string;
    type: "class" | "study" | "assignment" | "others";
    date: string;
  }

  interface EventsByDate {
    [key: string]: StudyEvent[];
  }

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<EventsByDate>({});
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<StudyEvent | null>(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    time: "09:00",
    type: "class" as const,
  });
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleCloseModal = (): void => {
    setShowModal(false);
    setEditingEvent(null);
    setNewEvent({ title: "", time: "09:00", type: "class" });
    setError("");
  };

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
    if (!newEvent.title.trim()) {
      setError("Please input event title");
      return;
    }

    if (editingEvent) {
      const key = editingEvent.date;
      setEvents((prev) => ({
        ...prev,
        [key]: prev[key].map((event) =>
          event.id === editingEvent.id ? { ...event, ...newEvent } : event
        ),
      }));
      setEditingEvent(null);
    } else {
      const event = {
        id: Date.now().toString(),
        ...newEvent,
        date: formatDateKey(selectedDate),
      };

      const key = formatDateKey(selectedDate);
      setEvents((prev) => ({
        ...prev,
        [key]: [...(prev[key] || []), event],
      }));
    }

    handleCloseModal();
  };

  const handleEventClick = (eventDate: string) => {
    const date = new Date(eventDate);
    setSelectedDate(date);
    setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
  };

  const handleEditEvent = (event: StudyEvent, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingEvent(event);
    setNewEvent({
      title: event.title,
      time: event.time,
      type: event.type,
    });
    setShowModal(true);
    setError("");
  };

  const handleDeleteEvent = (event: StudyEvent, e: React.MouseEvent) => {
    e.stopPropagation();
    const key = event.date;
    setEvents((prev) => ({
      ...prev,
      [key]: prev[key].filter((e) => e.id !== event.id),
    }));
  };

  const formatEventDate = (dateString: string): string => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  // Get color for event type indicator
  const getEventTypeColor = (type: string): string => {
    switch (type) {
      case "class":
        return "bg-blue-400";
      case "study":
        return "bg-green-400";
      case "assignment":
        return "bg-amber-400";
      case "others":
        return "bg-purple-400";
      default:
        return "bg-gray-400";
    }
  };

  // Get ALL events from all dates and include date info
  const allEvents = Object.entries(events).flatMap(([date, events]) =>
    events.map((event) => ({ ...event, date }))
  );

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
          onClick={() => {
            setEditingEvent(null);
            setNewEvent({ title: "", time: "09:00", type: "class" });
            setShowModal(true);
            setError("");
          }}
          className="md:text-[18px] md:px-5 py-1.5 px-7 md:py-1 lg:py-2 lg:px-9 rounded-md font-[400] text-[20px] cursor-pointer bg-[#0d9165] font-inter text-[white] hover:rounded-[30px] hover:bg-white hover:text-[#0d9165] border hover:border-[#0d9165] transition-all duration-150 ease-in-out"
        >
          + Add Event
        </button>

        {/* Upcoming Event - Shows ALL events from ALL days */}
        <p className="text-[16px] mb-1 ">Upcoming Event</p>
        <div
          className={
            allEvents.length > 3 ? "max-h-[180px] overflow-y-auto" : ""
          }
        >
          {allEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-2 p-1 py-3 bg-[#0D9165] text-white rounded mb-1 cursor-pointer hover:bg-[#0D9165] transition-colors group relative"
              onClick={() => handleEventClick(event.date)}
            >
              <div
                className={`w-2 h-2 rounded-full ${getEventTypeColor(
                  event.type
                )}`}
              />
              <div className="flex-1 min-w-0">
                <div className="truncate text-xs">
                  {event.time} {event.title}
                </div>
                <div className="text-[10px] text-gray-200">
                  {formatEventDate(event.date)}
                </div>
              </div>

              {/* Edit/Delete buttons */}
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => handleEditEvent(event, e)}
                  className="w-5 h-5 rounded text-white flex items-center justify-center text-[10px] hover:bg-white"
                >
                  ✏️
                </button>
                <button
                  onClick={(e) => handleDeleteEvent(event, e)}
                  className="w-5 h-5 rounded text-white flex items-center justify-center text-[10px] hover:bg-white "
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {allEvents.length === 0 && (
          <div className="text-center text-gray-500 text-xs py-2">
            No events for today
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-lg p-6 text-center max-w-sm w-full"
          >
            <h3 className="font-semibold text-gray-800 mb-4">
              {editingEvent ? "Edit Event" : "Add Event"}
            </h3>

            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Event title"
                  value={newEvent.title}
                  onChange={(e) => {
                    setNewEvent((prev) => ({ ...prev, title: e.target.value }));
                    if (error) setError("");
                  }}
                  className={`w-full p-2 border rounded text-sm ${
                    error ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {error && (
                  <p className="text-red-500 text-xs mt-1 text-left">{error}</p>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) =>
                    setNewEvent((prev) => ({ ...prev, time: e.target.value }))
                  }
                  className="flex-1 p-2 border border-gray-200 rounded text-sm cursor-pointer"
                />
                <select
                  value={newEvent.type}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      type: e.target.value as any,
                    }))
                  }
                  className="flex-1 p-2 border border-gray-200 rounded text-sm cursor-pointer"
                >
                  <option value="class">Class</option>
                  <option value="study">Study</option>
                  <option value="assignment">Assignment</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={handleCloseModal}
                className="px-5 py-2 rounded-md border border-[#0D9165] text-[#0D9165] hover:bg-green-50 transition w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={saveEvent}
                className="px-6 py-2 rounded-md bg-[#0D9165] text-white hover:bg-[#17B883] transition duration-200 w-full sm:w-auto"
              >
                {editingEvent ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightBar;