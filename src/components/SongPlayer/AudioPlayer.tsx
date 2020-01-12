import React, { useState, useEffect, } from "react";
import "./AudioPlayer.css";
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/index';
import { baseurl, listenEndPoint } from '../../env.variables/env';
import { transformTitle, AuthorAndTitle } from '../../utils/helper';

function AudioPlayer() {
    let [isPlaying, setPlaying] = useState(false);
    let [songIndex, setSongIndex] = useState(0);
    let [progress, setProgress] = useState(0);
    let [currentTime, setCurrentTime] = useState(0);
    let [duration, setDuration] = useState(0.0);
    let [value, setValue] = useState(0);
    let [loop, setLoop] = useState(false);
    const audioLists = useSelector((state: RootState) => state.songsplaying.songsplaying);
    let songsPlaying = audioLists;
    let { author, title }: AuthorAndTitle = songsPlaying ? transformTitle(songsPlaying[songIndex].snippet.title) : {
        author: "", title: ""
    };

    let audio: HTMLAudioElement;
    useEffect(() => {
        audio = document.getElementById('player') as HTMLAudioElement
        setValue(audio.volume);
        setSongIndex(0);
        setDuration(0.0);
        console.log(songsPlaying);
        console.log("songindex", songIndex);
    }, [audioLists]);

    const handlePlay = () => {

        audio = document.getElementById('player') as HTMLAudioElement
        audio.play();
        setPlaying(true);
    };

    const handlePause = () => {

        audio = document.getElementById('player') as HTMLAudioElement
        audio.pause();
        setPlaying(false);
    };

    const handleNext = () => {

        audio = document.getElementById('player') as HTMLAudioElement
        audio.loop = false;
        setLoop(false);
        setPlaying(false);
        if (audioLists) {
            if (songIndex >= audioLists.length - 1) {
                songIndex = audioLists.length;
                setSongIndex(songIndex);
                console.log("if++", songIndex);
            } else {
                songIndex++;
                setSongIndex(songIndex);
                console.log("else++", songIndex);
            }
        }
    };

    const handlePrev = () => {

        audio = document.getElementById('player') as HTMLAudioElement
        setLoop(false);
        audio.loop = false;
        setPlaying(false);
        if (songIndex < 1) {
            songIndex = 0;
            setSongIndex(songIndex);
            console.log("if--", songIndex);
        } else {
            songIndex--;
            setSongIndex(songIndex);
            console.log("esle--", songIndex);
        }
    };

    const handlePlaying = () => {
        console.log("playing");
        setPlaying(true);
    };

    const handlePausing = () => {
        console.log("pausing");
        setPlaying(false);
    };

    const handleEnded = () => {
        handleNext();
    };

    const handleTimeUpdate = () => {
        audio = document.getElementById('player') as HTMLAudioElement
        const progress = (audio.currentTime / audio.duration) * 100;
        setProgress(progress);
        setDuration(audio.duration ? audio.duration / 60 : 0);
        setCurrentTime(audio.currentTime / 60);
    };

    const handleChangeValue = (e: any) => {

        audio = document.getElementById('player') as HTMLAudioElement
        audio.volume = e.target.value / 10;
        setValue(e.target.value);

        console.log(typeof value, " ", value);
    };

    const handleRepeat = () => {

        audio = document.getElementById('player') as HTMLAudioElement
        audio.loop = !loop;
        setLoop(audio.loop);
        console.log(audio.loop);
    };

    return (
        <div className="  AudioPlayer rounded-t " data-aos="fade-left">
           <div className="flex pb-4 Song rounded pt-4   shadow">
 <div className="w-2/4 flex">
                 {songsPlaying ? songsPlaying[songIndex] ? (
                    <img
                        className="ml-4 w-12 h-12 rounded-full mr-5"
                        src={songsPlaying[songIndex].snippet.thumbnails.medium.url}
                    />
                ) : (
                        <img
                            className=""
                            src="https://apkdl.in/apkimage/51MDy8ePKl1XLi8ZizQK28OqOwvfq8LmMPz9OyJA1zsVnrSH6AJZ-BGJPeFhDe1Yp7nl=rw"
                        />

                    ) : ('')}

                <div className="AudioPlayer-text">
                    <span className="text-base" style={{color:'#EDF5E1'}}>
                        {" "}
                        {title.substring(0,10) + '..'}
                    </span>
                    <br />
                    <span className="text-xs">
                        {" "}
                        {author.substring(0,10)}
                    </span>
                </div>
        
        </div>
        
               <div className="AudioPlayer-circle-icon ml-8 mt-2">
 <i className="far fa-step-backward fan text-2xl" onClick={handlePrev} style={{color:'#9cf7bd'}}/>
                    {isPlaying ? (
                        <i className="fas fa-pause-circle text-3xl px-3" style={{color:'#9cf7bd'}}onClick={handlePause} />
                    ) : (
                            <i className="fas fa-play-circle text-3xl text-white px-3" style={{color:'#9cf7bd'}} onClick={handlePlay} />

                        )}
 <i className="far fa-step-forward text-2xl" style={{color:'#9cf7bd'}}onClick={handleNext} />
                </div>
            </div>


            <div className="">
                {/*AudioPlayer-Player-buttons flex*/}
                <audio
                    id="player"
                    autoPlay
                    src={songsPlaying ? baseurl + listenEndPoint + '/' + songsPlaying[songIndex].id.videoId : ''}
                    onPlay={handlePlaying}
                    onPause={handlePausing}
                    onEnded={handleEnded}
                    onTimeUpdate={handleTimeUpdate}
                />

            </div>
        </div>
    );
}

export default AudioPlayer;

