import React from 'react';
import Button from '../components/Button';
import AddNewActorButton from '../components/AddNewActorButton';
import { HomePageContainer, ButtonsContainer, Cards } from './HomePageElements';
import ActorCard from '../components/ActorCard';
import Leonardo from '../Images/leonardo.jpeg';
import Angelina from '../Images/angelinaJolie.jpg';
import Jennifer from '../Images/jenniferAniston.webp';
import Dwayne from '../Images/dwayneJohnson.jpeg';

const HomePage = () => {
  return (
    <HomePageContainer>
      <ButtonsContainer>
        <Button btnText={'Sort'} />
        <Button btnText={'Select'} />
      </ButtonsContainer>
      <Cards>
        <ActorCard
          picture={Leonardo}
          actorName={'Leonardo Dicaprio'}
          professionText={'Actor & Writer'}
          nrLikes={47}
          bdgText={'Traveling,Reading,Crossword puzzles'}
          actorDescription={`Leonardo DiCaprio is an actor known for his edgy, unconventional roles. He started out in television before moving on to film, scoring an Oscar nomination for his role in What's Eating Gilbert Grape (1993). In 1997, DiCaprio starred in James Cameron's epic drama Titanic, which made him a star. The actor has also paired up with iconic director Martin Scorsese for several projects, including The Aviator (2004) and The Departed (2006). His more recent films include Inception (2010), Django Unchained (2012), The Wolf of Wall Street (2013) and The Revenant (2015), winning his first Oscar for the latter.`}
        />
        <ActorCard
          picture={Angelina}
          actorName={'Angelina Jolie'}
          professionText={'Actress & Producer'}
          nrLikes={56}
          bdgText={'Dancing,Modeling,Traveling,Blogging'}
          actorDescription={`Angelina Jolie is an American actress and director. She has received an Academy Award, Screen Actors Guild Awards, Golden Globe Awards. Jolie promotes humanitarian causes, and is noted for her work with refugees as a Special Envoy and former Goodwill Ambassador for the United Nations High Commissioner for Refugees (UNHCR). She has been cited as the world's "most beautiful" woman, a title for which she has received substantial media attention. She is the daughter of actor, Jon Voight and wife to actor Brad Pitt.`}
        />
        <ActorCard
          picture={Jennifer}
          actorName={'Jennifer Aniston'}
          professionText={'Actress & Director'}
          nrLikes={45}
          bdgText={'Coocking,Badminton,Photography'}
          actorDescription={`Jennifer Joanna Aniston is an American actress and producer. The daughter of actors John Aniston and Nancy Dow, she began working as an actress at an early age with an uncredited role in the 1988 film Mac and Me; her first major film role came in the 1993 horror comedy Leprechaun. Since her career progressed in the 1990s, she has become one of the world's highest-paid actresses. Films with her in the leading role have grossed over $1.6 billion worldwide, with 12 of them earning at least $100 million.`}
        />
        <ActorCard
          picture={Dwayne}
          actorName={'Jennifer Aniston'}
          professionText={'Actor & Producer'}
          nrLikes={32}
          bdgText={'Music,Wrestling,Martial Arts'}
          actorDescription={`Dwayne Douglas Johnson, also known by his ring name The Rock,[3] is an American actor, businessman, and former professional wrestler.[6][7] Widely regarded as one of the greatest professional wrestlers of all time, he wrestled for WWE for eight years prior to pursuing an acting career. His films have grossed over $3.5 billion in North America and over $10.5 billion worldwide,[10] making him one of the world's highest-grossing and highest-paid actors.`}
        />
      </Cards>
      <AddNewActorButton addNewButtonText={'Add new actor'} />
      {/*
      <EditButton />
      <SortButton btnText={'Ascending'} />
      <SortButton btnText={'Descending'} />
      <SortButton btnText={'Delete'} /> */}
    </HomePageContainer>
  );
};

export default HomePage;
