const bodyParser = require("body-parser")
const express = require("express")
const app =express();
const mongohelper =require('../helper/helper')
const token=require('../Services/token')
const _=require('lodash')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.post('/login',async(req,res)=>{
//     let _tkn= await token.sign(req.body)
// })

// app.use(async(req,res,next)=>{
//     try {
//         await token.verify(req.headers["p-token"])
//         next()
//     } catch (error) {
        
//     }
// })
    
app.post("/data",async(req,res)=>{
    try {
       let _response= await mongohelper("User_Table","find")
       console.log(_response)
       res.send(_response)
    } catch (error) {
        console.log(error)
    }
})

app.post("/datasapi",async(req,res)=>{
   try {
      let _response= await mongohelper("customer_Table","find")
      console.log(_response)
      res.send(_response)
   } catch (error) {
       console.log(error)
   }
})


app.post('/insert-data',async(req,res)=>{
   try {
     let _insertData= await mongohelper('User_Table',"insertMany",req.body.params);
     return res.status(200).json({status:true,statusMessage:"success",data:_insertData.data})   
   } catch (error) {
    console.log("gfdfjgf",error)
   }
})


app.post('/insert-datas',async(req,res)=>{
   try {
     let _insertData= await mongohelper('Employee_Table',"insertMany",req.body.params);
     return res.status(200).json({status:true,statusMessage:"success",data:_insertData.data})   
   } catch (error) {
    console.log("gfdfjgf",error)
   }
})

app.post('/insertstocks',async(req,res)=>{
   try {
     let _insertData= await mongohelper('Stock_Table',"insertMany",req.body.params);
     return res.status(200).json({status:true,statusMessage:"success",data:_insertData.data})   
   } catch (error) {
    console.log("gfdfjgf",error)
   }
})



app.post('/insert',async(req,res)=>{
   try {
     let _insertData= await mongohelper('customer_Table',"insertMany",req.body.params);
     return res.status(200).json({status:true,statusMessage:"success",data:_insertData.data})   
   } catch (error) {
    console.log("gfdfjgf",error)
   }
})
app.post('/inserts',async(req,res)=>{
   try {
     let _insertData= await mongohelper('Product_Table',"insertMany",req.body.params);
     return res.status(200).json({status:true,statusMessage:"success",data:_insertData.data})   
   } catch (error) {
    console.log("gfdfjgf",error)
   }
})

async function _prepareUpdateData(_flag,_body){
    return new Promise((resolve,reject)=>{
        try {
            let _data={
                "filter":{},
                "query":{$set:{},$push:{}},
                "mode": { upsert: true, new: true, arrayFilters: [] }
             }
             let _params={}
             _data.filter['_id']=_body._id
    
             if(_flag =="U"){
             _.each(_body,(_v,_k)=>{
                 if(_v.constructor.name == "Object" || _v.constructor.name == "Array"){
                    if(_v.constructor.name == "Object"){
                       _.each(_v,(_v1,_k1)=>{
                          if(_k1 =="_id"){
                            _data.filter[`${_k}._id`] = _v1
                          }else{
                              if(_v1.constructor.name == "Object" || _v1.constructor.name == "Array"){
                                 
                              }else{
                                _params[`${_k}.${_k1}`]=_v1
                              }
                          }
                       }) 
                    }else if(_v.constructor.name == "Array"){
                      let _newData = _.filter(_v,(_fo,_fi)=>{return !_fo._id})
                      console.log("dfghkdfjgh",_newData)
                      _.each(_v,(_o,_i)=>{
                        if(!_o._id || _o._id ==""){
                           _data.query.$push[`${_k}`]=_newData
                        }else{
                            _.each(_o,(_v2,_k2)=>{
                                if(_k2 =="_id"){
                                   _data.filter[`${_k}._id`] = _v2
                                }else{
                                  if(_v2.constructor.name=="Array" || _v2.constructor.name=="Object"){
                                     
                                  }else{
                                      _params[`${_k}.$.${_k2}`] = _v2
                                  }
                                }
                            })
                        }
                         
                      })
                    }
                 }else{
                    _params[_k] = _v            
                 }
             })
             delete _params._id
             _data.query.$set=_params 
             resolve({status:"sucess",_payload:_data})
            }
        } catch (error) {
           console.log("gdgh",error) 
        }

    })
}

app.post('/update-data',async(req,res)=>{
 try {
    let updateData = await _prepareUpdateData("U",req.body.params)
    mongohelper('User_Table',"updateOne",updateData._payload).then((result)=>{
       return res.status(200).json({status:true,statusMessage:"success",data:result})
    }).catch((error)=>{
        return res.status(400).json({status:false,statusMessage:"failure",data:[],desc:error})
    })
 } catch (error) {
    console.log("sdfbsjh",error)
 }
})






app.listen(8080,()=>{
  console.log(`https:localhost:8080 connected`)
})