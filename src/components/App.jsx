import { Profile } from '../components/Profile/Profile';
import user from '../data/user.json';
export const App = () => {
  return (
    <div>
      <h2 className="task-title">Task 1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="task-title">Task 2</h2>
      {/* React homework template */}
    </div>
  );
};
