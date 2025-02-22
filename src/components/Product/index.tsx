import React from 'react';
import SellerInfo from '../SellerInfo';
import WarrantySection from '../WarrantySection';
import ProductInfo from '../ProductInfo';
import ProductAction from '../ProductAction';
import {Container, Row, Panel, Column, Gallery} from './styles';
import TShirt from '../../assets/tshirt.png';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={TShirt} alt="T-Shirt" />
          </Gallery>

          <ProductInfo />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

export default Product;
