"use client";
import TextToSpeech from './components/text-to-speech';
import SpeechToText from './components/speech-to-text';

export default function Home() {
  const isSpeechSynthesisSupported = 'speechSynthesis' in window;
  const isSpeechRecognitionSupported =
    'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Speech Synthesis</h1>
        <TextToSpeech />
        {!isSpeechSynthesisSupported && (
          <div className="bg-yellow-200 text-yellow-800 p-2 rounded-lg mb-4">
            Warning: Speech Synthesis is not supported in this browser.
          </div>
        )}
      </div>

      <hr className="my-8 w-full border-gray-300" />

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Speech Recognition</h1>
        <SpeechToText />
        {!isSpeechRecognitionSupported && (
          <div className="bg-yellow-200 text-yellow-800 p-2 rounded-lg mb-4">
            Warning: Speech Recognition is not supported in this browser.
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-lg font-bold mb-2">How It Works</h2>
        <p className="text-gray-400">
          This program utilizes browser capabilities to provide two speech-related functionalities:
          Speech Synthesis (Text to Speech) and Speech Recognition (Speech to Text). Please note that the availability of these
          functionalities may vary across different browsers.
        </p>
      </div>

      <footer className="mt-8">
        <a
          href="https://github.com/ab6d"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          by ab6d
        </a>
      </footer>
    </main>
  );
}
