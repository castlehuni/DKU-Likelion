//import {Fragment} from "react";
//import Counter from "./Counter.js";
//import Name from "./Name.js"
import {Routes, Route} from "react-router-dom";

//import Navigate from "./Navigate/Navigate";

//import Home from "./Router/Home.js";
//import Admin from "./Router/Admin.js";
//import Result from "./Router/Result.js";
import Menu from "./MenuBar/Menu.js";
import MenuHome from "./MenuBar/MenuHome.js";
import MenuLogin from "./MenuBar/MenuLogin.js";
import MenuProject from "./MenuBar/MenuProject.js";

import Context from "./Context.js";
import { LionContext, LionProvider } from "./LionContext.js";

function App() {
  return (
    <div>
      {/*<Counter />*/}
      {/*<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>*/}
      {/* <Routes>
        <Route elememt={<Menu />}>
          <Route path="/" element={<MenuHome />} />
          <Route path="/project" element={<MenuProject />} />
          <Route path="/login" element={<MenuLogin />} />
        </Route>
      </Routes> */}
      <LionProvider>
        <Context />
      </LionProvider>
  </div>  
  );
}

export default App;
