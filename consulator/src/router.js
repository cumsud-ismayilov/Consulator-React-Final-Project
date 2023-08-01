import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Page from './pages/Page/Page'
import Pricing from './pages/Pricing/Pricing';
import Testimional from './pages/Testimional/Testimional';
import Error404 from './pages/Error404/Error404';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Projectsingle from './pages/Projectsingle/Projectsingle';
import Projectstyle2 from './pages/Projectstyle2/Projectstyle2';
import Project from './pages/Project/Project';
import Servicesingle2 from './pages/Servicesingle2/Servicesingle2';
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
    {
        id: uuidv4(),
        name: "Login",
        element: <Login/>,
        path: "/login",
    },
    {
        id: uuidv4(),
        name: "Register",
        element: <Register/>,
        path: "/register",
    },
    {
        id: uuidv4(),
        name: "Error404",
        element: <Error404/>,
        path: "/error404",
    },
    {
        id: uuidv4(),
        name: "Pricing",
        element: <Pricing/>,
        path: "/pricing",
    },
    {
        id: uuidv4(),
        name: "Testimional",
        element: <Testimional/>,
        path: "/testimional",
    },
    {
        id: uuidv4(),
        name: "Projectsingle",
        element: <Projectsingle/>,
        path: "/projectsingle",
    },
    {
        id: uuidv4(),
        name: "Projectstyle2",
        element: <Projectstyle2/>,
        path: "/projectstyle2",
    },
    {
        id: uuidv4(),
        name: "Project",
        element: <Project/>,
        path: "/project",
    },
    {
        id: uuidv4(),
        name: "Servicesingle2",
        element: <Servicesingle2/>,
        path: "/servicesingle2",
    },
]
export default routes;