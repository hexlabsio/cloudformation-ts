import { Value } from '../../../kloudformation/Value';

export function resourceRequirementProps(resourceRequirementPropsProps: ResourceRequirementProps): ResourceRequirementProps { return (resourceRequirementPropsProps) }

export interface ResourceRequirementProps {
    type: Value<string>;
    value: Value<string>;
}