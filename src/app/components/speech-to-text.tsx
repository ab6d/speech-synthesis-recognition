import { useEffect, useState } from 'react';

let SpeechRecognition;
let recognition: any = null;

export default function SpeechToText() {
  const [speechToText, setSpeechToText] = useState('');
  const [ isRecording, setIsRecording ] = useState( false );


  useEffect( () => {
    SpeechRecognition =
    (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
  
    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
    }

    if (!recognition) {
      console.log('Speech Recognition is not supported in this browser.');
      return;
    }

    recognition.onresult = (event: any) => {
      const recognizedSpeech = event.results[0][0].transcript;
      setSpeechToText(recognizedSpeech);
    };

    recognition.onend = (event: any) => {
      setIsRecording(false);
    };

    return () => {
      recognition.onresult = null;
    };
  }, []);

  const handleStartRecognition = () => {
    if (recognition && !isRecording) {
      recognition.start();
      setIsRecording(true);
    }
  };

  const handleStopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg max-w-md mx-auto">
      <button
        onClick={handleStartRecognition}
        className={`${
          isRecording ? 'bg-green-500' : 'bg-indigo-500'
        } text-white py-2 px-4 rounded-lg mr-2`}
      >
        {isRecording ? 'Recording...' : 'Start Recognition'}
      </button>
      <button
        onClick={handleStopRecognition}
        className="bg-red-500 text-white py-2 px-4 rounded-lg"
      >
        Stop Recognition
      </button>
      <div className="text-white mt-4">
        {speechToText ? (
            <>
            <span className="font-bold">Result:</span> {speechToText}
            </>
        ) : (
            <span className="italic">Result will appear here</span>
        )}
        </div>
    </div>
  );
}
