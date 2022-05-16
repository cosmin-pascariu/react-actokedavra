import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ActorPicture from './ActorPicture';
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
  margin: 0 auto;
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

const ActorCard = ({
  picture,
  actorName,
  professionText,
  nrLikes,
  bdgText,
  actorDescription,
}) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const tasks = bdgText?.split(',');
    const newCards = tasks?.map((card, index) => (
      <BadgeTask key={index} bdgText={card} />
    ));
    setCards(newCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardContainer>
      <CloseButton />
      <ActorPicture picture={picture} />
      <CardContent>
        <ActorName actorName={actorName} />
        <Row>
          <ActorProfession professionText={professionText} />
          <LikeButton nrLikes={nrLikes} />
        </Row>
        <Row>{cards}</Row>
        <ActorDescription actorDescription={actorDescription} />
        <EditButton />
      </CardContent>
    </CardContainer>
  );
};

export default ActorCard;
