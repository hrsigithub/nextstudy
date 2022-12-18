type Video = {
  total: number
  totalHits: number
  hits: Hit[] 
}

type Hit = {
  comments: number
  downloads: number
  duration: number
  id: number
  likes: number
  pageURL: string
  picture_id: string
  tags: string
  type: string
  user: string
  userImageURL: string
  user_id: number
  videos: Videos
}

type Videos= {
  large: {
    url: string
    width: number
    height: number
    size: number
  }
  medium: {
    url: string
    width: number
    height: number
    size: number
  }
  small: {
    url: string
    width: number
    height: number
    size: number
  }
  tiny: {
    url: string
    width: number
    height: number
    size: number
  }
}

export default Video
