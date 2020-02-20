import axios from "axios";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {


  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },

  getDogsOfBreed: function(breed) {
    // console.log(breed);
  // const baseURL= "https://dog.ceo/api/breed/" + breed + "/images";
  // console.log(baseURL);
  return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    // return axios.get("https://dog.ceo/api/breed/" + breed + "/images/random");
  },

  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};




