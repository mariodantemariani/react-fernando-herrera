const { onLogout } = require("../../../src/store/auth/authSlice");
const {
  calendarSlice,
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
} = require("../../../src/store/calendar/calendarSlice");
const {
  initialState,
  calendarWithEventsState,
  events,
  calendarWithActiveEventState,
} = require("../../__fixtures/calendarStates");

describe("Pruebas en CalendarSlice", () => {
  test("Debe de regresar el estado por defecto", () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test("onSetActiveEvent-Debe de realizar el onSetActiveEvent reducer", () => {
    const event = events[0];
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(event)
    );

    expect(state.activeEvent).toEqual(event);
  });

  test("onAddNewEvent-Debe de realizar el onAddNewEvent reducer", () => {
    const newEvent = {
      id: "3",
      start: new Date("2024-01-01 13:00:00"),
      end: new Date("2024-01-01 15:00:00"),
      title: "Cumpleaños de Julio",
      notes: "Alguna nota",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );

    expect(state.events).toEqual([...events, newEvent]);

    expect(state.activeEvent).toBeNull();
  });

  test("onUpdateEvent-Debe de realizar el onUpdateEvent reducer", () => {
    const updatedEvent = {
      id: "1",
      start: new Date("2024-01-10 13:00:00"),
      end: new Date("2024-01-10 15:00:00"),
      title: "Cumpleaños de Mario actualizado",
      notes: "Alguna nota",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );

    expect(state.events).toContain(updatedEvent);
  });

  test("onDeleteEvent-Debe de realizar el onDeleteEvent reducer", () => {
    const event = events[0];

    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvent(event)
    );
    expect(state.events).not.toContain(event);
    expect(state.events.length).toStrictEqual(1);
    expect(state.activeEvent).toBeNull();
  });

  test("onLoadEvents-Debe de realizar el onLoadEvents reducer", () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));
    expect(state.isLoadingEvents).toBe(false);
    expect(state.events).toEqual(events);

    const newState = calendarSlice.reducer(state, onLoadEvents(events));
    expect(newState.isLoadingEvents).toBe(false);
    expect(state.events.length).toBe(events.length);
  });

  test("onLogoutCalendar-Debe de realizar el onLogoutCalendar reducer", () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onLogoutCalendar()
    );

    expect(state).toEqual(initialState);

    expect(state.activeEvent).toBeNull();

    expect(state.isLoadingEvents).toBe(true);

    expect(state.events).toEqual([]);
  });
});
