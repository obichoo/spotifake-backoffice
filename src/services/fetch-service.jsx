export default {
  fetchData: async (url, options) => {
    try {
      const response = await fetch(
        'http://13.37.240.115:4000/spotifake-ral/v1' + url,
        options,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while fetching data.');
    }
  },
};
