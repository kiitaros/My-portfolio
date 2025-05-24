import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "@/components/ui/toaster"
import { ProjectsDetail } from "./pages/ProjectsDetail"
function App() {
  return (
    <>
    <Toaster />
     <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound/>} />
      <Route path="/projects/:id" element={<ProjectsDetail/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
