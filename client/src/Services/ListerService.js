import exampleListing from "../Examples/ExampleListing";


class ListerService {
  
  _generateExampleListing = (n) => {
    let out = exampleListing;
    out.id = n
    return out
  }
  
  generateListings = (isExample = false, qty = 0) => {
    let out = []
    if (isExample && qty > 0) {
      for (let i = 0; i < qty; i++) {
        out.push(this._generateExampleListing(i))
      }
    } else {
      // Pull information from state
      // Eval listings
      // Return eval'd list
      out = out
    }
    return out
  }

}

export default new ListerService();