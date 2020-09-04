import styled from 'styled-components';
import {HiOutlineHeart, HiShieldCheck} from 'react-icons/hi';
import {FaTruck} from 'react-icons/fa';

interface ButtonProps {
  solid: boolean;
}

export const Container = styled.div``;

export const Condition = styled.div``;

export const Row = styled.div``;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: var(--color-blue);
  margin-left: 16px;
  cursor: pointer;
`;

export const DispatchTag = styled.div``;

export const PriceCard = styled.div``;

export const PriceRow = styled.div``;

export const InstallmentsInfo = styled.div``;

export const StockStatus = styled.div``;

export const ShipmentCard = styled.div``;

export const TruckIcon = styled(FaTruck)`
  width: 28px;
  height: 28px;
  color: var(--color-green);
`;

export const Actions = styled.div``;

export const Button = styled.button<ButtonProps>``;

export const Benefits = styled.ul``;

export const ShieldIcon = styled(HiShieldCheck)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;
