import styled from '@emotion/styled';

export const ProfileMarkup = styled.div`
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  width: 320px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  background-color: #bdb8b8;
`;
export const Description = styled.div`
  margin: 50px 0 15px 0;
  height: 50%;
  width: 100%;
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: #fff;
  width: 150px;
  height: 150px;
`;

export const Username = styled.p`
  margin-bottom: 0px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.11;
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.11;
  margin-bottom: 0px;
`;

export const Location = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.11;
  margin-bottom: 0px;
`;

export const Statistics = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  /* gap: 20px; */
  margin: 15px 0 0 0;

  background-color: #a59696;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px 25px;

  border: 1px solid #464545;
  border-bottom: none;
`;

export const StatLabel = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 0px;
`;

export const StatQuantity = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.11;
  margin-bottom: 0px;
`;
