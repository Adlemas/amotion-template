import {useContext, useEffect, useRef} from "react"
import AppContext from "../Helper/AppContext"

export default function VideoPlayer(props: any) {
  const { video: { playing } } = useContext(AppContext)
  const videoRef: any = useRef(null)
  const canvasRef: any = useRef(null)

  useEffect(() => {
    const video: HTMLDivElement = videoRef.current
    const canvas: HTMLCanvasElement = canvasRef.current
    canvas.height = video.getBoundingClientRect().height
    const ctx = canvas.getContext('2d');

    if(ctx) {
      ctx.fillStyle = 'crimson'
      ctx.fillRect(0, 0, 200, 200)
    }

  }, [])

  return (
    <div ref={videoRef} className="Amotion-video" style={{
      opacity: playing ? 1 : .3
    }}>
      <canvas ref={canvasRef} style={{
        backgroundColor: '#010101'
      }} />
    </div>
  )
}
