import PropTypes from 'prop-types';
import { StatusSpan, AvatarImg, Name } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <StatusSpan color={isOnline ? 'green' : 'red'}>{isOnline}</StatusSpan>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
