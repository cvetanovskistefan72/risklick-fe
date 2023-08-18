import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { AuthProvider } from "./context/AuthContext";
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <ApiProvider>
          <AuthProvider>
            <Main />
          </AuthProvider>
        </ApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
