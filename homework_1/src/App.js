import React from "react";
import s from "./App.module.css";

import user from "./json/user.json";
import Profile from "./components/profile/profile";

import statisticData from "./json/statistical-data.json";
import StatisticList from "./components/statistic/statisticList";

import friends from "./json/friends.json";
import FriendsList from "./components/friends/friendsList";
import Section from "./components/statistic/section";

import transaction from "./json/transactions.json";
import TransactionList from "./components/transaction/transactionList";

export default function App() {
  const title = "Upload stats";
  return (
    <div className={s.App}>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section className={s.statistics} title={title}>
        <StatisticList items={statisticData} />
      </Section>

      <FriendsList items={friends} />

      <TransactionList items={transaction} />
    </div>
  );
}
