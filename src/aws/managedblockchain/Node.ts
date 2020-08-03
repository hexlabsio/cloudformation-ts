import { Value } from '../../kloudformation/Value';
import { NodeConfigurationProps } from './node/NodeConfigurationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type NodeAttributes = { MemberId: Attribute<string>;NodeId: Attribute<string>;Arn: Attribute<string>;NetworkId: Attribute<string> }
export function node(nodeProps: Node): Node & {attributes: NodeAttributes} { return ({ ...nodeProps, _logicalType: 'AWS::ManagedBlockchain::Node', attributes: { MemberId: 'MemberId',NodeId: 'NodeId',Arn: 'Arn',NetworkId: 'NetworkId' } }) }
   
export interface Node extends KloudResource {
  memberId: Value<string>
  networkId: Value<string>
  nodeConfiguration: NodeConfigurationProps
}