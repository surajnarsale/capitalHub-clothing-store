import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 1rem auto 0rem auto;
  padding: 0 2rem;
  font-size: 2rem;
`;
export const Title = styled.h2`
  font-size: 1em;
`;
export const Button = styled.button`
  border: 1px solid var(--clr-secondary);
  background-color: var(--clr-primary);
  padding: 0 1rem;
  border-radius: 5px;
  font-size: 0.3em;
`;
