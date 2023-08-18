import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { AuthProvider } from "./context/AuthContext";
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <AuthProvider>
          <ApiProvider>
            <Main />
          </ApiProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
