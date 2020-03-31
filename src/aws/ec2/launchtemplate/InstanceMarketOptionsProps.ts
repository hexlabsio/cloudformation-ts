import { SpotOptionsProps } from './SpotOptionsProps';
import { Value } from '../../../kloudformation/Value';

export function instanceMarketOptionsProps(instanceMarketOptionsPropsProps: InstanceMarketOptionsProps): InstanceMarketOptionsProps { return (instanceMarketOptionsPropsProps) }

export interface InstanceMarketOptionsProps {
    spotOptions?: SpotOptionsProps;
    marketType?: Value<string>;
}