import { EndpointDetailsProps } from './dataflowendpointgroup/EndpointDetailsProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DataflowEndpointGroupAttributes = { Id: Attribute<string>; Arn: Attribute<string>; Status: Attribute<string> }
export function dataflowEndpointGroup(dataflowEndpointGroupProps: DataflowEndpointGroup): DataflowEndpointGroup & { attributes: DataflowEndpointGroupAttributes } { return ({ ...dataflowEndpointGroupProps, _logicalType: 'AWS::GroundStation::DataflowEndpointGroup', attributes: { Id: 'Id', Arn: 'Arn', Status: 'Status' } }) }

export interface DataflowEndpointGroup extends KloudResource {
    endpointDetails: EndpointDetailsProps[];
    tags?: Tag[];
}