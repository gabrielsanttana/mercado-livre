import styled, {css} from 'styled-components';
import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt,
  HiOutlineClock,
} from 'react-icons/hi';

const iconStyle = css`
  width: 30px;
  height: 30px;
`;

export const Container = styled.div`
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px;
    }

    > strong {
      font-size: 14px;
      font-weight: normal;
      color: var(--color-gray);
    }
  }
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconStyle}
`;

export const ReputationCard = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReputationThermometer = styled.ol`
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
  padding: 0 4px;

  > li {
    width: 100%;
    height: 8px;

    &:nth-child(1) {
      background-color: var(--reputation-1);
    }

    &:nth-child(2) {
      background-color: var(--reputation-2);
    }

    &:nth-child(3) {
      background-color: var(--reputation-3);
    }

    &:nth-child(4) {
      background-color: var(--reputation-4);
    }

    &:nth-child(5) {
      background-color: var(--reputation-5);
    }

    &.active {
      height: 12px;
    }
  }
`;

export const ReputationRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;

  > div {
    width: 33%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    > strong {
      font-size: 24px;
      font-weight: normal;
      height: 30px;
    }

    > span {
      font-size: 12px;
    }
  }
`;

export const SupportIcon = styled(HiOutlineChatAlt)`
  ${iconStyle}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconStyle}
`;

export const More = styled.a`
  margin-top: 24px;
  color: var(--color-blue);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;
