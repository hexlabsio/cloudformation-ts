import { Value } from '../../../kloudformation/Value';

export interface ConnectionPoolConfigurationInfoFormatProps {
  maxConnectionsPercent?: Value<number>
  maxIdleConnectionsPercent?: Value<number>
  connectionBorrowTimeout?: Value<number>
  sessionPinningFilters?: Value<Value<string>[]>
  initQuery?: Value<string>
}