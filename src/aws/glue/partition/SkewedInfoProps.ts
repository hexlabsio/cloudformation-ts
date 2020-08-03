import { Value } from '../../../kloudformation/Value';

export interface SkewedInfoProps {
  skewedColumnNames?: Value<Value<string>[]>
  skewedColumnValues?: Value<Value<string>[]>
  skewedColumnValueLocationMaps?: Value<any>
}