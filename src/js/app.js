import read from './reader';
import json from './parser';

class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return value;
    } catch (err) {
      throw new Error('Error');
    }
  }
}

export default GameSavingLoader;
