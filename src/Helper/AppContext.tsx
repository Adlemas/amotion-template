import React from "react"

import AppContextType from "../types/AppContextType"

const defaultValues: AppContextType = {
  video: {
    playing: false,
    setPlaying: () => {}
  }
}

const AppContext = React.createContext(defaultValues)

export default AppContext
