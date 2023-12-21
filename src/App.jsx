import styled from 'styled-components'
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { TypeAnimation } from 'react-type-animation';
import './animation/animatedCursor.css';
import html2canvas from 'html2canvas';

import proverbCardBackground from './assets/image/proverbCardBackground.svg';
import backgroundImage from './assets/image/Background.svg';
import proverbs from './Proverb.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, san-serif;
  }
`;

const cardBgs = [
  'proverbCardBackground'
];

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.$bgUrl});
  background-position-x: center;
  background-position-y: -600px;
  background-repeat: no-repeat;
  background-size: 2020px 3080px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-position-x: center;
  background-repeat: no-repeat;
  gap: 50px;

  @media
  ${(props) => props.theme.device.mobile},
  { 
    background-position-y: center;
    background-size: auto;
  }
  @media
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.desktop},
  { 
    
    background-position-y: -700px;
    background-size: auto 3180px;
  }
`;

const Button = styled.button`
  background: var(--Gradient, linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%));
  color: white;
  cursor: pointer;
  font-size: 34px;
  font-weight: 700;
  padding: 0.25em 1em;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  @media
  ${(props) => props.theme.device.mobile},
  { 
    font-size: 30px;
  }

  `;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${props => props.$bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  box-sizing: border-box;

  @media
  ${(props) => props.theme.device.mobile},
  { 
    width: 270px;
    height: 370px;
    padding: 20px;
  }
  @media
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.desktop},
  { 
    width: 540px;
    height: 740px;
    padding: 40px;
  }
`;

const ProverbText = styled.div`
  text-align: center;
  color: #4b3621;
  font-family: OpenHunnin;
  @media
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.desktop},
  { 
    font-size: 40px;
    font-weight: 600;
  }
  @media
  ${(props) => props.theme.device.mobile}
  { 
    font-size: 20px;
  }
`;

const CardContainer = styled.div`
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
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
  word-spacing: 4px;
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
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
  font-family: 'Noto Sans TC', sans-serif;
  height: 40px;
  font-size: 20px;
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
    height: 30px;
    font-size: 18px;
  }
`

function App() {
  const [state, setState] = useState(0);
  const [selectedProverb, setSelectedProverb] = useState(0);
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
    <Container onSubmit={handleButtonClick} $bgUrl={backgroundImage}>
      <GlobalStyle />
      {state === 0 && (
        <WordContainer>
          <Title>
            <TypeAnimation
            sequence={['與耶穌憶起聖誕', 1000]}
            cursor={false} speed={{type:'keyStrokeDelayInMs', value: 150}} wrapper="span" className="type"/>
          </Title>
          <Subtitle>
            <TypeAnimation sequence={['今年的聖誕節', 3000 , '與和平之王——耶穌', 3000, '一起慶祝吧！' ]}
            cursor={true} speed={{type:'keyStrokeDelayInMs', value: 170}} wrapper="span"/>
          </Subtitle>
          <StyledTextField type={"text"} onChange={getData} id="usrname" maxLength={20} required placeholder={"請輸入姓名"}/>
        </WordContainer>
      )}
      {state === 1 && (
        <CardContainer id={'proverbcard'}>
          <Card $bgUrl={proverbCardBackground}>
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