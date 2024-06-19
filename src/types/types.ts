import { launchExample } from "../utils/launchListExample";

export type Launch = typeof launchExample;

export interface Dictionary {
  [key: string]: any;
}

export interface Filters {
  name: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  launchSuccess: boolean | undefined;
  upcoming: boolean | undefined;
}

export interface Filters {
  name: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  launchSuccess: boolean | undefined;
  upcoming: boolean | undefined;
}

export interface CardProps {
  name: string;
  imageUrl: string;
  key: string;
  date: string;
  details: string;
}

export interface SearchBarProps {
  onSearch: (filters: Filters) => void;
}
