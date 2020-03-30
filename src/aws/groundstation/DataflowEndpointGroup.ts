import { EndpointDetailsProps } from './dataflowendpointgroup/EndpointDetailsProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dataflowEndpointGroup(dataflowEndpointGroupProps: DataflowEndpointGroup & { logicalName?: string }): DataflowEndpointGroup { return ({ ...dataflowEndpointGroupProps, _logicalType: 'AWS::GroundStation::DataflowEndpointGroup' }) as unknown as DataflowEndpointGroup }

export interface DataflowEndpointGroup extends KloudResource {
    endpointDetails: EndpointDetailsProps[];
    tags?: Tag[];
}