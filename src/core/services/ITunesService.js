// src/core/services/iTunesService.js
class iTunesService {
    async search(query) {
      const response = await fetch(`https://itunes.apple.com/search?term=${query}`);
      const data = await response.json();
      return data.results;
    }
  }
  
  export default iTunesService;
  