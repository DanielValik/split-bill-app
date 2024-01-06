import { useState } from "react";

export function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpence, setYourExpence] = useState("");
  let friendExpence = bill ? bill - yourExpence : "";
  const [whoPay, setWhoPay] = useState("you");

  function handleSplitingBill(e) {
    e.preventDefault();
    if (!bill || !yourExpence) return;

    whoPay === "you" ? onSplitBill(-friendExpence) : onSplitBill(yourExpence);
  }

  //prettier-ignore
  return (
    selectedFriend && (
      <form className="form-split-bill" onSubmit={handleSplitingBill}>
        <h2>SPLIT THE BILL WITH {selectedFriend.name}</h2>

        <p>Bill value</p>{" "}
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <p>Your expence</p>{" "}
        <input
          type="text"
          value={yourExpence}
          onChange={(e) => setYourExpence(Number(e.target.value))}
        />

        <p>{selectedFriend.name} expence</p>{" "}
        <input type="text" disabled value={friendExpence} />

        <p>Who is paing the bill? </p>{" "}
        <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
          <option value="you">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <button type="submit" className="button">
          Split the bill
        </button>
      </form>
    )
  );
}
