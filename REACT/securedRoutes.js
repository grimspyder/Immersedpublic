
const Blogs = lazy(() => import("../components/blogadmin/Blogs.jsx"));
const PseudoAds = lazy(() => import("../components/fakeads/PseudoAds.jsx"));
const PageNotFound = lazy(() => import("../components/error/Error404"));


const blogApproval = [
  {
    path: "/blogsapproval",
    name: "Blogs",
    exact: true,
    element: Blogs,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
];

const pseudoAds = [
  {
    path: "/pseudoads",
    name: "PseudoAds",
    exact: true,
    element: PseudoAds,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
];

const errorRoutes = [
  {
    path: "*",
    name: "Error - 404",
    element: PageNotFound,
    roles: [],
    exact: true,
    isAnonymous: false,
  },
];


const allRoutes = [
  ...blogApproval,
  ...pseudoAds,  
  ...errorRoutes,
];
export default allRoutes;
