import Home from './pages/Home/Home';
import About from './pages/Page/Page';
import Projects from './pages/Projects/Projects'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Page from './pages/Page/Page'
import { v4 as uuidv4 } from 'uuid';
const routes =[
    {
        id: uuidv4(),
        name: "Home",
        element: <Home/>,
        path: "/",
    },
    {
        id: uuidv4(),
        name: "About",
        element: <About/>,
        path: "/about",
    },
    {
        id: uuidv4(),
        name: "Projects",
        element: <Projects/>,
        path: "/projects",
    },
    {
        id: uuidv4(),
        name: "Services",
        element: <Services/>,
        path: "/services",
    },
    {
        id: uuidv4(),
        name: "Contact",
        element: <Contact/>,
        path: "/contact",
    },
    {
        id: uuidv4(),
        name: "Blog",
        element: <Blog/>,
        path: "/blog",
    },
    {
        id: uuidv4(),
        name: "Page",
        element: <Page/>,
        path: "/page",
    },
]
export default routes;