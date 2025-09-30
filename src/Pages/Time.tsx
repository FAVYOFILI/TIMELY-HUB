// import React from "react";

// interface TimetableProps {
//   title?: string;
//   onNewSheet?: () => void;
// }

// interface TimeSlot {
//   id: number;
//   time: string;
// }

// interface Day {
//   id: number;
//   name: string;
// }

// const Timetable: React.FC<TimetableProps> = () => {
//   const days: Day[] = [
//     { id: 1, name: "Mon" },
//     { id: 2, name: "Tue" },
//     { id: 3, name: "Wed" },
//     { id: 4, name: "Thu" },
//     { id: 5, name: "Fri" },
//     { id: 6, name: "Sat" },
//     { id: 7, name: "Sun" },
//   ];

//   const timeSlots: TimeSlot[] = [
//     { id: 1, time: "8:00-9:30" },
//     { id: 2, time: "9:30-10:30" },
//     { id: 3, time: "10:30-11:30" },
//     { id: 4, time: "11:30-12:30" },
//     { id: 5, time: "12:30-1:30" },
//     { id: 6, time: "1:30-2:30" },
//     { id: 7, time: "2:30-3:30" },
//   ];

//   interface ColorScheme {
//     headerBg: string;
//     headerText: string;
//     dayHeaderBg: string;
//     dayHeaderText: string;
//     timeSlotBg: string;
//     timeSlotBorder: string;
//     cellBg: string;
//     cellBorder: string;
//     hoverBg: string;
//   }

//   const colors: ColorScheme = {
//     headerBg: "bg-[#0D9165]",
//     headerText: "text-white",
//     dayHeaderBg: "bg-[#0D9165]",
//     dayHeaderText: "text-white",
//     timeSlotBg: "bg-gray-100",
//     timeSlotBorder: "border-[#0D9165]",
//     cellBg: "bg-white",
//     cellBorder: "border-[#0D9165]",
//     hoverBg: "hover:bg-gray-50",
//   };

//   const cellWidth = "w-[100px]";
//   const cellHeight = "h-[60px]";
//   const dayColumnWidth = "w-[80px]";
//   const headerHeight = "h-[60px]";

//   return (
//     <div className="w-full">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 inline-block min-w-max">
//         <div className="flex border-b border-gray-300">
//           <div
//             className={`${dayColumnWidth} ${headerHeight} ${colors.headerBg} flex items-center justify-center border-r ${colors.cellBorder}`}
//           >
//             <span className={`font-semibold text-xs ${colors.headerText}`}>
//               Day/Time
//             </span>
//           </div>

//           {timeSlots.map((timeSlot: TimeSlot) => (
//             <div
//               key={timeSlot.id}
//               className={`${cellWidth} ${headerHeight} ${colors.headerBg} flex items-center justify-center border-r ${colors.cellBorder} last:border-r-0`}
//             >
//               <span
//                 className={`text-xs font-medium ${colors.headerText} text-center px-1`}
//               >
//                 {timeSlot.time}
//               </span>
//             </div>
//           ))}
//         </div>

//         {days.map((day: Day) => (
//           <div
//             key={day.id}
//             className="flex border-b border-gray-300 last:border-b-0"
//           >
//             <div
//               className={`${dayColumnWidth} ${cellHeight} ${colors.dayHeaderBg} flex items-center justify-center border-r ${colors.cellBorder}`}
//             >
//               <span className={`font-semibold text-xs ${colors.dayHeaderText}`}>
//                 {day.name}
//               </span>
//             </div>

//             {timeSlots.map((timeSlot: TimeSlot) => (
//               <div
//                 key={`${day.id}-${timeSlot.id}`}
//                 className={`${cellWidth} ${cellHeight} ${colors.cellBg} border-r ${colors.cellBorder} last:border-r-0 ${colors.hoverBg} transition-colors duration-200 cursor-pointer`}
//                 onClick={() =>
//                   console.log(`Clicked ${day.name} - ${timeSlot.time}`)
//                 }
//               >
//                 <div className="w-full h-full flex items-center justify-center p-1"></div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex items-center justify-center">
//         <div className="bg-green-100 border border-green-400 rounded-lg px-3 py-1">
//           <span className="text-green-800 font-medium text-sm">New sheet</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timetable;






