import React from 'react';
import { Container, Button, Title } from './Showcase';

export default function Showcase({ title, button }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Button>{button}</Button>
    </Container>
  );
}
