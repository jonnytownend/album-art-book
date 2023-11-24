import React from 'react'
import { Page } from './components/page'
import { Cover } from './components/cover'
import { getPlaceholderCoverImagesByCount } from './utils/cover-image-placeholder-loader'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'lightgray' }}>
      <Page width={1400}>
        {getPlaceholderCoverImagesByCount(100).map((image, index) => (
          <Cover image={image} size={350} />
        ))}
      </Page>
    </div>
  )
}

export default App;
