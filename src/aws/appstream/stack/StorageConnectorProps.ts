import { Value } from '../../../kloudformation/Value';

export function storageConnectorProps(storageConnectorPropsProps: StorageConnectorProps): StorageConnectorProps { return (storageConnectorPropsProps) }

export interface StorageConnectorProps {
    connectorType: Value<string>;
    domains?: Value<Value<string>[]>;
    resourceIdentifier?: Value<string>;
}