// import React, { useState } from "react";

// interface TimetableProps {
//   title?: string;
//   onNewSheet?: () => void;
// }

// interface TimeSlot {
//   id: number;
//   time: string;
// }

// interface Day {
//   id: number;
//   name: string;
// }

// interface CellData {
//   [key: string]: string;
// }

// const Timetable: React.FC<TimetableProps> = () => {
//   const days: Day[] = [
//     { id: 1, name: "Mon" },
//     { id: 2, name: "Tue" },
//     { id: 3, name: "Wed" },
//     { id: 4, name: "Thu" },
//     { id: 5, name: "Fri" },
//     { id: 6, name: "Sat" },
//     { id: 7, name: "Sun" },
//   ];

//   const timeSlots: TimeSlot[] = [
//     { id: 1, time: "8:00-9:30" },
//     { id: 2, time: "9:30-10:30" },
//     { id: 3, time: "10:30-11:30" },
//     { id: 4, time: "11:30-12:30" },
//     { id: 5, time: "12:30-1:30" },
//     { id: 6, time: "1:30-2:30" },
//     { id: 7, time: "2:30-3:30" },
//   ];

//   const [cellData, setCellData] = useState<CellData>({});

//   interface ColorScheme {
//     headerBg: string;
//     headerText: string;
//     dayHeaderBg: string;
//     dayHeaderText: string;
//     timeSlotBg: string;
//     timeSlotBorder: string;
//     cellBg: string;
//     cellBorder: string;
//     hoverBg: string;
//   }

//   const colors: ColorScheme = {
//     headerBg: "bg-[#0D9165]",
//     headerText: "text-white",
//     dayHeaderBg: "bg-[#0D9165]",
//     dayHeaderText: "text-white",
//     timeSlotBg: "bg-gray-100",
//     timeSlotBorder: "border-[#0D9165]",
//     cellBg: "bg-white",
//     cellBorder: "border-[#0D9165]",
//     hoverBg: "hover:bg-gray-50",
//   };

//   const cellWidth = "w-[100px]";
//   const baseCellHeight = "h-[60px]";
//   const dayColumnWidth = "w-[80px]";
//   const headerHeight = "h-[60px]";

//   const handleCellChange = (
//     dayId: number,
//     timeSlotId: number,
//     value: string
//   ) => {
//     const cellKey = `${dayId}-${timeSlotId}`;
//     setCellData((prev) => ({
//       ...prev,
//       [cellKey]: value,
//     }));
//   };

//   const getCellContent = (dayId: number, timeSlotId: number): string => {
//     const cellKey = `${dayId}-${timeSlotId}`;
//     return cellData[cellKey] || "";
//   };

//   return (
//     <div className="w-full overflow-auto">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 inline-block min-w-max">
//         {/* Header Row */}
//         <div className="flex border-b border-gray-300">
//           <div
//             className={`${dayColumnWidth} ${headerHeight} ${colors.headerBg} flex items-center justify-center border-r ${colors.cellBorder}`}
//           >
//             <span className={`font-semibold text-xs ${colors.headerText}`}>
//               Day/Time
//             </span>
//           </div>

//           {timeSlots.map((timeSlot: TimeSlot) => (
//             <div
//               key={timeSlot.id}
//               className={`${cellWidth} ${headerHeight} ${colors.headerBg} flex items-center justify-center border-r ${colors.cellBorder} last:border-r-0`}
//             >
//               <span
//                 className={`text-xs font-medium ${colors.headerText} text-center px-1`}
//               >
//                 {timeSlot.time}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Data Rows - Each cell is completely independent */}
//         {days.map((day: Day) => (
//           <div
//             key={day.id}
//             className="flex border-b border-gray-300 last:border-b-0"
//           >
//             <div
//               className={`${dayColumnWidth} ${baseCellHeight} ${colors.dayHeaderBg} flex items-center justify-center border-r ${colors.cellBorder}`}
//             >
//               <span className={`font-semibold text-xs ${colors.dayHeaderText}`}>
//                 {day.name}
//               </span>
//             </div>

