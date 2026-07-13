import { Cart } from "./Pages/Cart.jsx";
import { Blogs } from "./Pages/Blogs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import { SignIn } from "./Pages/signin.jsx";
import { Body } from "./Pages/Shop.jsx";
import ShopItems from "./components/ProductsShop.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Plans from "./Pages/Plans.jsx";
import Classes from "./Classes.jsx";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "classes", element: <Classes /> },
        { path: "memberships", element: <Plans /> },
        {
          path: "shop",
          element: <Body />,
          children: [
            {
              path: "",
              element: <ShopItems />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
        { path: "journal", element: <Blogs /> },
        { path: "contact", element: <Contact /> },
        { path: "signin", element: <SignIn /> },
        { path: "*", element: <Home /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export function Button({ children, onClick, id }) {
  return (
    <button onClick={onClick} className="Btn-Component" id={id}>
      {children}
    </button>
  );
}