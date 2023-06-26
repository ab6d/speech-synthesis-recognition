import { useState } from 'react';

export default function TextToSpeech () {
    const [text, setText] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    };

    const handleChange = (event: any) => {
    setText(event.target.value);
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 rounded-lg max-w-md mx-auto"
      >
        <textarea
          value={text}
          onChange={handleChange}
          className="bg-gray-600 text-white w-full p-2 rounded-lg resize-none"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    );
}