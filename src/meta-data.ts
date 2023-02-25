import { Types } from "./types";

export interface MetaData {
  tags?: string[];
  status?: string | null;
  url?: string;
  star?: number;
  comment?: string;
  progress?: number;
  founded?: boolean;
  name?: string;
}

export interface MetaDataV2 extends MetaData {
  type: Types;
  dateAd: string;
  dateChange: string;
}
