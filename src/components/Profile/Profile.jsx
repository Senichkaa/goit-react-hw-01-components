import {
  ProfileMarkup,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Statistics,
  StatItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  //   const { username, tag, location, avatar, stats } = props;

  return (
    <ProfileMarkup>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Statistics>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </StatItem>
      </Statistics>
    </ProfileMarkup>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
