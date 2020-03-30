import { Value } from '../../../kloudformation/Value';

export function minimumHealthyHostsProps(minimumHealthyHostsPropsProps: MinimumHealthyHostsProps): MinimumHealthyHostsProps { return (minimumHealthyHostsPropsProps) as unknown as MinimumHealthyHostsProps }

export interface MinimumHealthyHostsProps {
    type: Value<string>;
    value: Value<number>;
}