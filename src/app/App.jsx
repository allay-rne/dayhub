import {Routes, Route, useLocation} from 'react-router-dom'
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import Todo from "@/pages/Todo";
import Home from "@/pages/Home";
import Notes from "@/pages/Notes";
import Weather from "@/pages/Weather";
import {AuthProvider} from "@/app/providers/auth/AuthProvider.js";
import AuthModalContainer from "@/features/auth/AuthModalContainer";


function App() {
  const location = useLocation()

  return (
    <AuthProvider>
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
      <AuthModalContainer />
    </div>
    </AuthProvider>
  )
}

export default App
