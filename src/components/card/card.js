import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1400px;
  margin: 5rem auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 892px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 300px;
  font-size: 1.7rem;
  margin: 0rem auto 2rem auto;
`;

export const MediaWrapper = styled.div`
  height: 300px;
  width: 100%;
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Name = styled.h1`
  text-align: left;
  padding: 0.4rem 0.4rem 0rem 0.4rem;
  font-size: 0.7em;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  align-items: center;
`;
export const RatingsWrapper = styled.div``;
export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0rem 0.4rem 0rem 0.4rem;
  align-items: center;
`;
export const Details = styled.h2`
  font-size: 0.5em;
`;
export const Ratings = styled.div``;
export const Price = styled.h2`
  font-size: 0.7em;
  font-weight: 600;
`;
export const StyleWrapper = styled.div``;