//             {timeSlots.map((timeSlot: TimeSlot) => (
//               <div
//                 key={`${day.id}-${timeSlot.id}`}
//                 className={`${cellWidth} ${baseCellHeight} ${colors.cellBg} border-r ${colors.cellBorder} last:border-r-0 ${colors.hoverBg} transition-colors duration-200 cursor-pointer relative`}
//               >
//                 <textarea
//                   value={getCellContent(day.id, timeSlot.id)}
//                   onChange={(e) =>
//                     handleCellChange(day.id, timeSlot.id, e.target.value)
//                   }
//                   className="w-full h-full p-1 text-xs resize-none border-none outline-none focus:ring-1 focus:ring-blue-500 bg-transparent overflow-auto"
//                   placeholder="Type here..."
//                   style={{
//                     fontFamily: "inherit",
//                     minHeight: "60px",
//                   }}
//                   onClick={(e) => e.stopPropagation()}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex items-center justify-center">
//         <button className="bg-green-100 border border-green-400 rounded-lg px-3 py-1 hover:bg-green-200 transition-colors">
//           <span className="text-green-800 font-medium text-sm">New sheet</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timetable;






import React, { useState } from "react";

interface TimetableProps {
  title?: string;
  onNewSheet?: () => void;
}

interface TimeSlot {
  id: number;
  time: string;
}

interface Day {
  id: number;
  name: string;
}

interface CellData {
  [key: string]: string;
}

interface CellHeights {
  [key: string]: number;
}

