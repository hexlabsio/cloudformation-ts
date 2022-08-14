import {Value} from "./Value";

export interface KloudResource {
  _logicalType? : string;
  _logicalName?: string;
  _dependsOn?: Value<string>[];
}
