import user from "./json/user.json";
import Description from "./components/description/description";

import statisticData from "./json/statistical-data.json";
import StatisticList from "./components/statistic/statisticList";

import friends from "./json/friends.json";
import FriendsList from "./components/friends/friendsList";
import Section from "./components/friends/section";

import transaction from "./json/transactions.json";
import TransactionList from "./components/transaction/transactionList";

export default function App() {
  return (
    <div>
      <Description
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section className="statistics" title="Upload stats">
        <StatisticList items={statisticData} />
      </Section>

      <FriendsList items={friends} />

      <TransactionList items={transaction} />
    </div>
  );
}
