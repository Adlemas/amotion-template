import { useContext } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import AppContext from '../Helper/AppContext'

export default function TimeLine(props: any) {
  const { video: { playing, setPlaying } } = useContext(AppContext)

  return (
    <div className="Amotion-timeline">
      <div className="Amotion-timeline-bar">
        <span style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 7,
            borderRadius: 5
        }} className="Amotion-timeline-play-btn" onClick={() => {
          setPlaying(!playing)
        }}>
          {
            !playing
              ?
              <FaPlay color={'dodgerblue'} />
              :
              <FaPause color={'dodgerblue'} />
          }
        </span>
        <label style={{
            marginLeft: 15,
            userSelect: 'none'
        }}>03:20{' '}/{' '}05:04</label>
      </div>
    </div>
  )
}
