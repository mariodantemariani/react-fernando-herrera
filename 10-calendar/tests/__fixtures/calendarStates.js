export const events = [
  {
    id: "1",
    start: new Date("2024-01-01 13:00:00"),
    end: new Date("2024-01-01 15:00:00"),
    title: "Cumpleaños de Mario",
    notes: "Alguna nota",
  },
  {
    id: "2",
    start: new Date("2024-12-01 13:00:00"),
    end: new Date("2024-12-01 15:00:00"),
    title: "Cumpleaños de Dante",
    notes: "Alguna nota de Dante",
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
