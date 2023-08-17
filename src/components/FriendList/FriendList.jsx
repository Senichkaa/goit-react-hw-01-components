import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendUlList, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendUlList>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <FriendListItem
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          </FriendItem>
        );
      })}
    </FriendUlList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
