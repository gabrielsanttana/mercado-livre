import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../components/Product';
import {Container, Wrapper} from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
