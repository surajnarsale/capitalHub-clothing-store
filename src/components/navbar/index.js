import { Badge } from '@material-ui/core';
import React from 'react';
import { BiCart } from 'react-icons/bi';
import { Container } from './navbar';
import { IconButton } from '@material-ui/core';

export default function Navbar({ totalItems }) {
  return (
    <>
      <Container>
        <h1>Capital Hub</h1>
        <IconButton>
          <Badge badgeContent={totalItems} color="primary">
            <BiCart size="1.5rem" />
          </Badge>
        </IconButton>
      </Container>
    </>
  );
}
