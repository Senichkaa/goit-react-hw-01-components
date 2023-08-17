import styled from '@emotion/styled';

export const FriendUlList = styled.ul`
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 200px;
  row-gap: 20px;
  background-color: #d6d2d2;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  border: 1px solid #3e3d3d;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  column-gap: 15px;
`;
