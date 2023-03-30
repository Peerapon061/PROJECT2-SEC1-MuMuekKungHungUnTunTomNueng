
const pagination=(arrVocab,page=1)=>{
    let count = 1
    let realObj = []
    let temp = []
    arrVocab.forEach(element => {
      
        
            temp.push(element)
       
        if(temp.length >= 4 ){
            realObj.push({
                'pageId':count,
                'pageVocabs' : temp
                })

            count++
            temp=[]
        }
    });

    if(temp.length!==0){ realObj.push({'pageId':count,'pageVocabs' : temp})}
  return realObj.find(x=>x.pageId == page).pageVocabs
}


export {pagination}