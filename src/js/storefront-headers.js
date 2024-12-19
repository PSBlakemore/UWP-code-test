export async function fetchProducts(query, variables = {}) {
  const storeDomain = 'psblakemore.myshopify.com';
  const accessToken = '7b1397956030eb432a08b2595b5c731c';

  try {
    const response = await fetch(`https://${storeDomain}/api/2024-10/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': accessToken,
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors ? data.errors[0].message : 'Failed to fetch products');
    }

    return data.data;
    
  } catch (error) {
    console.error(error.message);
  }
}