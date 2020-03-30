import { Value } from '../../../kloudformation/Value';

export function storageConnectorProps(storageConnectorPropsProps: StorageConnectorProps): StorageConnectorProps { return (storageConnectorPropsProps) as unknown as StorageConnectorProps }

export interface StorageConnectorProps {
    connectorType: Value<string>;
    domains?: Value<Value<string>[]>;
    resourceIdentifier?: Value<string>;
}