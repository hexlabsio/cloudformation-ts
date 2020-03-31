import { Value } from '../../../kloudformation/Value';

export function provisionedThroughputProps(provisionedThroughputPropsProps: ProvisionedThroughputProps): ProvisionedThroughputProps { return (provisionedThroughputPropsProps) }

export interface ProvisionedThroughputProps {
    readCapacityUnits: Value<number>;
    writeCapacityUnits: Value<number>;
}