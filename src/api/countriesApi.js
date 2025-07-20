export const fetchMainCountries = async (fields) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=${fields}`
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch main countries: ${response.status}`);
      }
  
      const data = await response.json();
  
      return { data }; 
    } catch (error) {
      console.error("❌ Error fetching main countries:", error);
      throw error;
    }
  };
  
  export const fetchTldCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,tld"
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch TLD countries: ${response.status}`);
      }
  
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error("❌ Error fetching TLD countries:", error);
      throw error;
    }
  };
  