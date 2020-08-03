import { Value } from '../../../kloudformation/Value';

export interface HttpParametersProps {
  headerParameters?: Value<Value<string>[]>
  pathParameterValues?: Value<Value<string>[]>
  queryStringParameters?: Value<Value<string>[]>
}