import styled from 'styled-components';
import {HiOutlineHeart, HiShieldCheck} from 'react-icons/hi';
import {FaTruck} from 'react-icons/fa';

interface ButtonProps {
  solid?: boolean;
}

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const Condition = styled.span`
  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600px;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  color: var(--color-blue);
  margin-left: 16px;
  cursor: pointer;
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 300;

  .integer {
    margin-left: 8.8px;
  }

  .float {
    font-size: 20px;
    padding-top: 5px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.span`
  font-size: 16px;
`;

export const StockStatus = styled.div`
  margin-top: 24px;
  font-size: 18px;
`;

export const ShipmentCard = styled.div`
  margin-top: 24px;
  display: flex;

  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    .title {
      color: var(--color-green);
      font-size: 16px;
    }

    .details {
      margin-top: 5px;
      color: var(--color-gray);
      font-size: 14px;
    }

    .seeMore {
      margin-top: 5px;
      color: var(--color-blue);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const TruckIcon = styled(FaTruck)`
  width: 28px;
  height: 28px;
  color: var(--color-green);
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;
  cursor: pointer;
  color: ${(props) =>
    props.solid ? 'var(--color-white)' : 'var(--color-blue)'};
  background-color: ${(props) =>
    props.solid ? 'var(--color-blue)' : 'transparent'};
  border: ${(props) => (props.solid ? 'none' : '1px solid var(--color-blue)')};
`;

export const Benefits = styled.ul`
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    display: flex;

    p {
      margin-left: 10px;
      color: var(--color-gray);
      font-size: 14px;
    }
  }
`;

export const ShieldIcon = styled(HiShieldCheck)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;
