import {Routes, Route, useLocation} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import Todo from "@/pages/Todo";
import Home from "@/pages/Home";
import Notes from "@/pages/Notes";
import Weather from "@/pages/Weather";
import {AuthProvider} from "@/app/providers/auth/AuthProvider.js";
import AuthModalContainer from "@/features/auth/AuthModalContainer";
import {ThemeProvider} from "@/app/providers/theme/model/ThemeContext.jsx";


function App() {
  const location = useLocation()

  return (
    <HelmetProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
