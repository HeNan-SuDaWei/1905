import http from "utils/http.js"


export const getHomeNow = ()=> http("get","/a/asimov/trending/now?count=15&note_ids=")

export const routing = ()=> http("get","/a/asimov/collections/slug/5AUzod/")

export const photography=()=>http("get","/a/asimov/collections/slug/7b2be866f564");

export const handpainted=()=>http("get","/a/asimov/collections/slug/8c92f845cd4d");

export const Internet=()=>http("get","/a/asimov/collections/slug/V2CqjW");