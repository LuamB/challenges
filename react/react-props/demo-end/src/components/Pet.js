export default function Pet({name,sound, emoji, onHandleAnimal, isHungry}){
    return (

    // function feedMe(){
    //     if(isHungry){
    //         return "Feed me!!!"
    //     } else {
    //         return sound
    //     }
    // }


    <div onClick={()=>onHandleAnimal(name,sound)} className="animal">

      {/* {feedMe()} */}
      {isHungry? "Feed me!!!" : sound}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
      
    </div>
  )
  }