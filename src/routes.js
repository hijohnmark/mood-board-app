import About from "./components/About";
import App from "./components/App";
import PostForm from "./components/PostForm";

const routes = [
        {
          path: "/",
          element: <App />
        },
        {
          path: "/newpost",
          element: <PostForm />
        },
        {
          path: "/about",
          element: <About />
        }
    ]

export default routes
