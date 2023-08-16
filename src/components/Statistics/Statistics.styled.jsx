import styled from '@emotion/styled';

export const StatSection = styled.section`
  background-color: #dbd8d8;
  margin: 25px auto;
  width: 250px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border: 1px solid black;
`;

export const StatList = styled.ul`
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${getRandomHexColor};
  width: 100%;
  padding: 5px 0;
`;

export const SpanTexts = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.11;
  margin-bottom: 0px;
  color: white;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
