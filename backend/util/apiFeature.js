
class APIFeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString;
    }


    Search(){
        const keyword = this.queryString.keyword
        ?{
            name:{
                $regex: this.queryString.keyword,
                $options:"i"
            }
        }
        :{};
        this.query=this.query.find({...keyword})

        return this
     }

    filter(){
        const queryObj={...this.queryString}
    const excludeFields=["keyword","page","sort","limit","fields"]
    excludeFields.forEach(el=> delete queryObj[el])
 
    let queryStr=JSON.stringify(queryObj)
   queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`)
    
    this.query.find(JSON.parse(queryStr))

    return this

    }

    sort(){
        if(this.queryString.sort){
            const sortBy=this.queryString.sort.split(',').join(' ')
         this.query= this.query.sort(sortBy)
         }
     return this

    }

    LimitFields(){
        
        if(this.queryString.fields){
            const fields=this.queryString.fields.split(',').join(' ')
             this.query=this.query.select(fields)
          }
          return this
     
    }

    Pagination(){
        let page=this.queryString.page*1||1
        let limit=this.queryString.limit*1||10
  
        let skip=(page-1)*limit
        this.query=this.query.skip(skip).limit(limit)

        return this

         }
        
}

module.exports=APIFeatures