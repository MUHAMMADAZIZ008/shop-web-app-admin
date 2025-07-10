import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import { HomePage } from "./pages/home/home";
import ProductPage from "./pages/product/product";
import CategoryPage from "./pages/category/category";
import { ProfilePage } from "./pages/profile/profile";

function App() {
  // const { user, isDarkMode, themeParams } = useTelegram();

  return (
    <div className="telegram-webapp">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
