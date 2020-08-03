import { Value } from '../../kloudformation/Value';
import { PortRangeProps } from './listener/PortRangeProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ListenerAttributes = { ListenerArn: Attribute<string> }
export function listener(listenerProps: Listener): Listener & {attributes: ListenerAttributes} { return ({ ...listenerProps, _logicalType: 'AWS::GlobalAccelerator::Listener', attributes: { ListenerArn: 'ListenerArn' } }) }
   
export interface Listener extends KloudResource {
  acceleratorArn: Value<string>
  portRanges: PortRangeProps[]
  protocol: Value<string>
  clientAffinity?: Value<string>
}