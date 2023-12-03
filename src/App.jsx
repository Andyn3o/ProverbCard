import styled from 'styled-components'
import { useState } from 'react';

import html2canvas from 'html2canvas';

const proverbs = [
  '因為不瞭解，所以必須和　神、和主成為一體。',
  '若不瞭解，就會死。',
  '若不瞭解就去做，會搞砸一切。',
  '攝理史知道千年歷史已經開始，才能一直行動到現在。',
];

const cardBgs = [
  'https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1559239115-ce3eb7cb87ea?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  background-image: url(${"https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  gap: 50px;
`;

const Button = styled.button`
  background: var(--Gradient, linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%));
  color: white;
  cursor: pointer;
  

  font-size: 40px;
  font-family: Inter;
  font-weight: 700;
  padding: 0.25em 1em;
  border-radius: 50px;
  box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.20);
`;

const Card = styled.div`
  background-image: url(${props => props.$bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  height: ${9 * 40}px;
  width: ${16 * 40}px;

  box-sizing: border-box;
  padding:10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProverbText = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  text-shadow: 1px 1px 2px black;
  color: white;
`;

const CardContainer = styled.div`
`;

const WordContainer = styled.div`
  text-align: center;
  font-size: 20px;
  white-space: pre;
`

const Title = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Subtitle = styled.div`
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`

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
  
  const downloadImage = () => {
    const table = document.getElementById('proverbcard');

    html2canvas(table,{
      allowTaint: true,
      useCORS: true
    }).then(function (canvas) {
      const link = document.createElement('a');
      link.download = 'table.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  return (
    <Container>
      {state === 0 && (
        <WordContainer>
          <Title>
            {`活出你的信仰態度!`}
          </Title>
          <Subtitle>
            {`重新審視生活的喧囂， 傾聽內心真實的聲音， 展現你的CAMEGO態度!`}
          </Subtitle>
        </WordContainer>
      )}
      {state === 1 && (
        <CardContainer id={'proverbcard'}>
          <Card $bgUrl={cardBgs[selectedBg]}>
            <ProverbText>{proverbs[selectedProverb]}</ProverbText>
          </Card>
        </CardContainer>
      )}
      <ButtonContainer>
        <Button onClick={handleButtonClick}>{state === 0 ? '抽箴言' : '返回'}</Button> 
        {state === 1 && (
          <Button onClick={downloadImage}>下載</Button>
        )}
      </ButtonContainer>
    </Container>
  )
}

export default App
