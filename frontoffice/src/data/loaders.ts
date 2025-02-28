import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = null;
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


export async function getAllProducts() {
  const url = new URL("/api/products", baseUrl);

  url.search = qs.stringify({
    populate: "*", 
  });

  return await fetchData(url.href);
}

// Existing functions...
export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              heros: {
                populate: "*",
              },
            },
          },
          "layout.features-section": {
            populate: {
              features: {
                populate: "*",
              },
            },
          },
          "layout.references": {
            populate: {
              reference: {
                populate: {
                  logo: {
                    fields: ["url", "documentId", "alternativeText"],
                  },
                },
              },
            },
          },
          "layout.features-cards": {
            populate: {
              featurescard: {
                populate: "*",
              },
            },
          },
        },
      },
    },
  });

  console.log(url.href);
  return await fetchData(url.href);
}

export async function getGlobalData() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: {
      header: {
        populate: {
          headerlinks: {
            populate: "*",
          },
          logo: {
            populate: "*",
          },
        },
      },
      footer: {
        populate: {
          socialLink: {
            populate: "*",
          },
          logo: {
            populate: "*",
          },
          Foot_nav_link: {
            populate: {
              links: {
                populate: "*",
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  return await fetchData(url.href);
}

export async function getProductById(productId: string) {
  return fetchData(`${baseUrl}/api/products/${productId}`);
}