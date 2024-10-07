"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video if it's playing
      } else {
        videoRef.current.play(); // Play the video if it's paused
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  return (
    <section className="py-20 bg-pink-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-8">Learn More About Our Mission</h2>
        <div className="relative w-full max-w-3xl mx-auto aspect-video bg-pink-200 rounded-lg shadow-xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg"
            src="/home/psycho.webm"
            poster="/home/thumbnail.png" // Optional thumbnail while video isn't playing
          />
          <Button
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center"
            onClick={handlePlayPause}
          >
            {isPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10" />}
          </Button>
        </div>
      </div>
    </section>
  );
}
