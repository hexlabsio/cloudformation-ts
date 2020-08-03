import { Value } from '../../../kloudformation/Value';

export interface LocationProps {
  address?: Value<string>
  latitude?: Value<string>
  longitude?: Value<string>
}