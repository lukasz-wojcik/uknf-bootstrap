import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Pulpit from './pages/Pulpit'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pulpit />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
