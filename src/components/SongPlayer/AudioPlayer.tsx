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
        <div className="AudioPlayer p-4">
            <div className="AudioPlayer-contents">
                {/* AudioPlayer-meta-data flex container start*/}
                <div className="AudioPlayer-meta-data">
                    {/*image Audio palyer*/}
                    <div className="AudioPlayer-image">
                        {songsPlaying ? songsPlaying[songIndex] ? (
                            <div
                                className="Image"
                                style={{
                                    backgroundImage: `url("${songsPlaying[songIndex].snippet.thumbnails.medium.url}")`
                                }}
                            />
                        ) : (
                                <div
                                    className="Image"
                                    style={{
                                        backgroundImage:
                                            "url('https://apkdl.in/apkimage/51MDy8ePKl1XLi8ZizQK28OqOwvfq8LmMPz9OyJA1zsVnrSH6AJZ-BGJPeFhDe1Yp7nl=rw')"
                                    }}
                                />
                            ) : ('')}
                    </div>
                    <div className="AudioPlayer-text">
                        <span className="AudioPlayer-song-title">
                            {" "}
                            {title}
                        </span>
                        <br />
                        <span className="AudioPlayer-song-author">
                            {" "}
                            {author}
                        </span>
                    </div>
                    
                    <div className="AudioPlayer-Player-actions">
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
                        {/* <div className="AudioPlayer-Player-buttons">
                            {loop ? (
                                <i className="fal fa-repeat-1-alt fan-1" onClick={handleRepeat} />
                            ) : (
                                    <i className="fal fa-repeat-alt fan" onClick={handleRepeat} />
                                )}
                            <i className="fas fa-step-backward fan" onClick={handlePrev} />
                            {isPlaying ? (
                                <i className="fas fa-pause fap" onClick={handlePause} />
                            ) : (
                                    <i className="fas fa-play fam" onClick={handlePlay} />
                                )}
                            <i className="fas fa-step-forward fan" onClick={handleNext} />
                            <i className="fal fa-random fan" />
                        </div>{" "} */}
                        {/* <div className="AudioPlayer-Player-content">
                            <span className="AudioPlayer-time">{currentTime.toFixed(2)}</span>{" "}
                            <div className="AudioPlayer-Player-progress">
                                {" "}
                                <div className="AudioPlayer-Player-Progress-container">
                                    {" "}
                                    <div className="Progress-back">
                                        <div className="Progress" style={{ width: progress + "%" }} />{" "}
                                    </div>{" "}
                                </div>
                                <div className="Progress-ball" style={{ left: progress + "%" }} />{" "}
                            </div>
                            <span className="AudioPlayer-time">{duration.toFixed(2)}</span>{" "}
                        </div> */}
                    </div>

                    {/* <div className="AudioPlayer-Player-radio">
                        <a href="/queue">
                            <i className="fal fa-list-ul" />
                        </a>
                    </div>
 */}
                    <span className="fal fa-volume-up" />
                    <div className="AudioPlayer-Player-volume">
                        <div
                            className="AudioPlayer-Audio-Progress"
                            style={{ width: value * 10 + "%" }}
                        >
                            {" "}
                            <input
                                className="slider"
                                type="range"
                                min="0"
                                step="0.2"
                                max="10"
                                value={value}
                                onChange={handleChangeValue}
                            />
                        </div>
                    </div>
                </div>
                {/* AudioPlayer-meta-data flex container ending*/}
            </div>
        </div>
    );
}

export default AudioPlayer;

