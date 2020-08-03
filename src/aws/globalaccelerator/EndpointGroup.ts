import { Value } from '../../kloudformation/Value';
import { EndpointConfigurationProps } from './endpointGroup/EndpointConfigurationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type EndpointGroupAttributes = { EndpointGroupArn: Attribute<string> }
export function endpointGroup(endpointGroupProps: EndpointGroup): EndpointGroup & {attributes: EndpointGroupAttributes} { return ({ ...endpointGroupProps, _logicalType: 'AWS::GlobalAccelerator::EndpointGroup', attributes: { EndpointGroupArn: 'EndpointGroupArn' } }) }
   
export interface EndpointGroup extends KloudResource {
  listenerArn: Value<string>
  endpointGroupRegion: Value<string>
  endpointConfigurations?: EndpointConfigurationProps[]
  trafficDialPercentage?: Value<number>
  healthCheckPort?: Value<number>
  healthCheckProtocol?: Value<string>
  healthCheckPath?: Value<string>
  healthCheckIntervalSeconds?: Value<number>
  thresholdCount?: Value<number>
}