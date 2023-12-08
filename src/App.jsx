import styled from 'styled-components'
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import './animation/animatedCursor.css';
import html2canvas from 'html2canvas';
import ReactTyped from "react-typed";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, san-serif;
  }
`;


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

const Container = styled.form`
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
  font-size: 34px;
  font-weight: 700;
  padding: 0.25em 1em;
  border-radius: 50px;
  box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.20);
  @media
  ${(props) => props.theme.device.mobile},
  { 
    font-size: 30px;
  }

  `;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url(${props => props.$bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  width: 50vw;
  height: 28.125vw;
  
  box-sizing: border-box;
  padding:10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Alias = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: black;
`

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-size: 20px;
  white-space: pre;
  color: white;
`

const Title = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media
  ${(props) => props.theme.device.mobile},
  { 
    font-size: 30px;
  }
`

const Subtitle = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  word-spacing: 4px;
  white-space: nowrap;
  @media
  ${(props) => props.theme.device.mobile},
  { 
    font-size: 18px;
    white-space: pre;
  }
  @media
  ${(props) => props.theme.device.tablet},
  { 
    white-space: pre;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`

const StyledTextField = styled.input`
  width: 30vw;
  font-size: 34px;
  font-weight: 500;
  color: black;
  background-color: white;
  padding: 6px 8px;
  border-style: solid;
  margin: 0;
  box-shadow: 4px 5px 6px 0px #b2aeae;
  outline: none;
  @media
  ${(props) => props.theme.device.mobile},
  { 
    font-size: 22px;
  }
`

function App() {
  const [state, setState] = useState(0);
  const [selectedProverb, setSelectedProverb] = useState(0);
  const [selectedBg, setSelectedBg] = useState(0);
  const [data, setData] = useState(null);

  const handlePlayClick = () => {
    if (state === 0) {
      setState(1);
    } else {
      setState(0);
    }
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    handlePlayClick()
    let tmp = 0
    for(let i=0;i<=data.length-1;i++){
      tmp += data.charCodeAt(i)
    }
    const current = new Date()
    const num = tmp + current.getDate() + current.getMonth()+1 + current.getFullYear()
    setSelectedProverb(num % proverbs.length)
    setSelectedBg(num % cardBgs.length)
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

  const getData = (event) => {
    setData(event.target.value)
  }

  return (
    <Container onSubmit={handleButtonClick}>
      <GlobalStyle />
      {state === 0 && (
        <WordContainer>
          <Title>
            <ReactTyped strings={["活出你的信仰態度"]} typeSpeed={200} onComplete={(self) => {self.cursor.style.display = 'none'}} />
          </Title>
          <Subtitle>
            <ReactTyped strings={["重新審視生活的喧囂,\n傾聽內心真實的聲音,\n展現你的CAMEGO態度!"]} typeSpeed={100} startDelay={2200}
            onComplete={(self) => {self.cursor.style.display = 'none'}}/>
          </Subtitle>
          <StyledTextField type={"text"} onChange={getData} id="usrname" maxLength={20} required placeholder={"請輸入姓名"}/>
        </WordContainer>
      )}
      {state === 1 && (
        <CardContainer id={'proverbcard'}>
          <Card $bgUrl={cardBgs[selectedBg]}>
            <Alias>To:{data}</Alias>
            <ProverbText>{proverbs[selectedProverb]}</ProverbText>
          </Card>
        </CardContainer>
      )}
      <ButtonContainer>
        {state === 0 && (
          <Button type={"submit"}>抽箴言</Button> 
        )}
        {state === 1 && (
          <ButtonContainer>
            <Button onClick={handlePlayClick}>返回</Button>
            <Button onClick={downloadImage}>下載</Button>
          </ButtonContainer>
        )}
      </ButtonContainer>
    </Container>
  )
}

export default App
