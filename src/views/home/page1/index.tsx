/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector,useDispatch } from "react-redux"

const page1 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {num} = useSelector((state) => ({
    // @ts-ignore
    num:state.num
  }))
  
  const changeNum = () => {
    dispatch({type:'add2',num:3})
  }

  return(
    <div className="page1">
      <p>{num}</p>
      <button onClick={changeNum}>修改</button>
    </div>
  )
}

export default page1