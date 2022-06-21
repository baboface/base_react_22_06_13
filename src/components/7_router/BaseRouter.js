import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./routes/Home";
import { Product } from "./routes/Product";
import { Intro } from "./routes/intro";
import { Header } from "./Header";
import { PageNotFound } from "./PageNotFound";

export const BaseRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
