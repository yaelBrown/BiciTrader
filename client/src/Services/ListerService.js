import exampleListing from "../Examples/ExampleListing";


class ListerService {
    
  generateListings = (isExample = false, qty = 0) => {
    if (qty === 0) return []

    const _generateExampleListing = (n) => {
      let out = exampleListing;
      out.id = n
      return out
    }

    let out = []
    if (isExample && qty > 0) {
      for (let i = 0; i < qty; i++) {
        out.push(_generateExampleListing(i))
      }
    } else {
      // Pull information from state
      // Eval listings
      // Return eval'd list
      out = out
    }
    return out
  }

  generateAttributes = (listingsArr) => {
    let out = { 
      brand: {},
      type: {},
      gender: {},
      size: {},
      location: {}
    }

    listingsArr.map((e,i) => {
      (out.brand[e.brand] === undefined) ? out.brand[e.brand] = 1 : out.brand[e.brand] += 1;
      (out.type[e.type] === undefined) ? out.type[e.type] = 1 : out.type[e.type] += 1;
      (out.gender[e.gender] === undefined) ? out.gender[e.gender] = 1 : out.gender[e.gender] += 1;
      (out.size[e.size] === undefined) ? out.size[e.size] = 1 : out.size[e.size] += 1;
      (out.location[e.location] === undefined) ? out.location[e.location] = 1 : out.location[e.location] += 1;
    })

    return out
  }

}

export default new ListerService();