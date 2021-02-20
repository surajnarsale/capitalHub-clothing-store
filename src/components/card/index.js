import React from 'react';
import {
  Container,
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
  return <Container {...restProps}>{children}</Container>;
};

Card.Media = function CardMedia({ src }) {
  return <MediaWrapper src={src}></MediaWrapper>;
};
Card.Name = function CardName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Card.Description = function CardDescription({ details, price }) {
  return (
    <>
      <DescriptionWrapper>
        <Details>{details}</Details>
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
      <IoMdStar size="0.7em" />
      <IoMdStar size="0.7em" />
      <IoMdStar size="0.7em" />
      <IoMdStarHalf size="0.7em" />
      <IoMdStarOutline size="0.7em" />
    </RatingsWrapper>
  );
};

export default Card;
