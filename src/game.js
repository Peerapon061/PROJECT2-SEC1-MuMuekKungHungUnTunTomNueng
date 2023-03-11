class game{
    constructor(list){
        this.list=list
        this.score=list.length
    }
    createdgame() {
        let question=[]
     for(let i=0;i<this.list.length;i++){
         while(true){
            let number=Math.floor(Math.random() * ((this.list.length) - 0) + 0);
            if(number==this.list.length){
                number=0
            }
            let check=question.find((x)=>x==number)
            if(check===undefined){
                question.push(number)
                break;
            }
         }
     }
     return question
    }
}
export {game}







