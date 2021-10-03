export type Trips = {
  location: Location[];
  themes: Theme[];
};

export type Location = {
  id: number;
  title: string;
  description: string;
  sights: string[];
  img: string;
};

export type Theme = {
  id: number;
  tag: string;
  data: ThemeData[];
};

export type ThemeData = {
  id: number;
  category: string;
  title: string;
  ticket_type: string;
  discount_percent: number;
  ticket_price: number;
  discount_price: number;
  img: string;
};
