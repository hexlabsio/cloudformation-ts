import { ResourceDataContainerProps } from './ResourceDataContainerProps';
import { Value } from '../../../kloudformation/Value';

export function resourceInstanceProps(resourceInstancePropsProps: ResourceInstanceProps): ResourceInstanceProps { return (resourceInstancePropsProps) as unknown as ResourceInstanceProps }

export interface ResourceInstanceProps {
    resourceDataContainer: ResourceDataContainerProps;
    id: Value<string>;
    name: Value<string>;
}