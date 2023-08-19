import styled from '@emotion/styled';

export const StatusSpan = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.color;
  }};
  text-align: center;
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.11;
  margin-bottom: 0px;
`;
