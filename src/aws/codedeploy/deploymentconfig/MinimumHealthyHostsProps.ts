import { Value } from '../../../kloudformation/Value';

export function minimumHealthyHostsProps(minimumHealthyHostsPropsProps: MinimumHealthyHostsProps): MinimumHealthyHostsProps { return (minimumHealthyHostsPropsProps) }

export interface MinimumHealthyHostsProps {
    type: Value<string>;
    value: Value<number>;
}