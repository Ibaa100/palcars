import React from "react";
import { createRoot} from "react-dom/client";
import Login from "./Pages/Login.jsx";
import HeaderLayout from "./Layout/HeaderLayout.jsx";
const  App =()=>{
    return(
       <div>
            <Login />
            <h1>Home page</h1>
       </div>
          
           
      
    )
}

const contenter = document.getElementById("root");
const root = createRoot(contenter)

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
