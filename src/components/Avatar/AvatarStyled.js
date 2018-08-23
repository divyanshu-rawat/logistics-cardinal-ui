import styled from 'styled-components';

const AvatarStyled = styled('div')`
  background: url(${({ src }) => src}) no-repeat center center;
  background-size: cover;
  border-radius: 99%;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          width: 25px;
          height: 25px;
        `;
      case 'lg':
        return `
          width: 75px;
          height: 75px;
        `;
      default:
        return `
          width: 50px;
          height: 50px;
        `;
    }
  }};
`;

export default AvatarStyled;
