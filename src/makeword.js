
class myword {
    constructor(word, meaning) {
        this.word = word
        this.meaning = [meaning]
        this.selected =false
    }
    setword(newword){
        this.word=newword
    }
    setmeanning(newmeaning){
        thisl.meaning=[newmeaning]
    }
    addmeanning(newmeaning){
        let check=this.meaning.find((x)=>x===newmeaning)
        console.log(check);this.addmeanning
        if(check===undefined){
            this.meaning.push(newmeaning)
            return 1
        }else{
         return 0
        }
        
    }
}
export {myword}


