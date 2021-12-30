const { postToShopify } = require('./utils/postToShopify')

exports.handler = async () => {
  try {
    console.log('--------------------------------')
    console.log('Retrieving new releases...')
    console.log('--------------------------------')
    const shopifyResponse = await postToShopify({
      query: `
        query newReleases {
          collectionByHandle(handle: "new-releases") {
            id
            title
            description
            products(first:100) {
              edges {
                node {
                  title
                  id
                  description
                  handle
                  tags
                  priceRange {
                    maxVariantPrice {
                      amount
                      currencyCode
                    }
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  images(first: 1) {
                    edges {
                      node {
                        src
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}

// new-releases
