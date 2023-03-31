


const playsound  =()=>{

    const sound = new Audio('click.wav')
    sound.play();
  }



  const worngSound = ()=>{
          const sound = new Audio('delete.mp3')
          sound.play()
  }

  const colletSound = ()=>{
        const sound = new Audio('collet.mp3')
        sound.play()
  }

const clickButton = ()=>{

const sound = new Audio('clickButton.mp3')
sound.play()

}

  export {playsound,worngSound,colletSound,clickButton}