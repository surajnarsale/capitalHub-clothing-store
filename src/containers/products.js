import React from 'react';
import { Card } from '../components';
import { MdAddShoppingCart } from 'react-icons/md';
import ProductData from '../fixtures/products.json';
import Showcase from '../components/Showcase';
const Products = () => {
  return (
    <>
      <Showcase title={'Best Seller'} button={'SHOW ALL'} />
      <Card.Container>
        {ProductData.map((product) => {
          return (
            <Card key={product.id}>
              <Card.Media src={product.image} />
              <Card.Name>{product.Brand}</Card.Name>
              <Card.Description
                details={product.description}
                price={product.price}
              />
              <Card.Actions>
                <Card.Ratings stars={product.rating} />
                <MdAddShoppingCart size="25px" />
              </Card.Actions>
            </Card>
          );
        })}
      </Card.Container>
    </>
  );
};

export default Products;
