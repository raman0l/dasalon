"use client";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

function VisitPlans() {
  return (
    <div>
      <div className="w-full h-[calc(100vh-1px)] px-4 bg-[#F9FAFB] overflow-scroll rounded-lg border border-[#E5E7EB] scrollbar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          height="1000px"
          expandRows={true}
          slotMinTime="08:00:00"
          slotMaxTime="22:00:00"
          allDaySlot={false}
          nowIndicator={true}
          headerToolbar={false}
          events={[
            {
              title: "Glamour Glow Studio",
              start: "2025-07-01T08:00:00",
              end: "2025-07-01T09:00:00",
            },
            {
              title: "Glamour Glow Studio",
              start: "2025-07-01T11:00:00",
              end: "2025-07-01T12:00:00",
            },
            {
              title: "Glamour Glow Studio",
              start: "2025-07-01T17:00:00",
              end: "2025-07-01T18:00:00",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default VisitPlans;
