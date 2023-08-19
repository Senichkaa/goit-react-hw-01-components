import { Profile } from '../components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
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
      <Statistics title="Upload stats" stats={data} />
      <h2 className="task-title">Task 3</h2>
      <FriendList friends={friends} />
      <h2 className="task-title">Task 4</h2>
      <TransactionHistory items={transactions} />;
      {/* React homework template */}
    </div>
  );
};
