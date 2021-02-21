import React from 'react';
import { Card } from '../components';
import { MdAddShoppingCart } from 'react-icons/md';

const Products = () => {
  return (
    <>
      <Card>
        <Card.Media
          src={
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
          }
        />
        <Card.Name>Jordan Edition</Card.Name>
        <Card.Description details={'Nike shoes'} price={'$300'} />
        <Card.Actions>
          <Card.Ratings stars={2} />
          <MdAddShoppingCart size="25px" />
        </Card.Actions>
      </Card>
    </>
  );
};

export default Products;
