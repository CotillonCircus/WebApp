import './App.css';
import {useDispatch,useSelector} from "react-redux"
import { getProductos } from "./redux/actions"
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()

  const productos = useSelector(state=>state.productos)

  useEffect(()=>{
    dispatch(getProductos())
  }
  ,[dispatch])

  return (
    <div className="App">
      {productos?.map((p)=>{
        return(
          <div >
            <span>{p.name}</span>
            <img src={p.img}></img>
          </div>
        )
      })}
    </div>
  );
}

export default App;
