import React, { useState, useEffect, useRef } from "react";
import { FaVolumeUp } from "react-icons/fa";

const InterviewQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  let [answer, setAnswers] = useState("");
  let [answers, setAnswerss] = useState([]);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
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
    setLoading(true); // Show loader
    console.log(questions);
    console.log(transcript); 
    const quesString = JSON.stringify(questions);
    console.log(quesString);
    try {
      const response = await fetch('https://resume-screening-3.onrender.com/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questions: quesString,
          transcript: transcript,
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem('interviewAnswer', JSON.stringify(data));
      window.location.href = '/evaluation';
    } catch (error) {
      console.error("Error during evaluation:", error);
    } finally {
      setLoading(false); // Hide loader
    }
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
      //store the last result
      console.log(currentQuestionIndex);
      setAnswers(event.results[event.results.length - 1][0].transcript);
    //   answer = event.results[event.results.length - 1][0].transcript;
      console.log(answer);
      const transcriptText = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(', ');
      setTranscript(transcriptText);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();
  };
  const addAnswersToList = (answer , index) => {
    //set the answer at the given index in the answers array
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswerss(newAnswers);
    localStorage.setItem('interviewAnswers', JSON.stringify(answers));
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
      console.log(answer);
        addAnswersToList(answer, currentQuestionIndex);  
        console.log(answers);
        localStorage.setItem('interviewAnswers', JSON.stringify(answers));
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
      {loading && (
        
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>

      )}
    </div>
  );
};

export default InterviewQuestions;
