const getCategories = async () => {
    try {
      // default method is get
      const res = await fetch('http://localhost:5000/Categoties')
      // if(res.status === 201) จะเขียน หรือ ok = 200 ก็ได้
  
      if (res.ok) {
        const Categoties = res.json()
        return Categoties
  
      }
      else { throw new error('Error, cannot get data') }
    } catch (error) {
      //ดัก try catch หากการอะไรก่อนที่จะได้ check if ex. machine error?  
      console.log(error);
    }
  
    //return await res.json()   //await เพราะเป็นบรรทัดต่อเนื่องกัน
  
  
  }
export {getCategories}