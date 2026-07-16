import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import DepartmentPage from './pages/DepartmentPage'
import Placeholder from './pages/Placeholder'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        {/* Content pages — being rebuilt next */}
        <Route path="about" element={<Placeholder title="About" />} />
        <Route path="research" element={<Placeholder title="Research" />} />
        <Route path="newsroom" element={<Placeholder title="Newsroom" />} />
        <Route path="social" element={<Placeholder title="Media & Community" />} />

        {/* Departments (shared template) */}
        <Route path="index-construction" element={<DepartmentPage slug="index-construction" />} />
        <Route path="hedge-fund" element={<DepartmentPage slug="hedge-fund" />} />
        <Route path="derivatives" element={<DepartmentPage slug="derivatives" />} />
        <Route path="quant" element={<DepartmentPage slug="quant" />} />

        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
