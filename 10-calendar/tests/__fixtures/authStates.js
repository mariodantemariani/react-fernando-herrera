export const initialState = {
  status: "checking", // 'authenticated','not-authenticated',
  user: {},
  errorMessage: undefined,
};

export const authenticatedState = {
  status: "authenticated",
  user: {
    uid: 123,
    name: "Mario",
  },
  errorMessage: undefined,
};

export const notAuthenticatedState = {
  status: "not-authenticated",
  user: {},
  errorMessage: undefined,
};
