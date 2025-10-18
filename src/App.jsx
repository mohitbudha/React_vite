import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddStudent from "./components/pages/Addstudent";
import StudentList from "./components/pages/StudentsList";
import EditStudent from "./components/pages/Editstudent";
import StudentCard from "./components/pages/StudentCard";
import HomePage from "./components/pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import TimerApp from "./components/TimerApp";
import TodoList from "./components/pages/TodoApp";
import ProductTable from "./component/Fetchdata";
import SingleProduct from "./component/Singleproduct";
import PopoverExample from "./component/Modalbo";


function App() {
  const {theme}= useContext (ThemeContext);
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/add" element={<AddStudent />} />
            <Route path="/list" element={<StudentList />} />
            <Route path="/list/edit/:id" element={<EditStudent />} />
            <Route path="/student/:id" element={<StudentCard/>}/> 
            <Route path="/timer" element={<TimerApp/>}/>
            <Route path="/todo" element={<TodoList/>}/>
            <Route path="/product" element={<ProductTable/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
            <Route path="/modalbox" element={<PopoverExample/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;