const Timetable: React.FC<TimetableProps> = () => {
  const days: Day[] = [
    { id: 1, name: "Mon" },
    { id: 2, name: "Tue" },
    { id: 3, name: "Wed" },
    { id: 4, name: "Thu" },
    { id: 5, name: "Fri" },
    { id: 6, name: "Sat" },
    { id: 7, name: "Sun" },
  ];

  const timeSlots: TimeSlot[] = [
    { id: 1, time: "8:00-9:30" },
    { id: 2, time: "9:30-10:30" },
    { id: 3, time: "10:30-11:30" },
    { id: 4, time: "11:30-12:30" },
    { id: 5, time: "12:30-1:30" },
    { id: 6, time: "1:30-2:30" },
    { id: 7, time: "2:30-3:30" },
  ];

  const [cellData, setCellData] = useState<CellData>({});
  const [cellHeights, setCellHeights] = useState<CellHeights>({});

  const colors = {
    headerBg: "bg-[#0D9165]",
    headerText: "text-white",
    dayHeaderBg: "bg-[#0D9165]",
    dayHeaderText: "text-white",
    timeSlotBg: "bg-gray-100",
    timeSlotBorder: "border-[#0D9165]",
    cellBg: "bg-white",
    cellBorder: "border-[#0D9165]",
    hoverBg: "hover:bg-gray-50",
    rowBorder: "border-gray-300",
  };

  const baseCellWidth = 100;
  const baseCellHeight = 60;
  const dayColumnWidth = "w-[80px]";
  const headerHeight = "h-[60px]";

  const handleCellChange = (
    dayId: number,
    timeSlotId: number,
    value: string
  ) => {
    const cellKey = `${dayId}-${timeSlotId}`;
    setCellData((prev) => ({
      ...prev,
      [cellKey]: value,
    }));
  };

  const getCellContent = (dayId: number, timeSlotId: number): string => {
    const cellKey = `${dayId}-${timeSlotId}`;
    return cellData[cellKey] || "";
  };

  const getCellHeight = (dayId: number, timeSlotId: number): number => {
    const cellKey = `${dayId}-${timeSlotId}`;
    return cellHeights[cellKey] || baseCellHeight;
  };

  const handleTextareaResize = (
    dayId: number,
    timeSlotId: number,
    textarea: HTMLTextAreaElement
  ) => {
    const cellKey = `${dayId}-${timeSlotId}`;

    textarea.style.height = "auto"; // reset
    const newHeight = Math.max(textarea.scrollHeight, baseCellHeight);

    setCellHeights((prev) => ({
      ...prev,
      [cellKey]: newHeight,
    }));
  };

  const handleTextareaInput = (
    dayId: number,
    timeSlotId: number,
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    handleTextareaResize(dayId, timeSlotId, e.currentTarget);
  };

  return (
    <div className="w-full overflow-auto ">
      {/* <h1 className="text-[20px]">My Schedule</h1> */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-300 inline-block min-w-max">
        {/* Header Row */}
        <div className={`flex border-b ${colors.rowBorder} sticky top-0 z-20`}>
          <div
            className={`${dayColumnWidth} ${headerHeight} ${colors.headerBg} flex items-center justify-center border-r ${colors.cellBorder}`}
          >
            <span className={`font-semibold text-[14px] ${colors.headerText}`}>
              Day/Time
            </span>
          </div>

          {timeSlots.map((timeSlot: TimeSlot) => (
            <div
              key={timeSlot.id}
              className={`${colors.headerBg} flex items-center justify-center border-r ${colors.cellBorder} last:border-r-0`}
              style={{
                width: `${baseCellWidth}px`,
                height: `${baseCellHeight}px`,
              }}
            >
              <span
                className={`text-[14px] font-medium ${colors.headerText} text-center px-1`}
              >
                {timeSlot.time}
              </span>
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {days.map((day: Day, dayIndex) => {
          return (
            <div
              key={day.id}
              className={`flex ${
                dayIndex < days.length - 1 ? `border-b ${colors.rowBorder}` : ""
              }`}
            >
              {/* Day Header */}
              <div
                className={`${dayColumnWidth} ${colors.dayHeaderBg} flex items-center justify-center border-r ${colors.cellBorder}`}
                style={{ height: `${baseCellHeight}px` }}
              >
                <span
                  className={`font-semibold text-[14px] ${colors.dayHeaderText}`}
                >
                  {day.name}
                </span>
              </div>

              {/* Time Slot Cells */}
              {timeSlots.map((timeSlot: TimeSlot, timeSlotIndex) => {
                const cellHeight = getCellHeight(day.id, timeSlot.id);

                return (
                  <div
                    key={`${day.id}-${timeSlot.id}`}
                    className={`${colors.cellBg} border-r ${
                      colors.cellBorder
                    } ${
                      timeSlotIndex === timeSlots.length - 1
                        ? "last:border-r-0"
                        : ""
                    } ${colors.hoverBg} transition-all duration-200 relative`}
                    style={{
                      width: `${baseCellWidth}px`,
                      height: `${cellHeight}px`,
                    }}
                  >
                    <textarea
                      value={getCellContent(day.id, timeSlot.id)}
                      onChange={(e) =>
                        handleCellChange(day.id, timeSlot.id, e.target.value)
                      }
                      onInput={(e) =>
                        handleTextareaInput(day.id, timeSlot.id, e)
                      }
                      className="w-full h-full p-1 text-[14px] text-center resize-none outline-none focus:ring-1 bg-transparent overflow-hidden "
                      placeholder=""
                      style={{
                        fontFamily: "inherit",
                        height: `${cellHeight}px`,
                        minHeight: `${baseCellHeight}px`,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center">
        <button className="bg-green-100 border border-green-400 rounded-lg px-3 py-1 hover:bg-green-200 transition-colors">
          <span className="text-green-800 font-medium text-sm">New sheet</span>
        </button>
      </div>
    </div>
  );
};

export default Timetable;
