export const GET_RATES = `
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
`;