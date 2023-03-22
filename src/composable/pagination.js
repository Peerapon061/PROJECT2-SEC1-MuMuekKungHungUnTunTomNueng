
const pagination=(arrVocab,page=1)=>{
    let count = 1
    let realObj = []
    let temp = []
    console.log(arrVocab);
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

    console.log(realObj);
  return realObj.find(x=>x.pageId == page).pageVocabs
}


export {pagination}