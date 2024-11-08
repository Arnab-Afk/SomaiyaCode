import React, { useState, useEffect, useRef } from "react";
import { FaVolumeUp } from "react-icons/fa";

const InterviewQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [score, setScore] = useState(null);
  const videoRef = useRef(null);
  const audioStreamRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions'));
    if (!storedQuestions || storedQuestions.length === 0) {
      window.location.href = '/interview-prep';
      return;
    }
    setQuestions(storedQuestions.slice(0, 5));
  }, []);
  const handleEvaluation = async () => {
    const response = await fetch('https://resume-screening-3.onrender.com/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            questions,
            transcript,
            }),
            });
            const data = await response.json();
            console.log(data);
        };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      audioStreamRef.current = stream;

      setIsRecording(true);
      startTranscription();
    } catch (error) {
      console.error('Camera/Microphone access denied:', error);
    }
  };

  const stopRecordingAndTranscribe = () => {
    setIsRecording(false);
    const stream = audioStreamRef.current;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    stopTranscription();
  };

  const startTranscription = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Web Speech API not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcriptText = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setTranscript(transcriptText);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();
  };

  const stopTranscription = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTranscript('');
    } else {
      alert('You have answered all questions.');
    }
  };

  const readQuestionOutLoud = (questionText) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = questionText;
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  };

  if (questions.length === 0) return null;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Interview</h2>
      <div className="bg-white shadow-md rounded w-full max-w-xl p-6 mb-4 relative">
        <h3 className="text-lg font-medium text-gray-600 mb-2">
          Current Question:
        </h3>
        <div className="flex items-center text-gray-700 text-md">
          <p className="mr-2">{`Q${currentQuestionIndex + 1}: ${questions[currentQuestionIndex]?.question || 'Loading...'}`}</p>
          <button
            onClick={() => readQuestionOutLoud(questions[currentQuestionIndex]?.question)}
            className="text-gray-600 hover:text-gray-900"
            aria-label="Read question out loud"
          >
            <FaVolumeUp size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <video ref={videoRef} autoPlay muted className="w-64 h-48 mb-4 rounded border" />
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="mb-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Start Answer
          </button>
        ) : (
          <button
            onClick={stopRecordingAndTranscribe}
            className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Stop Answer
          </button>
        )}
      </div>

      {transcript && (
        <div className="bg-white shadow-md rounded w-full max-w-xl p-4 mt-4 text-center">
          <p className="text-gray-700 mb-4">Your Answer: {transcript}</p>
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={handleNextQuestion}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Next Question
            </button>
          ) : (
            <button
              onClick={handleEvaluation}
              className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
            >
              Submit for Evaluation
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InterviewQuestions;
