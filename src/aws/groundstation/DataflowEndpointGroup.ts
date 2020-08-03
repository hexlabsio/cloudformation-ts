import { EndpointDetailsProps } from './dataflowEndpointGroup/EndpointDetailsProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DataflowEndpointGroupAttributes = { Id: Attribute<string>;Arn: Attribute<string>;Status: Attribute<string> }
export function dataflowEndpointGroup(dataflowEndpointGroupProps: DataflowEndpointGroup): DataflowEndpointGroup & {attributes: DataflowEndpointGroupAttributes} { return ({ ...dataflowEndpointGroupProps, _logicalType: 'AWS::GroundStation::DataflowEndpointGroup', attributes: { Id: 'Id',Arn: 'Arn',Status: 'Status' } }) }
   
export interface DataflowEndpointGroup extends KloudResource {
  endpointDetails: EndpointDetailsProps[]
  tags?: Tag[]
}