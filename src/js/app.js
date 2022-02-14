import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    GameSavingLoader.load();
  } catch (err) {
    throw new Error(err);
  }
})();
