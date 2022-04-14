import React from 'react';
import styled from 'styled-components';
import ActorPicture from './ActorPicture';
import Leonardo from '../Images/leonardo.jpeg';
import ActorName from './ActorName';
import ActorProfession from './ActorProfession';
import LikeButton from './LikeButton';
import BadgeTask from './BadgeTask';
import ActorDescription from './ActorDescription';
import EditButton from './EditButton';
import CloseButton from './CloseButton';

const CardContainer = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  height: min-content;
  flex-wrap: wrap;
`;

const ActorCard = () => {
  return (
    <CardContainer>
      <CloseButton />
      <ActorPicture picture={Leonardo} />
      <CardContent>
        <ActorName actorName={'Leonardo Dicaprio'} />
        <Row>
          <ActorProfession professionText={'Actor & Writer'} />
          <LikeButton nrLikes={47} />
        </Row>
        <Row>
          <BadgeTask bdgText={'Traveling'} />
          <BadgeTask bdgText={'Reading'} />
          <BadgeTask bdgText={'Crossword puzzles'} />
        </Row>
        <ActorDescription
          actorDescription={`Leonardo DiCaprio is an actor known for his edgy, unconventional roles. He started out in television before moving on to film, scoring an Oscar nomination for his role in What's Eating Gilbert Grape (1993). In 1997, DiCaprio starred in James Cameron's epic drama Titanic, which made him a star. The actor has also paired up with iconic director Martin Scorsese for several projects, including The Aviator (2004) and The Departed (2006). His more recent films include Inception (2010), Django Unchained (2012), The Wolf of Wall Street (2013) and The Revenant (2015), winning his first Oscar for the latter.`}
        />
        <EditButton />
      </CardContent>
    </CardContainer>
  );
};

export default ActorCard;
