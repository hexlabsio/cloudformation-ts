import { ResourceDataContainerProps } from './ResourceDataContainerProps';
import { Value } from '../../../kloudformation/Value';

export function resourceInstanceProps(resourceInstancePropsProps: ResourceInstanceProps): ResourceInstanceProps { return (resourceInstancePropsProps) }

export interface ResourceInstanceProps {
    resourceDataContainer: ResourceDataContainerProps;
    id: Value<string>;
    name: Value<string>;
}