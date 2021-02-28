import React from 'react';
import {
  Container,
  Wrapper,
  MediaWrapper,
  Name,
  Actions,
  RatingsWrapper,
  DescriptionWrapper,
  Details,
  Price
} from './card';
import { IoMdStarHalf, IoMdStarOutline, IoMdStar } from 'react-icons/io';

const Card = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Card.Container = function CardContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Card.Media = function CardMedia({ src }) {
  return <MediaWrapper src={src}></MediaWrapper>;
};
Card.Name = function CardName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Card.Description = function CardDescription({ details, price }) {
  function removeTags(str) {
    if (str === null || str === '') {
      return false;
    } else str.toString();
    return str.replace(/(<([^>]+)>)/gi, '');
  }
  return (
    <>
      <DescriptionWrapper>
        <Details>{removeTags(details)}</Details>
        <Price>{price}</Price>
      </DescriptionWrapper>
    </>
  );
};

Card.Actions = function CardActions({ children, ...restProps }) {
  return <Actions {...restProps}>{children}</Actions>;
};
Card.Ratings = function CardRatings() {
  return (
    <RatingsWrapper>
      <IoMdStar color="var(--clr-primary)" size="0.7em" />
      <IoMdStar color="var(--clr-primary)" size="0.7em" />
      <IoMdStar color="var(--clr-primary)" size="0.7em" />
      <IoMdStarHalf color="var(--clr-primary)" size="0.7em" />
      <IoMdStarOutline color="var(--clr-primary)" size="0.7em" />
    </RatingsWrapper>
  );
};

export default Card;
