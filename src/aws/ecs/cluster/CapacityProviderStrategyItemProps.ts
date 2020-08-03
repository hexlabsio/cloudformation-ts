import { Value } from '../../../kloudformation/Value';

export interface CapacityProviderStrategyItemProps {
  capacityProvider?: Value<string>
  weight?: Value<number>
  base?: Value<number>
}