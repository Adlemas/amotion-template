import {useState} from "react"

import { FaArrowDown, FaArrowRight } from 'react-icons/fa'

export default function SideBarItem({ title, children }: any) {
  const [opened, setOpened] = useState(false)

  return children ?
    (
        <li>
          <label onClick={() => {
            setOpened(!opened)
          }}>
            {
              opened ?
                <FaArrowDown
                  style={{
                      marginRight: 15,
                      minWidth: 20,
                      minHeight: 20
                  }}
                />
                :
                <FaArrowRight
                  style={{
                      marginRight: 15,
                      minWidth: 20,
                      minHeight: 20
                  }}
                />
            }
          {title.length > 10 ? title.slice(0, 9) + '...' : title}
          </label>
          <ul style={{
            display: opened ? 'block' : 'none'
          }}>
            {children}
          </ul>
        </li>
    )
    :
    (
      <li>
        <label>
          {title.length > 20 ? title.slice(0, 9) + '...' : title}
        </label>
      </li>
    )
}
