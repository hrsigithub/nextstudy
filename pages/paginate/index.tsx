import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination'
import Video from './type'
import styles from '../../styles/Paginate.module.css'


export default function Paginate() {
  const [video, setVideo] = useState<Video>()

  useEffect(() => {
    // React18ではuseEffectは２回発火される。

    const getVideo = async () => {
      await fetch(
        'https://pixabay.com/api/videos/?key=28425771-40ceff02fb1e573677953406f&q=yellow+flowers'
      )
        .then((res) => res.json())
        .then((video) => {
          console.log('useEffect:', video)
          setVideo(video)
        })
    }

    getVideo()
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Pagination video={video}></Pagination>
      </main>
    </div>
  )
}
