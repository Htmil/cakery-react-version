import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//? Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Products from "./pages/Products";
import CupCakes from "./pages/Product/CupCakes";
import WedCakes from "./pages/Product/WedCakes";
//? Layouts
import RootLayout from "./layouts/RootLayout";
import ProdLayout from "./layouts/ProdLayout";
//? ErrorPage
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About title="About Us" text="Hello" />} />
      <Route path="contact" element={<Contact />} />
      
      <Route path="products" element={<ProdLayout />}>
        <Route path="cupcakes" element={<CupCakes />} />
        <Route path="wedcakes" element={<WedCakes />} />
      </Route>

      <Route path="*" element={<NotFound />} /> 
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
} 

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <header>
//         <nav>
//           <h1>slip3000</h1>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="about">About</NavLink>
//           <NavLink to="contact">Contact</NavLink>
//           <NavLink to="products">Products</NavLink>
//         </nav>
//       </header>
//       <main>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }
