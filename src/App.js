import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import { FriendsList } from "./components/FriendsList";
import { SplitBillForm } from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState("");

  function handleSplitBill(value) {
    setFriendsList((friendsList) =>
      friendsList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <FriendsList
        friendsList={friendsList}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      <SplitBillForm
        selectedFriend={selectedFriend}
        onSplitBill={handleSplitBill}
        key={selectedFriend.id}
      />

      <AddFriendForm onAddFriend={setFriendsList} />
    </div>
  );
}
