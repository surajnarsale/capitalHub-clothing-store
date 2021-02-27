import { Badge } from '@material-ui/core';
import React from 'react';
import { BiCart } from 'react-icons/bi';
import { Container } from './navbar';

export default function Navbar() {
  return (
    <>
      <Container>
        <h1>Capital Hub</h1>
        <Badge badgeContent={2} color="primary">
          <BiCart size="1.5rem" />
        </Badge>
      </Container>
    </>
  );
}
