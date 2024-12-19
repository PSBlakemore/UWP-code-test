import { fetchProducts } from './storefront-headers';

// On load, set HTML container and attribute that holds the collection handle
window.onload = (event) => {
  const fetchedProductsWrapper = document.getElementById('storefront--products');
  if (fetchedProductsWrapper) {
    const collectionHandle = fetchedProductsWrapper.dataset.collectionHandle;

    fetchProductsByCollection(collectionHandle)
      .then(renderProducts)
      .catch((error) => {
        console.error('Error fetching products:', error);
        fetchedProductsWrapper.innerHTML = `<p>Failed to fetch products.</p>`;
      });
  }
};

// Set up GraphQL query with collection handle
async function fetchProductsByCollection(collectionHandle) {
  const query = `
    query GetProducts ($handle: String!) {
      collectionByHandle(handle: $handle) {
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              description
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
  `;

  const variables = { 
    handle: collectionHandle
  };

  return fetchProducts(query, variables).then((data) => data.collectionByHandle.products.edges);
}

// Accepts fetched products, loops through and renders them out
function renderProducts(products) {
  const featuredProductsContainer = document.getElementById('storefront--products');
  featuredProductsContainer.innerHTML = '';

  if (products) {
    products.forEach(({ node: product }) => {
      const productHtml = `
      <div class="product--card">
        <img src="${product.images.edges[0]?.node.src}" alt="${product.images.edges[0]?.node.altText}" width="200" height="auto" />
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <a href="/products/${product.handle}">View Product</a>
      </div>
    `;
      featuredProductsContainer.innerHTML += productHtml;
    });
  }
}
