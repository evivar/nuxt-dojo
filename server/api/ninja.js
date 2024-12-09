export default defineEventHandler(async (event) => {
  // Handle query params
//   const queryParams = getQuery(event);

  // Handle post requests body params
//   const bodyParams = await readBody(event);

// API call with private key
const {data} = await $fetch("http://api.currencyapi.com/v3/latest?apikey=cur_live_osCJRLeSPRs6Tso0GISFG7IrfZmGbVamzaE4xqk7")

  return {
    message: "Hello ninjas",
    // queryParams,
    // bodyParams,
    data
  };
});
