// Test SoundPlayer using mockImplementation, and VideoPlayer using a manual mock

import SoundPlayerConsumer from '../src/sound-player-consumer';
import SoundPlayer from '../src/sound-player';
import VideoPlayer, { mockPlayVideoFile } from '../src/video-player';

jest.mock('../src/sound-player');
jest.mock('../src/video-player');

const mockPlaySoundFile = jest.fn();
SoundPlayer.mockImplementation(() => {
  return {
    playSoundFile: mockPlaySoundFile
  };
});

beforeEach(() => {
  SoundPlayer.mockClear();
  VideoPlayer.mockClear();
  mockPlaySoundFile.mockClear();
  mockPlayVideoFile.mockClear();
});

it('The consumer should be able to call new() on SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(soundPlayerConsumer).toBeTruthy(); // Constructor ran with no errors
});

it('We can check if the consumer called the class constructor', () => {
  expect(SoundPlayer).not.toHaveBeenCalled(); // ensure our mockClear() is working
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalled();
  expect(VideoPlayer).toHaveBeenCalled();
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  const coolVideoFileName = 'show.mp4';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlayVideoFile).toHaveBeenCalledWith(coolVideoFileName);
  // These are the same as the above checks:
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  expect(mockPlayVideoFile.mock.calls[0][0]).toEqual(coolVideoFileName);
});
