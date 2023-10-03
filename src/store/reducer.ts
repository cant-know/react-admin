const defaultState = {
  num:20
}

const reducer = (state = defaultState,action:{type:string,num:number}) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch(action.type){
    case 'add1': 
      newState.num++
      break;
    case 'add2':
      newState.num += action.num
      break;
    default:
      break;
  }


  return newState
}

export default reducer