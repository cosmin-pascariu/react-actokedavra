import { createGlobalStyle } from 'styled-components';
import AppTitle from './components/AppTitle';
import Notification from './components/Notification';
import Footer from './components/Footer';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins',sans-serif;
    box-sizing: border-box;
    margin: 0;
    }

    button{
      cursor: pointer;
    }

    body{
      margin: 0;
      width: 100%;
      background-color: #f8f4fc;
    }

    .mainContainer{
      width: 100vw;
    }

`;
function App() {
  return (
    <div className='mainContainer'>
      <GlobalStyle />
      <Notification
        lightColor={true}
        isVisible={true}
        icon={<AiOutlineCheckCircle />}
        notificationText={'Actor added succesfully!'}
      />
      <Notification
        lightColor={false}
        isVisible={true}
        icon={<BsQuestionCircle />}
        notificationText={`You can't add more than 7 actors!`}
      />
      <Header content={<AppTitle />} />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
