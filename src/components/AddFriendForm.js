import { useState } from "react";

export default function AddFriendForm({ onAddFriend }) {
  const [toggleAddForm, setToggleAddForm] = useState(false);
  const [friendName, setFriendName] = useState("Test Name");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48?u=933373");

  function handleAddFriend(e) {
    e.preventDefault();

    onAddFriend((friendsList) => [
      ...friendsList,
      {
        id: Math.floor(Math.random() * 999999),
        name: friendName,
        image: imageUrl,
        balance: 0,
      },
    ]);

    setToggleAddForm(false);
  }

  return toggleAddForm ? (
    <div>
      <form className="form-add-friend">
        <p>👭 Friend name: </p>{" "}
        <input
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
        <p>🖼 Image URL: </p>{" "}
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button className="button" onClick={handleAddFriend}>
          Add
        </button>
      </form>

      <button className="button" onClick={() => setToggleAddForm(false)}>
        Close
      </button>
    </div>
  ) : (
    <button className="button" onClick={() => setToggleAddForm(true)}>
      Add new friend
    </button>
  );
}
