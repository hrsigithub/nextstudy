import React from 'react'
import Video from '../pages/paginate/type'

type Props = {
  video: Video
}

const VideoList = (props: Props) => {
  const { video } = props
  // const hits = props.video.hits

  console.log('VideoList:hits:', video)

  return (
    <div>
      {/* {video.hits.map((v) => (
        <div key={v.id}></div>
      ))} */}
    </div>
  )
}

export default VideoList
