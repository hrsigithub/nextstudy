import React from 'react'
import Video from '../pages/paginate/type'

type Props = {
  video: Video
}

const VideoList = (props: Props) => {
  const { video } = props

  console.log('VideoList:', video)

  return (
    <div>
      {video.hits?.map((v) => (
        <div key={v.id}>
          <video src={v.videos.small.url} />
        </div>
      ))}
    </div>
  )
}

export default VideoList
