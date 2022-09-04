import styled from '@emotion/styled';

export const PageFooter = styled.footer`
  margin-top: auto;
  min-width: 300px;
  width: 100%;
  padding: 20px 0;
  color: #fff;
  background-color: #262626;
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus {
    color: blue;
  }
`;
