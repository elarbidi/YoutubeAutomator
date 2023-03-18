let { createClient } = require('pexels')
const fs = require('fs')

async function getRandomImage(animal) {
    try {
      const client = createClient(PEXELS_API_KEY)
      const query = "Messi is shown playing for Barcelona"
      let image
  
      await client.photos.search({ query, per_page: 10 }).then(res => {
        let images = res.photos
        image = images[randomInteger(0, (images.length - 1))]
  
      })
  
      return image
  
    } catch (error) {
      console.log('error downloading image', error)
      getRandomImage(animal)
    }
  }
  