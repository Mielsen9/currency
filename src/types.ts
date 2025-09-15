type Currency = {
  alias: string;
  name: string;
  codeAlpha: string;
};

export type Rate = {
  id: string;
  currency: Currency;
  bid: {
    absolute: string;
    updatedAt: string;
  };
  ask: {
    absolute: string;
    updatedAt: string;
  };
};

export type Point = {
  id: string;
  rates: Rate[];
  updatedAt: string;
};
