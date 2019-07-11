import http from "utils/http.js"


export const getHomeNow = ()=> http("get","/a/asimov/trending/now?count=15&note_ids=")  


export const getHomeLife = ()=> http("get","/a/asimov/collections/slug/8c92f845cd4d")

export const getContent = (id)=> http("get","/a/asimov/p/"+id)   
export const getContentPinLun = (id)=> http("get","/a/asimov/notes/seo_recommendations",{slug:id}) 



export const getHomeLife1 = ()=> http("get","/a/asimov/collections/slug/8c92f845cd4d/public_notes?page=1&count=10&order_by=added_at")  
export const getHomeLife2 = ()=> http("get","/a/asimov/collections/slug/8c92f845cd4d/public_notes?page=1&count=10&order_by=commented_at")  
export const getHomeLife3 = ()=> http("get","/a/asimov/collections/slug/8c92f845cd4d/public_notes?page=1&count=10&order_by=top")  

    



export const routing = ()=> http("get","/a/asimov/collections/slug/5AUzod/")

export const photography=()=>http("get","/a/asimov/collections/slug/7b2be866f564");

export const handpainted=()=>http("get","/a/asimov/collections/slug/8c92f845cd4d");

export const Internet=()=>http("get","/a/asimov/collections/slug/V2CqjW");
<<<<<<< HEAD

export const Themovie=()=>http("get","/a/asimov/collections/slug/1hjajt");

export const Thestory=()=>http("get","/a/asimov/collections/slug/fcd7a62be697");

/* 参数1-6 */

export const Naturalscience=()=>http("get","/a/asimov/collections/slug/cc7808b775b4");

export const Thepoem=()=>http("get","/a/asimov/collections/slug/vHz3Uc");

export const marriage=()=>http("get","/a/asimov/collections/slug/70b8514fb442");

export const Anovel=()=>http("get","/a/asimov/collections/slug/xYuZYD");

export const traditional=()=>http("get","/a/asimov/collections/slug/742422443ad3");

export const work=()=>http("get","/a/asimov/collections/slug/Jgq3Wc");

/*参数7-12*/

export const food=()=>http("get","/a/asimov/collections/slug/qqfxgN");

export const product=()=>http("get","/a/asimov/collections/slug/ad41ba5abc09");

export const comic=()=>http("get","/a/asimov/collections/slug/263e0ef8c3c3");

// export const original=()=>http("get","/a/asimov/collections/slug/6fba5273f339");

export const Originalbusiness=()=>http("get","/a/asimov/collections/slug/LLCyGH");

export const life=()=>http("get","/a/asimov/collections/slug/f6b4ca4bb891");

export const entertainment=()=>http("get","/a/asimov/collections/slug/e50258a6a44b");

//详情页

export const serial=()=>http("get","/a/asimov/books/214/chapters?page=1&count=15&order=d");

//更多分类

export const Pointstired=()=>http("get","/a/asimov/books/categories");

//付费
export const Pay=(id)=>http("get","/a/asimov/books",{page:1,count:12,category_id:id});

=======
>>>>>>> dev
