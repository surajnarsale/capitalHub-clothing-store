import React from 'react';
import { Card } from '../components';
import { MdAddShoppingCart } from 'react-icons/md';
import Showcase from '../components/Showcase';
const Products = ({ products }) => {
  console.log(products);
  return (
    <>
      <Showcase title={'Best Seller'} button={'SHOW ALL'} />
      <Card.Container>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <Card.Media src={product.media.source} title={product.name} />
              <Card.Name>{product.name}</Card.Name>
              <Card.Description
                details={product.description}
                price={product.price.formatted_with_symbol}
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
