import http from "utils/http.js"


export const getHomeNow = ()=> http("get","/asimov/trending/now?count=15&note_ids=")