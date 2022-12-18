import React from 'react'
import Video from '../pages/paginate/type'
import styles from '../styles/Paginate.module.css'

type Props = {
  video: Video
}

const VideoList = (props: Props) => {
  const { video } = props

  console.log('VideoList:', video)

  return (
    <div className={styles.VideoMain}>
      {video.hits?.map((v) => (
        <div key={v.id}>
          <video className={styles.Video} autoPlay muted controls src={v.videos.small.url}></video>
        </div>
      ))}
    </div>
  )
}

export default VideoList
