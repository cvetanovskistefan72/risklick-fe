import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { AuthProvider } from "./context/AuthContext";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <LoadingProvider>
          <AuthProvider>
            <Main />
          </AuthProvider>
        </LoadingProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
