export const getEnvVariables = () => {
  //import.meta.env; //Falla

  return {
    ...import.meta.env,
  };
};
