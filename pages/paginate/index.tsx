import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination'
import Video from '../../components/type'
import styles from '../../styles/Paginate.module.css'

export default function Paginate() {
  const [video, setVideo] = useState<Video>(Object)

  useEffect(() => {
    // React18ではuseEffectは２回発火される。
    const getVideo = async () => {
      await fetch(
        'https://pixabay.com/api/videos/?key=28425771-40ceff02fb1e573677953406f&q=woman&editors_choice=true&per_page=3'
      )
        .then((res) => res.json())
        .then((video) => {
          console.log('useEffect:', video as Video)
          // setVideo(video as Video)
          setVideo(video)
        })
    }

    getVideo()

    return () => {
      console.log('useEffect:unmaount')
    }
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Pagination video={video}></Pagination>
      </main>
    </div>
  )
}
