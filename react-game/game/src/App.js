import { useState } from 'react';
import './App.css';

//생성한 컴포넌트 가져오기
import Box from './component/Box';

const choice = {
  rock : {
    name : 'Rock'
    , img : '/img/rock.png'
  }
  , scissors : {
    name : 'Scissors'
    , img : '/img/scissors.png'
  }
  , paper : {
    name : 'Paper'
    , img : '/img/paper.png'
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
  }

  const randomChoice = () => {
      //객체의 키값만 뽑아 배열화해준다.
      let itemArray = Object.keys(choice);
      let randomItem = Math.floor(Math.random() * 3)

      setComputerSelect(choice[itemArray[randomItem]]);
  }

  return (
    <div>
      <div className="main">        
        <Box title = "You" item = {userSelect}/>
        <Box title = "Computer" item = {computerSelect}/>      
      </div>

      <div className='button-box'>
        {/*
        아래와 같이 함수를 선언하면 리액트가 처음 실행될 때, 화면을 그리면서
        함수를 호출한다.
        <button onClick={play('scissors')} >가위</button>
        <button onClick={() => play('scissors')} />가위</button>
        */}
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
