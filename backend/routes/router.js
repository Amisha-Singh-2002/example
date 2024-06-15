const router=require("express").Router();
const {postData,getData}=require("../controller/allFunction");

router.post("/",postData);
router.get("/",getData);

module.exports=router;


