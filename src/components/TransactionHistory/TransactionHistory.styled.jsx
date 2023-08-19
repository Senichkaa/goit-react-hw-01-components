import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  width: 400px;
  text-transform: uppercase;
`;

export const TableHeader = styled.th`
  height: 40px;
  border: 3px solid gray;
  background-color: #158fe1;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #60a2cf;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  border: 3px solid gray;
`;
