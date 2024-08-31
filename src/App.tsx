import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home-page";



const App: FC = () => {
  return (
    <>
    <div className="  " >
          <Routes>
            <Route path="/"  element={<Home/>} />
          </Routes>
    </div>
    </>
  )
}
export default App