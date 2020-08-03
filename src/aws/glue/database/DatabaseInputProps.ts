import { Value } from '../../../kloudformation/Value';

export interface DatabaseInputProps {
  locationUri?: Value<string>
  description?: Value<string>
  parameters?: Value<any>
  name?: Value<string>
}