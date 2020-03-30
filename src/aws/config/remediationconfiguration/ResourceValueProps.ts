import { Value } from '../../../kloudformation/Value';

export function resourceValueProps(resourceValuePropsProps: ResourceValueProps): ResourceValueProps { return (resourceValuePropsProps) as unknown as ResourceValueProps }

export interface ResourceValueProps {
    value?: Value<string>;
}