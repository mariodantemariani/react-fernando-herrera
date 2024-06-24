import { calendarApi } from "../../src/api";

describe("CalendarApi tests", () => {
  test("Debe de tener la configuracion por defecto.", async () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test("debe de tener el x-token en el header de todas las peticiones ", async () => {
    const token = "ABC-123-XYZ";
    localStorage.setItem("token", token);
    const res = await calendarApi
      .get("/auth")
      .then((res) => res)
      .catch((res) => res);
    expect(res.config.headers["x-token"]).toBe(token);
  });
});
