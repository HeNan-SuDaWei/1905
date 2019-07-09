import http from "utils/http.js"


export const getHomeNow = ()=> http("get","/a/asimov/trending/now?count=15&note_ids=")  


export const getHomeLife = ()=> http("get","/a/asimov/collections/slug/8c92f845cd4d")  

export const getHomeLife1 = ()=> http("get","/a/asimov/collections/slug/8c92f845cd4d/public_notes?page=1&count=10&order_by=added_at")  
export const getHomeLife2 = ()=> http("get","/a/asimov/collections/slug/8c92f845cd4d/public_notes?page=1&count=10&order_by=commented_at")  
export const getHomeLife3 = ()=> http("get","/a/asimov/collections/slug/8c92f845cd4d/public_notes?page=1&count=10&order_by=top")  





export const routing = ()=> http("get","/a/asimov/collections/slug/5AUzod/")

export const photography=()=>http("get","/a/asimov/collections/slug/7b2be866f564");

export const handpainted=()=>http("get","/a/asimov/collections/slug/8c92f845cd4d");

export const Internet=()=>http("get","/a/asimov/collections/slug/V2CqjW");
