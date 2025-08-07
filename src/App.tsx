import UsersPage from "./pages/usersPage";
import ArticlesPage from "./pages/articlesPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/books" element={<ArticlesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
