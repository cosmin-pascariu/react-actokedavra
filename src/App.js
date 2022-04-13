import { createGlobalStyle } from 'styled-components';
import ActPicture from './components/ActPicture';
import AppTitle from './components/AppTitle';
import BadgeTask from './components/BadgeTask';
import Button from './components/Button';
import CloseButton from './components/CloseButton';
import ActName from './components/ActName';
import ActProfession from './components/ActProfession';
import LikeButton from './components/LikeButton';
import ActDescription from './components/ActDescription';
import EditButton from './components/EditButton';
import Notification from './components/Notification';
import Footer from './components/Footer';
import AddNewActButton from './components/AddNewActButton';
import CardCheckbox from './components/CardCheckbox';
import SortButton from './components/SortButton';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins',sans-serif;
    margin: 10px;
    box-sizing: border-box;
    }

    button{
      cursor: pointer;
    }

    body{
      margin: 0;
      background-color: #e8e8e8;
    }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Notification added={true} />
      <AppTitle />
      <Button btnText={'Sort'} />
      <Button btnText={'Select'} />
      <CloseButton />
      <CardCheckbox />
      <ActPicture />
      <ActName actName={'Leonardo Dicaprio'} />
      <ActProfession prfText={'Actor & Writer'} />
      <LikeButton nrLikes={47} />
      <BadgeTask bdgText={'Traveling'} />
      <ActDescription
        actDesc={`Leonardo DiCaprio is an actor known for his edgy, unconventional roles. He started out in television before moving on to film, scoring an Oscar nomination for his role in What's Eating Gilbert Grape (1993). In 1997, DiCaprio starred in James Cameron's epic drama Titanic, which made him a star. The actor has also paired up with iconic director Martin Scorsese for several projects, including The Aviator (2004) and The Departed (2006). His more recent films include Inception (2010), Django Unchained (2012), The Wolf of Wall Street (2013) and The Revenant (2015), winning his first Oscar for the latter.`}
      />
      <AddNewActButton />
      <EditButton />
      <SortButton btnText={'Ascending'} />
      <SortButton btnText={'Descending'} />
      <SortButton btnText={'Delete'} />
      <Footer />
    </>
  );
}

export default App;
