import About from "./components/About";
import App from "./App";
import PostForm from "./components/PostForm";
import MoodBoard
 from "./components/MoodBoard";
const routes = [
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "/",
              element: <MoodBoard /> 
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
        },
        
    ]

export default routes
