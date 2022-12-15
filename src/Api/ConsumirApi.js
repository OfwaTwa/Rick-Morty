import axios from "axios";


//traer la API para ser consumida con axios
export const getPersonajes = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  const result = await axios.get(url);
  return result.data;
};