
import comment from "../../components/comment"
export default {
    path:"/life",
    component:()=>import("views/life"),
    name:"life",
    redirect:"/life/comment",
    children:[
        {
            path:"comment",
            component:()=>import("components/comment"),
            name:"comment"
        },
        {
            path:"lncluded",
            component:()=>import("components/lncluded"),
            name:"lncluded"
        },
        {
            path:"popular",
            component:()=>import("components/popular"),
            name:"popular"
        }
    ]
}