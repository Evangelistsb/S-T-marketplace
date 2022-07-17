// Data of the auction you want to create
const auction = {
    // address of the contract the asset you want to list is on
    assetContractAddress: "0x...",
    // token ID of the asset you want to list
    tokenId: "0",
   // when should the listing open up for offers
    startTimestamp: new Date(),
    // how long the listing will be open for
    listingDurationInSeconds: 86400,
    // how many of the asset you want to list
    quantity: 1,
    // address of the currency contract that will be used to pay for the listing
    currencyContractAddress: NATIVE_TOKEN_ADDRESS,
    // how much people would have to bid to instantly buy the asset
    buyoutPricePerToken: "10",
    // the minimum bid that will be accepted for the token
    reservePricePerToken: "1.5",
  }
  
  const tx = await contract.auction.createListing(auction);
  const receipt = tx.receipt; // the transaction receipt
  const listingId = tx.id; // the id of the newly created listing
  
  // And on the buyers side:
  // The price you are willing to bid for a single token of the listing
  const pricePerToken = 2.6;
  await contract.auction.makeBid(listingId, pricePerToken);