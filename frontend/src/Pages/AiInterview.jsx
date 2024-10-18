import "regenerator-runtime/runtime";
import { useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import { Power, Mic } from "lucide-react";

const AiInterview = () => {
    const { transcript } = useSpeechRecognition();
    const [state, setState] = useState(-1);
    const startInterview = () => {
        fetch("http://localhost:8000/interview/start", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: "jdojdw-jdwijd" }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        setTime(new Date().getTime());
    };

    let [time, setTime] = useState(0);

    const stop = () => {
        SpeechRecognition.stopListening();
        fetch("http://localhost:8000/interview/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: "jdojdw-jdwijd", message: transcript }),
        })
            .then((res) => res.json())
            .then((data) => {
                let utterance = new SpeechSynthesisUtterance(data);
                window.speechSynthesis.speak(utterance);
                console.log(data);
            });
    };
    const updateTime = () => {
        let t = time++;
        setTime(t);
        if (state !== 2) {
            setTimeout(updateTime, 1000);
        }
    };
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
            <div className="h-80 w-80">
                <button
                    onClick={() => {
                        if (state === -1) {
                            setState(0);
                            startInterview();
                            updateTime();
                        }
                        if (state === 0) {
                            setState(1);
                            SpeechRecognition.startListening({
                                continuous: true,
                                interimResults: true,
                            });
                        }
                        if (state === 1) {
                            setState(0);
                            stop();
                        }
                    }}
                    className={`cursor-pointer h-full w-full border-none rounded-full shadow-2xl transition duration-700 ease flex items-center justify-center
                        ${
                            state === -1
                                ? "bg-white shadow-gray-300"
                                : state === 0
                                ? "bg-red-300 shadow-red-200 backdrop-blur-3xl"
                                : "bg-green-300 shadow-green-200"
                        }
                    `}
                >
                    {state === -1 ? (
                        <Power color="#c53030" className="h-[50%] w-[50%]" />
                    ) : state === 0 ? (
                        <Mic color="#f44336" className="h-[50%] w-[50%]" />
                    ) : (
                        <div className="h-[50%] w-[50%] flex items-center justify-center">
                            <div className="h-5 w-5 bg-blue-500 rounded-full animate-ping mx-3"></div>
                            <div className="h-5 w-5 bg-blue-500 rounded-full animate-ping mx-3"></div>
                            <div className="h-5 w-5 bg-blue-500 rounded-full animate-ping mx-3"></div>
                        </div>
                    )}
                </button>
            </div>
            <div className="absolute w-36 h-24 bg-red-200 right-32 top-28 rounded-xl flex flex-col items-center justify-around shadow-md">
                <p className="text-black text-center text-xs font-semibold p-0 m-0">
                    {state === -1 ? "Start Interview" : "Interview in progress"}
                </p>
                <h1 className="p-0 m-0">{`${Math.floor(time / 60)}:${
                    time % 60 < 10 ? `0${time % 60}` : time % 60
                }`}</h1>
            </div>
        </div>
    );
};

export default AiInterview;
