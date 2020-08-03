import { SpotOptionsProps } from './SpotOptionsProps';
import { Value } from '../../../kloudformation/Value';

export interface InstanceMarketOptionsProps {
  spotOptions?: SpotOptionsProps
  marketType?: Value<string>
}