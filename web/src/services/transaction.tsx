import axios from "axios";
import { API_URL } from "../utils/CONSTANT";

// 88e54f68-2c87-4d8b-bd7c-1028e9b32428

export const getTransaction = async(id: string, start?: string, end?: string) => {
  const Expeses = await axios.get(`${API_URL}/expenses?user=${id}&start=${start}&end=${end}`).then(r => r.data);
  const Incomes = await axios.get(`${API_URL}/incomes?user=${id}&start${start}&end=${end}`).then(r => r.data);

  return {
    Expeses,
    Incomes
  }
};
