import { PageViewer } from './components/page-viewer'
import { getPlaceholderData } from './utils/get-placeholder-data'

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: 'lightgray' }}>
      <PageViewer height={window.innerHeight} coverBlocks={getPlaceholderData(95, 10, 50)} />
    </div>
  )
}

export default App;
