export function FriendsList({
  friendsList,
  selectedFriend,
  setSelectedFriend,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <FriendItem
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onFriendSelected={setSelectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
function FriendItem({ friend, selectedFriend, onFriendSelected }) {
  let message;
  if (friend.balance === 0) message = `You and ${friend.name} are even`;
  if (friend.balance > 0) message = `You owe ${friend.name} ${friend.balance}$`;
  if (friend.balance < 0)
    message = `${friend.name} owes you ${Math.abs(friend.balance)}$`;

  let btnText;
  if (selectedFriend.id === friend.id) {
    btnText = "Close";
  } else {
    btnText = "Select";
  }

  return (
    <li>
      <img src={friend.image} alt="" />
      <h2>{friend.name}</h2>
      <p
        style={
          friend.balance !== 0
            ? friend.balance < 0
              ? { color: "green" }
              : { color: "red" }
            : {}
        }
      >
        {message}
      </p>

      <button
        className="button"
        onClick={() =>
          btnText === "Select" ? onFriendSelected(friend) : onFriendSelected("")
        }
      >
        {btnText}
      </button>
    </li>
  );
}
