import React, { useState } from 'react'

const AudioUploader = () => {
    const [file, setFile] = useState(null)
    const [result, setResult] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleTranscriber = async () => {
        try {
            const response = fetch("http://localhost:8080/api/audio-transcriber?file=${file}")
            setResult(response)
        } catch (error) {
            alert(error)
        }
    }

  return (
    <div className="container">
        <h1>Audio to Text Transcriber</h1>
        <div className='file-input'>
            <input type='file' accept='audio/*' onChange={handleFileChange}/>
        </div>
        <button className='upload-button' onClick={handleTranscriber}>Upload and Transcribe</button>
        <div className='transcription-result'>
            <h2>Transcription Result</h2>
            <p>{result}</p>
        </div>
    </div>
  )
}

export default AudioUploader