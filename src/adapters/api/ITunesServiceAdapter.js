// src/adapters/api/iTunesServiceAdapter.js
import iTunesService from '../../core/services/ITunesService';

class iTunesServiceAdapter {
  constructor() {
    this.iTunesService = new iTunesService();
  }

  async search(query) {
    return this.iTunesService.search(query);
  }
}

export default iTunesServiceAdapter;
