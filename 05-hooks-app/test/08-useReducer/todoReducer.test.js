import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("todoReducer tests", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo todo 1",
      done: false,
    },
    {
      id: 2,
      description: "Demo todo 2",
      done: false,
    },
  ];

  test("should return default state", () => {
    const newState = todoReducer(initialState);
    expect(newState).toBe(initialState);
  });

  test("should return Add", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 3,
        description: "Demo todo 3",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(3);
    expect(newState).toContain(action.payload);
  });

  test("should return Remove", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState).not.toContain(action.payload);
  });

  test("should return Toggle", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
  });
});
