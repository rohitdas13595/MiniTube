import React from 'react'

const Player = () => {
  return (
    <div>
      <video controls>
      <source src="https://ktpublic-pics.s3.amazonaws.com/SampleVideo_720x480_2mb.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}

export default Player