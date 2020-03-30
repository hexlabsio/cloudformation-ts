import { Value } from '../../kloudformation/Value';
import { NodeConfigurationProps } from './node/NodeConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function node(nodeProps: Node & { logicalName?: string }): Node { return ({ ...nodeProps, _logicalType: 'AWS::ManagedBlockchain::Node' }) as unknown as Node }

export interface Node extends KloudResource {
    memberId: Value<string>;
    networkId: Value<string>;
    nodeConfiguration: NodeConfigurationProps;
}