import React from 'react';
import Product from '../../components/Product';
import {Container, Wrapper} from './styles';

const Layout: React.FC = () => {
  return (
    <div>
      {/*<Header />*/}

      <Container>
        <Wrapper>
          <Product />
        </Wrapper>
      </Container>

      {/*<Footer />*/}
    </div>
  );
};

export default Layout;
