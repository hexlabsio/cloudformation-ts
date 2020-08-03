import { Value } from '../../../kloudformation/Value';

export interface CsvClassifierProps {
  quoteSymbol?: Value<string>
  containsHeader?: Value<string>
  delimiter?: Value<string>
  header?: Value<Value<string>[]>
  allowSingleColumn?: Value<boolean>
  disableValueTrimming?: Value<boolean>
  name?: Value<string>
}