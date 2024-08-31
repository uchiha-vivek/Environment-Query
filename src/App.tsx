import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home-page";



const App: FC = () => {
  return (
    <>
    <div className="h-screen bg-gradient-to-r from-green-950 to-green-800 " >
          <Routes>
            <Route path="/"  element={<Home/>} />
          </Routes>
    </div>
    </>
  )
}
export default App