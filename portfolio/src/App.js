import "./App.css";
import { useEffect, useState, createContext } from "react";
import { ToDoList } from "./components/ToDoList";
import { Apis } from "./components/Apis";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Contact } from "./components/Contact";
import { NavBar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Form } from "./components/Form";
import { CustomHooks } from "./components/CustomHooks";
import { Cat } from "./components/Cat";
export const AppContext = createContext();

function App() {
  const [username, setUser] = useState("not set");
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // when switching tabs, data doesn't re fetch
      },
    },
  });
  return (
    <div className="App">
      {/* All components inside have access to react query */}
      <QueryClientProvider client={client}>
        {/* AppContext.Provider makes it so all component inside have access to global info */}

        <AppContext.Provider value={{ username, setUser }}>
          <Router>
            {/* If want to make NavBar, need to be in router */}
            <NavBar />
            <Routes>
              {/* Home page */}
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<ToDoList />} />
              <Route path="/apis" element={<Apis />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Form />} />
              <Route path="/customhooks" element={<CustomHooks />} />
              <Route path="/getCatFact" element={<Cat />} />
              {/* Page not found */}
              <Route path="*" element={<h1>Page Not Found!</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
