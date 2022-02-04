import GameSavingLoader from '../app';
import read from '../reader';

jest.mock('../reader');
describe('Class GameSavingLoader:', () => {
  test('should return string', async () => {
    const buffer = new ArrayBuffer(8);
    const buff16Uint = new Uint16Array(buffer);
    buff16Uint[0] = 65;
    buff16Uint[1] = 66;
    buff16Uint[2] = 67;
    buff16Uint[3] = 68;

    read.mockResolvedValue(buffer);

    await expect(GameSavingLoader.load()).resolves.toEqual('ABCD');
  });

  test('should return error', async () => {
    read.mockRejectedValue('');

    await expect(GameSavingLoader.load()).rejects.toThrow();
  });
});
