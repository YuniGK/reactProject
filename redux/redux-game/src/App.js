import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  //필요한 값을 불러온다.
                            //스토어의 값들을 가져온다. 그중 count를 가져온다.
  const count = useSelector(state => state.count);

  const increase = () => {
    //액션을 넣는다. 액션은 type(액션의 이름), payload(선택사항)로 구성된다.
    //dispatch({type : , payload : })
    dispatch({type : "INCREMENT"})
  }

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
