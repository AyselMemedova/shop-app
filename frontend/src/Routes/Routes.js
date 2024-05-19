import Home from "../pages/site/Home/Home";
import Category from "../pages/site/Category/Category";
import Dashboard from "../pages/admin/Dashboard/Dashborad";
import Add from "../pages/admin/AddProduct/Add";
import Products from "../pages/admin/Products/Products";
import Women from "../pages/site/Women/Women";
import SiteRoot from "../pages/site/SiteRoot";
import AdminRoot from "../pages/admin/AdminRoots";
import Detail from "../pages/site/Detail/detail";

const ROUTES = [{
    path: "/",
    element: <SiteRoot/>,
    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path:"/category",
            element:<Category/>
        },
        {
            path:"/women",
            element:<Women/>
        },
        {
            path:"/detail/:_id",
            element:<Detail/>
        }
    ]
},
{
    path:"/admin",
    element:<AdminRoot/>,
    children:[
        {
            path:"",
            element:<Dashboard/>
        },
        {
            path:"/admin/add",
            element: <Add/>
        },
        {
            path:"/admin/products",
            element: <Products/>
        },
    ]
}

]

export default ROUTES