import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {

  useEffect(() => {
    fetch(' http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
    .catch(error => console.log("error", error))
  }, [])
  console.log(listings)
  
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} listings={listings} setListings={setListings}/>
        })
      }
      </ul>
    </main>
  );
}

export default ListingsContainer;
