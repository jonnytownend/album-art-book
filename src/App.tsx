import React from 'react'
import { getPlaceholderCoverImagesByCount } from './utils/cover-image-placeholder-loader'
import { PageViewer } from './components/page-viewer'
import { CoverBlock } from './data/cover-block'

function App() {
  const coverBlocks: CoverBlock[] = getPlaceholderCoverImagesByCount(100).map(image => ({
    image,
    scale: 1
}))
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: 'lightgray' }}>
      <PageViewer height={window.innerHeight} coverBlocks={coverBlocks} />
    </div>
  )
}

export default App;
