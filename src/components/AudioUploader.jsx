import React from 'react'

const AudioUploader = () => {
  return (
    <div className="container">
        <h1>Audio to Text Transcriber</h1>
        <div className='file-input'>
            <input type='file' accept='audio/*' />
        </div>
        <button className='upload-button'>Upload and Transcribe</button>
    </div>
  )
}

export default AudioUploader