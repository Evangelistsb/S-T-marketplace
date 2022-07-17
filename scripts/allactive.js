const listings = await contract.getActiveListings();
const priceOfFirstActiveListing = listings[0].price;