import React from 'react';
import {Section} from './styles';

const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Título</p>
          <p className="description">
            Descrição: Sed dictum, tortor at rutrum suscipit, purus mi tincidunt
            risus, id auctor tellus sapien eget tortor. Suspendisse potenti.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </span>

        <span>
          <p className="title">Título</p>
          <p className="description">
            Descrição: Sed dictum, tortor at rutrum suscipit, purus mi tincidunt
            risus, id auctor tellus sapien eget tortor. Suspendisse potenti.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </span>
      </div>

      <a href="#">Saiba mais sobre a garantia</a>
    </Section>
  );
};

export default WarrantySection;
