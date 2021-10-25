import fetch from "node-fetch";

class Datasource {
  #endpoint = "https://static.ngnrs.io/test/prices";

  async getPrices() {
    try {
      const response = await fetch(this.#endpoint);
      const parsedRes = await response.json();
      return this.convertPrices(parsedRes.data.prices);
    } catch (e) {
      throw e;
    }
  }

  convertPrices(prices) {
    return prices.map((price) => ({
      pair: price.pair,
      mid: () => (price.buy + price.sell) / 2, // Idk, Do wee need to divide this value by 100? The description says that the method must return the mid-point value between price.buy and price.sell, but in expected ouput I see, that this value also divided by 100
      quote: () => price.pair.slice(-3),
    }));
  }
}

const ds = new Datasource();

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
