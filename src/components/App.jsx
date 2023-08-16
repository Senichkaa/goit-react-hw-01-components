import { Profile } from '../components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
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
      <Statistics title="Upload" stats={data} />
      {/* React homework template */}
    </div>
  );
};
