import {Routes, Route, useLocation} from 'react-router-dom'
import Header from "@/widgets/Header/index.js";
import Footer from "@/widgets/Footer/index.js";
import Todo from "@/pages/Todo/Todo.jsx";
import Home from "@/pages/Home/Home.jsx";
import Notes from "@/pages/Notes/Notes.jsx";
import Weather from "@/pages/Weather/Weather.jsx";


function App() {
  const location = useLocation()

  return (
    <div>
      <Header url={location.pathname} />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/todo"
          element={<Todo />}
        />
        <Route
          path="/notes"
          element={<Notes />}
        />
        <Route
          path="/weather"
          element={<Weather />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
