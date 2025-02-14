import {  Routes, Route } from "react-router-dom";
import Refer from "./Refer";
import ShowAllRefer from "./ShowAllRefer";
const App =()=>{
  
  return(
    <div>
       <Routes>
        <Route path="/" element={<Refer/>}/>
          <Route path="/showall" element={<ShowAllRefer/>} />
      </Routes>
    </div>
  )
}
export default App;