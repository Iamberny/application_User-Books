import UsersPage from "./pages/usersPage";
import ArticlesPage from "./pages/articlesPage";
import UserProfile from "./pages/userProfile";
import BookDetails from "./pages/bookDetails";
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
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
