import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');
describe('Class GameSavingLoader:', () => {
  test('should return error', async () => {
    read.mockRejectedValue('');

    await expect(GameSavingLoader.load()).rejects.toThrow();
  });
});
