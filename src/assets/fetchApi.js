const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
  },
};

const BASE_URL = "https://the-cocktail-db.p.rapidapi.com";

export const baseFunc = async (url) => {
  const data = await fetch(`${BASE_URL}/${url}`);
  const response = await data.json();
  return response;
};
