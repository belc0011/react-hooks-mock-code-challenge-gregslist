import React, {useState} from "react";

function ListingCard({listing, listings, setListings}) {
  const [emojiBoolean, setEmojiBoolean] = useState(false)
  function handleFavorite(event) {
    console.log(event.target.className)
    if (event.target.className === "emoji-button favorite") {
      setEmojiBoolean(true)
    }
    else setEmojiBoolean(false);
  }

  function handleDelete(event) {
    const listingID = parseInt(event.target.id)
    console.log(listingID)
    fetch(`http://localhost:6001/listings/${listingID}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => setListings(listings.filter((listing) => {
      return listing.id !== listingID;
    })))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {(emojiBoolean) ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" id={listing.id} onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
