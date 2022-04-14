import React from 'react';
import ActorPicture from '../components/ActorPicture';
import BadgeTask from '../components/BadgeTask';
import Button from '../components/Button';
import ActorName from '../components/ActorName';
import ActorProfession from '../components/ActorProfession';
import LikeButton from '../components/LikeButton';
import ActorDescription from '../components/ActorDescription';
import EditButton from '../components/EditButton';
import AddNewActorButton from '../components/AddNewActorButton';
import SortButton from '../components/SortButton';
import Angelina from '../Images/angelinaJolie.jpg';
import { HomePageContainer, ButtonsContainer, Cards } from './HomePageElements';
import ActorCard from '../components/ActorCard';

const HomePage = () => {
  return (
    <HomePageContainer>
      <ButtonsContainer>
        <Button btnText={'Sort'} />
        <Button btnText={'Select'} />
      </ButtonsContainer>
      <Cards>
        <ActorCard />
        <ActorCard />
        <ActorCard />
      </Cards>
      {/* <ActorPicture picture={Angelina} />
      <ActorName actorName={'Leonardo Dicaprio'} />
      <ActorProfession professionText={'Actor & Writer'} />
      <LikeButton nrLikes={47} />
      <BadgeTask bdgText={'Traveling'} />
      <ActorDescription
        actorDescription={`Leonardo DiCaprio is an actor known for his edgy, unconventional roles. He started out in television before moving on to film, scoring an Oscar nomination for his role in What's Eating Gilbert Grape (1993). In 1997, DiCaprio starred in James Cameron's epic drama Titanic, which made him a star. The actor has also paired up with iconic director Martin Scorsese for several projects, including The Aviator (2004) and The Departed (2006). His more recent films include Inception (2010), Django Unchained (2012), The Wolf of Wall Street (2013) and The Revenant (2015), winning his first Oscar for the latter.`}
      />
      <AddNewActorButton addNewButtonText={'Add new actor'} />
      <EditButton />
      <SortButton btnText={'Ascending'} />
      <SortButton btnText={'Descending'} />
      <SortButton btnText={'Delete'} /> */}
    </HomePageContainer>
  );
};

export default HomePage;
