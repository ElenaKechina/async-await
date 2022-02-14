import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      const obj = JSON.parse(value);
      return new GameSaving(obj);
    } catch (err) {
      throw new Error('Error');
    }
  }
}

export default GameSavingLoader;
