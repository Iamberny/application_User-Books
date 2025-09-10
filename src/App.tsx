import UsersPage from "./pages/usersPage";
import BooksPage from "./pages/BooksPage";
import UserProfile from "./pages/userProfile";
import BookDetails from "./pages/bookDetails";
import { Toaster } from "./components/ui/sonner";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Toaster position="bottom-right" />

      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
