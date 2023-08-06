import Home from './pages/Home/Home';
import Homestyle1 from './pages/Homestyle1/Homestyle1';
import Homestyle2 from './pages/Homestyle2/Homestyle2';
import Homestyle3 from './pages/Homestyle3/Homestyle3';
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
import Servicesingle from './pages/Servicesingle/Servicesingle';
import Service from './pages/Service/Service';
import Servicestyle2 from './pages/Servicestyle2/Servicestyle2';
import BlogFullWidth from './pages/BlogFullWidth/BlogFullWidth';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import BlogLeftSidebar from './pages/BlogLeftSidebar/BlogLeftSidebar';
import BlogRightSidebar from './pages/BlogRightSidebar/BlogRightSidebar';
import Blogdetailsrightsidebar from './pages/Blogdetailsrightsidebar/Blogdetailsrightsidebar';
import Blogdetailsleftsidebar from './pages/Blogdetailsleftsidebar/Blogdetailsleftsidebar';
import Blogdetailsfullwidth from './pages/Blogdetailsfullwidth/Blogdetailsfullwidth';
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
        name: "Servicesingle",
        element: <Servicesingle/>,
        path: "/servicesingle",
    },
    {
        id: uuidv4(),
        name: "Servicestyle2",
        element: <Servicestyle2/>,
        path: "/servicestyle2",
    },
    {
        id: uuidv4(),
        name: "Service",
        element: <Service/>,
        path: "/service",
    },
    {
        id: uuidv4(),
        name: "BlogRightSidebar",
        element: <BlogRightSidebar/>,
        path: "/blogrightsidebar",
    },
    {
        id: uuidv4(),
        name: "BlogLeftSidebar",
        element: <BlogLeftSidebar/>,
        path: "/blogleftsidebar",
    },
    {
        id: uuidv4(),
        name: "BlogFullWidth",
        element: <BlogFullWidth/>,
        path: "/blogfullwidth",
    },
    {
        id: uuidv4(),
        name: "BlogDetails",
        element: <BlogDetails/>,
        path: "/blogdetails",
    },
    {
        id: uuidv4(),
        name: "Blogdetailsrightsidebar",
        element: <Blogdetailsrightsidebar/>,
        path: "/blogdetailsrightsidebar",
    },
    {
        id: uuidv4(),
        name: "Blogdetailsleftsidebar",
        element: <Blogdetailsleftsidebar/>,
        path: "/blogdetailsleftsidebar",
    },
    {
        id: uuidv4(),
        name: "Blogdetailsfullwidth",
        element: <Blogdetailsfullwidth/>,
        path: "/blogdetailsfullwidth",
    },
    {
        id: uuidv4(),
        name: "Homestyle1",
        element: <Homestyle1/>,
        path: "/homestyle1",
    },
    {
        id: uuidv4(),
        name: "Homestyle2",
        element: <Homestyle2/>,
        path: "/homestyle2",
    },
    {
        id: uuidv4(),
        name: "Homestyle3",
        element: <Homestyle3/>,
        path: "/homestyle3",
    },
]
export default routes;