import styled from 'styled-components';
import useMousePosition from '../hooks/useMousePosition';

const bgImg = '/assets/img.jpeg';

const StyledImg = styled.div`
  height: 100%;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  transition: 1s ease;
  position: relative;

  z-index: -2;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;

  ${(props) => (props.zoom ? 'transform: scale(1.2)' : '')}
`;

export default function DynamicBackground() {
  const isNearCenter = useMousePosition();

  return <StyledImg zoom={isNearCenter} />;
}
