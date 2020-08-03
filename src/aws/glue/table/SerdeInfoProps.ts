import { Value } from '../../../kloudformation/Value';

export interface SerdeInfoProps {
  parameters?: Value<any>
  serializationLibrary?: Value<string>
  name?: Value<string>
}