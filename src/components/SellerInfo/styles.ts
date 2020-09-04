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

export const Container = styled.div``;

export const Title = styled.div``;

export const LocationCard = styled.div``;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconStyle}
`;

export const ReputationCard = styled.div``;

export const ReputationThermometer = styled.div``;

export const ReputationRow = styled.div``;

export const SupportIcon = styled(HiOutlineChatAlt)`
  ${iconStyle}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconStyle}
`;

export const More = styled.div``;
