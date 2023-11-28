import { PageViewer } from './components/page-viewer'
import { getPlaceholderData } from './utils/get-placeholder-data'
import { getAlbums } from './data/spotify/get-albums'
import { SpotifyLoginButton } from './components/spotify-login-button'
import { useCallback, useEffect, useState } from 'react'
import { setToken } from './data/spotify/token'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const onLogin = useCallback((token: string) => {
    console.log('Jonny - token: ' + token)
    setToken(token)
    setLoggedIn(true)
  }, [])

  useEffect(() => {
    if (loggedIn) {
      console.log('Getting albums...')
      getAlbums().then(result => {
        console.log(result)
      })
    }
  }, [loggedIn])

  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: 'lightgray' }}>
        <PageViewer height={window.innerHeight} coverBlocks={getPlaceholderData(95, 10, 50)} />
      </div>
      {!loggedIn && <SpotifyLoginButton onLogin={onLogin} />}
    </>
  )
}

export default App;
