const path = require('path');
// /asimov/subscriptions/recommended_collections?except_collection_ids[]=13&except_collection_ids[]=95&except_collection_ids[]=83&except_collection_ids[]=76&except_collection_ids[]=21&except_collection_ids[]=283250&except_collection_ids[]=4
module.exports={
    devServer:{
        open:true,
        proxy:{
            //  "/x":{

            //     target:"https://www.jianshu.com",
            //    changOrigin:true
            // },
            "/asimov":{
                target:"https://www.jianshu.com",
                changOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            // "@":path.resolve(__dirname,"./src/"),
            // "api":path.resolve(__dirname,"./src/api/"),
            // "assets":path.resolve(__dirname,"./src/assets/"),
            // "common":path.resolve(__dirname,"./src/common/"),
            // "components":path.resolve(__dirname,"./src/components/"),
            // "router":path.resolve(__dirname,"./src/router/"),
            // "store":path.resolve(__dirname,"./src/store/"),
            // "utils":path.resolve(__dirname,"./src/utils/"),
            // "views":path.join(__dirname,"./src/views/"),
        }
    }
}