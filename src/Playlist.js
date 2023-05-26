import React from "react"
import './Playlist.css'
import { useState } from "react"
import { songList } from "./data"

const Playlist = () => {

    const [index, setIndex] = useState(0)
    const [showLyrics, setShowLyrics] = useState(false)
    const hasNext = index < songList.length - 1

    const song = songList[index]

    function handleNextClick() {
        if (hasNext) {
            setIndex(index+1)
        } else {
            setIndex(0)
        }
    }

    function handlePreviousClick() {
        if (index > 0) {
            setIndex(index-1)
        }
    }

    function handleShowLyrics() {
        setShowLyrics(!showLyrics)
    }

    return(
        <div className="playlist">
            <h1 align='center'>My Playlist</h1>

            <div className="card">
                <div className="card-title">
                    {song.title}
                </div>
                <div>
                    <img src={song.imageUrl} alt='display-data' />
                </div>
                <div className="card-content">
                    <h4 className="card-content-title">{song.artist}</h4>

                    <section>
                        <button 
                            className="card-content-button" 
                            onClick={handleNextClick}
                        >
                            Next
                        </button>
                        <button 
                            className="card-content-button" 
                            onClick={handlePreviousClick}
                        >
                            Previous
                        </button>
                        <button 
                            className="card-content-button" 
                            onClick={handleShowLyrics}
                        >
                            { showLyrics ? 'hide' : 'show' } Lyrics
                            
                        </button>
                    </section>

                    <div className="card-content-lyrics">
                        { showLyrics && song.lyrics }
                    </div>
                </div>
            </div>  

        </div>
    )
}

export default Playlist