import { Value } from '../../../kloudformation/Value';

export function resourceValueProps(resourceValuePropsProps: ResourceValueProps): ResourceValueProps { return (resourceValuePropsProps) }

export interface ResourceValueProps {
    value?: Value<string>;
}