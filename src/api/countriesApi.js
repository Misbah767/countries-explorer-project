import axios from "axios";

export const fetchMainCountries = async (fields) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/all?fields=${fields}`
    );
    return { data: response.data }; 
  } catch (error) {
    console.error("❌ Error fetching main countries:", error.message);
    throw error;
  }
};

export const fetchTldCountries = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,tld"
    );
    return { data: response.data };
  } catch (error) {
    console.error("❌ Error fetching TLD countries:", error.message);
    throw error;
  }
};
