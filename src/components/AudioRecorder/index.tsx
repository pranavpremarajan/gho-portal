import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/16/solid";
import {
  MicrophoneIcon,
  StopCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

interface AudioRecorderProps {
  onChange?: (url: string) => void;
}

const AudioRecorder = ({ onChange }: AudioRecorderProps) => {
  const [recordedUrl, setRecordedUrl] = useState<string>("");
  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startRecording = async () => {
    setRecording(true);
    setRecordedUrl("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream;
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = (e: BlobEvent) => {
        // Ensure correct event type
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(chunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(recordedBlob);
        setRecordedUrl(url);
        onChange && onChange(url);
        setRecording(false);
        setPlaying(false);
        chunks.current = [];
      };

      mediaRecorder.current.start();
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
    }
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  const deleteRecorderUrl = () => {
    setRecordedUrl("");
  };

  const onPlaying = () => {
    if (audioRef.current && audioRef.current.paused) setPlaying(false); // Check if audioRef.current exists
  };

  return (
    <>
      <div className="flex w-full justify-center">
        {recording ? (
          <>
            <button
              onClick={stopRecording}
              className="p-2 rounded-full bg-red-200 flex space-x-2 text-xs items-center animate-pulse"
            >
              <StopCircleIcon className="h-5" /> Stop Recording
            </button>
          </>
        ) : (
          <button
            onClick={startRecording}
            className="p-2 rounded-full bg-slate-200 flex space-x-2 text-xs items-center"
          >
            <MicrophoneIcon className="h-5 " />
            Start Recording
          </button>
        )}
      </div>
      <div>
        {recordedUrl && (
          <div className="flex space-x-2 p-2 items-center">
            <div className="text-xs">Voice_Record</div>
            <audio
              ref={audioRef}
              controls
              src={recordedUrl}
              className="h-10 hidden"
              onTimeUpdate={onPlaying as any} // Cast to 'any' if necessary
            />
            {playing ? (
              <button onClick={() => audioRef.current?.pause()}>
                {" "}
                {/* Use optional chaining */}
                <PauseCircleIcon className="h-5" />
              </button>
            ) : (
              <button
                onClick={() => {
                  audioRef.current?.play(); // Use optional chaining
                  setPlaying(true);
                }}
              >
                <PlayCircleIcon className="h-5" />
              </button>
            )}
            <button onClick={deleteRecorderUrl}>
              <TrashIcon className="h-5 text-red-400" />
            </button>
          </div>
        )}

        {!recordedUrl && !recording && (
          <div className="text-xs text-center my-2 text-gray-400">
            No voice record added
          </div>
        )}
      </div>
    </>
  );
};

export default AudioRecorder;
