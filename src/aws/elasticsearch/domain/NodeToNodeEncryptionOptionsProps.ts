import { Value } from '../../../kloudformation/Value';

export function nodeToNodeEncryptionOptionsProps(nodeToNodeEncryptionOptionsPropsProps: NodeToNodeEncryptionOptionsProps): NodeToNodeEncryptionOptionsProps { return (nodeToNodeEncryptionOptionsPropsProps) as unknown as NodeToNodeEncryptionOptionsProps }

export interface NodeToNodeEncryptionOptionsProps {
    enabled?: Value<boolean>;
}