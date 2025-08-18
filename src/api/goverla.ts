type Rate = {
  id: string;
  currency: {
    alias: string;
    name: string;
    codeAlpha: string;
  };
  bid: {
    absolute: string;
    updatedAt: string;
  };
  ask: {
    absolute: string;
    updatedAt: string;
  };
};

export async function fetchGoverlaRates(): Promise<Rate[]> {
  const response = await fetch("https://api.goverla.ua/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Point($alias: Alias!) {
          point(alias: $alias) {
            rates {
              id
              currency {
                alias
                name
                codeAlpha
              }
              bid {
                absolute
                updatedAt
              }
              ask {
                absolute
                updatedAt
              }
            }
          }
        }
      `,
      variables: { alias: "goverla-ua" },
    }),
  });

  const data = await response.json();
  return data.data.point.rates;
}