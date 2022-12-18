import React from 'react'
import VideoList from './VideoList'
import Video from './type'

type Props = {
  video: Video
}

const Pagination = (props: Props) => {
  const { video } = props

  return (
    <div>
      <VideoList video={video}></VideoList>
    </div>
  )
}

export default Pagination
