
class myword {
    static  count = 1
    constructor(word, meaning) {
        this.id = myword.count++
        this.word = word
        this.meaning = meaning
        this.status = false 
        
       
    }
    setword(newword){
        this.word=newword
    }
    setmeanning(newmeaning){
        thisl.meaning=newmeaning
    }
    addmeanning(newmeaning){
        let check=this.meaning.find((x)=>x===newmeaning)
        console.log(check);
        this.addmeanning
        if(check===undefined){
            this.meaning.push(newmeaning)
            return 1
        }else{
         return 0
        }
        
    }
}
export {myword}
// class myword {
//     constructor(word, meaning) {
//         this.word = word
//         this.meaning = [meaning]
        
       
//     }
//     setword(newword){
//         this.word=newword
//     }
//     setmeanning(newmeaning){
//         thisl.meaning=[newmeaning]
//     }
//     addmeanning(newmeaning){
//         let check=this.meaning.find((x)=>x===newmeaning)
//         console.log(check);
//         this.addmeanning
//         if(check===undefined){
//             this.meaning.push(newmeaning)
//             return 1
//         }else{
//          return 0
//         }
        
//     }
// }
// export {myword}


