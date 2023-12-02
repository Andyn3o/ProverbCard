import './App.css'
import styled from 'styled-components'
import { useState } from 'react';

import bgimg from './assets/img/bg.jpg'
import pv1 from './assets/img/pv1.png'
import pv2 from './assets/img/pv2.png'
import pv3 from './assets/img/pv3.png'

const proverbs = [
  '因為不瞭解，所以必須和　神、和主成為一體。',
  '若不瞭解，就會死。',
  '若不瞭解就去做，會搞砸一切。',
  '攝理史知道千年歷史已經開始，才能一直行動到現在。',
];

const cardBgs = [
  'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701388800&semt=ais',
  'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701388800&semt=ais',
  'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  background-image: url(${"https://img.freepik.com/free-psd/merry-christmas-banner-with-colorful-pastel-tones_1361-4460.jpg?w=1380&t=st=1701527019~exp=1701527619~hmac=82c6ad86b3c71cef7d4feebbc2eb3eda705c6f4cba68eee9abd5daed54589654"});
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Button = styled.button`
  background: black;
  color: white;
  cursor: pointer;
  font-size: 100px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

// const Title = styled.div`
//   font-size: 100px;
//   color: black;
// `;

const Card = styled.div`
  background-image: url(${props => props.$bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: ${9 * 30}px;
  width: ${16 * 30}px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProverbText = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-shadow: 1px 1px 2px black;
`;

const CardContainer = styled.div`
  height: ${9 * 30}px;
  width: ${16 * 30}px;
`;

function App() {
  const [state, setState] = useState(0);
  const [selectedProverb, setSelectedProverb] = useState(0);
  const [selectedBg, setSelectedBg] = useState(0);

  const handlePlayClick = () => {
    if (state === 0) {
      setState(1);
    } else {
      setState(0);
    }
  }

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 100);
    setSelectedProverb(num % proverbs.length)
    setSelectedBg(num % cardBgs.length)
  }

  const handleButtonClick = () => {
    handlePlayClick();
    generateRandomNumber();
  }
  
  return (
    <Container>
      <Button onClick={handleButtonClick}>{state === 0 ? '抽箴言' : '返回'}</Button>
      <CardContainer>
        {state === 1 && (
          <Card $bgUrl={cardBgs[selectedBg]}>
            <ProverbText>{proverbs[selectedProverb]}</ProverbText>
          </Card>
        )}
      </CardContainer>  
    </Container>
  )
}

export default App
