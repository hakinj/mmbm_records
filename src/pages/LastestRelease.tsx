import { useState,useEffect, useRef } from 'react'

function LastestRelease() {
      const [currentTrack, setCurrentTrack] = useState(0);
      const [isPlaying, setIsPlaying] = useState(false);
      const [currentTime, setCurrentTime] = useState(0);
      const [duration, setDuration] = useState(0);
      const [volume, setVolume] = useState(0.7);
      const [isLooping, setIsLooping] = useState(false);
      const [isShuffling, setIsShuffling] = useState(false);
      const audioRef = useRef<HTMLAudioElement | null>(null);




       const tracks = [
    {
      title: "100 Meter",
      artist: "Aayo",
      duration: "2:10",
      durationSeconds: 204,
      audioUrl: "audio/AAYO_100METER.mp3",
      cover: "100meter_cover.png"
    },
    {
      title: "Ogologoma",
      artist: "Aayo",
      duration: "2:13",
      durationSeconds: 252,
      audioUrl: "audio/OGOLOGONMA.mp3",
      cover: "100meter_cover.png"
    },
    {
      title: "Wale",
      artist: "Aayo",
      duration: "2:12",
      durationSeconds: 225,
      audioUrl: "audio/wale.mp3",
      cover: "100meter_cover.png"
    },
    {
      title: "Aye ole",
      artist: "Aayo",
      duration: "2:10",
      durationSeconds: 238,
      audioUrl: "audio/AAYO_100METER.mp3",
      cover: "https://images.pexels.com/photos/9706187/pexels-photo-9706187.jpeg"
    }
  ];

 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: any) => {
    const seekTime = (e.target.value / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };
 



  const handleVolumeChange = (e: any) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const nextTrack = () => {
    let nextIndex;
    if (isShuffling) {
      nextIndex = Math.floor(Math.random() * tracks.length);
    } else {
      nextIndex = (currentTrack + 1) % tracks.length;
    }
    setCurrentTrack(nextIndex);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    const prevIndex = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    setCurrentTrack(prevIndex);
    setIsPlaying(true);
  };

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };





    useEffect(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', () => {
          if (isLooping) {
            audio.currentTime = 0;
            audio.play();
          } else {
            nextTrack();
          }
        });
  
        return () => {
          audio.removeEventListener('timeupdate', handleTimeUpdate);
          audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }
    }, [currentTrack, isLooping]);

     useEffect(() => {
        if (audioRef.current) {
          audioRef.current.src = tracks[currentTrack].audioUrl;
          if (isPlaying) {
            audioRef.current.play();
          }
        }
      }, [currentTrack]);
//     useEffect(() => {
//   const audio = audioRef.current;
//   let snippetTimeout: NodeJS.Timeout;

//   if (audio) {
//     audio.addEventListener("timeupdate", handleTimeUpdate);
//     audio.addEventListener("loadedmetadata", handleLoadedMetadata);

//     // Stop playback after 10 seconds
//     const handlePlay = () => {
//       clearTimeout(snippetTimeout);
//       snippetTimeout = setTimeout(() => {
//         audio.pause();
//         setIsPlaying(false);
//       }, 10000); // 10 seconds
//     };

//     audio.addEventListener("play", handlePlay);

//     audio.addEventListener("ended", () => {
//       if (isLooping) {
//         audio.currentTime = 1;
//         audio.play();
//       } else {
//         nextTrack();
//       }
//     });

//     return () => {
//       audio.removeEventListener("timeupdate", handleTimeUpdate);
//       audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       audio.removeEventListener("play", handlePlay);
//       clearTimeout(snippetTimeout);
//     };
//   }
// }, [currentTrack, isLooping]);

//   useEffect(() => {
//   const audio = audioRef.current;
//   if (audio) {
//     audio.src = tracks[currentTrack].audioUrl;
//     audio.currentTime = 1.5; // Start from the beginning
//     if (isPlaying) {
//       audio.play();
//     }
//   }
// }, [currentTrack]);

  return (
    <>
     <section id="releases" className="py-20 bg-[#000000]  from-orange-900/30 via-yellow-900/20 to-orange-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">🔥Latest Releases</h2>
                <p className="text-xl text-orange-200 max-w-2xl mx-auto">
                  Be the first to catch exclusive snippets of our latest Afrobeat releases.

                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Track List */}
                <div className="space-y-6">
                  {tracks.map((track, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-6 rounded-xl bg-gradient-to-r from-black/40 to-orange-900/20 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 cursor-pointer ${currentTrack === index ? 'ring-2 ring-orange-400' : ''
                        }`}
                      onClick={() => setCurrentTrack(index)}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{track.title}</h3>
                        <p className="text-orange-300 text-sm">{track.artist}</p>
                      </div>
                      <div className="text-orange-200 text-sm">{track.duration}</div>
                    </div>
                  ))}
                </div>

                {/* Music Player */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden relative mb-6">
                    <img
                      src={tracks[currentTrack].cover}
                      alt={tracks[currentTrack].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{tracks[currentTrack].title}</h3>
                      <p className="text-orange-300">{tracks[currentTrack].artist}</p>
                    </div>
                  </div>

                  {/* Music Player Controls */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-orange-300 mb-2">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={duration ? (currentTime / duration) * 100 : 0}
                        onChange={handleSeek}
                        className="w-full h-2 bg-orange-900/50 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <button
                        onClick={() => setIsShuffling(!isShuffling)}
                        className={`p-2 rounded-full transition-colors ${isShuffling ? 'text-orange-400' : 'text-orange-200 hover:text-orange-400'}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z" clipRule="evenodd" />
                        </svg>
                      </button>

                      <button
                        onClick={prevTrack}
                        className="p-2 text-orange-200 hover:text-orange-400 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 9H17a1 1 0 110 2h-5.586l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </button>

                      <button
                        onClick={togglePlay}
                        className="p-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300"
                      >
                        {isPlaying ? (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>

                      <button
                        onClick={nextTrack}
                        className="p-2 text-orange-200 hover:text-orange-400 rotate-180 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 9H17a1 1 0 110 2h-5.586l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </button>

                      <button
                        onClick={() => setIsLooping(!isLooping)}
                        className={`p-2 rounded-full transition-colors ${isLooping ? 'text-orange-400' : 'text-orange-200 hover:text-orange-400'}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    {/* Volume Control */}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.17 13.137a1 1 0 01-.293-.707V7.57a1 1 0 01.293-.707l4.213-3.656a1 1 0 01.617-.131z" clipRule="evenodd" />
                      </svg>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume * 100}
                        onChange={handleVolumeChange}
                        className="flex-1 h-2 bg-orange-900/50 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <audio ref={audioRef} hidden />

    </>
  )
}

export default LastestRelease