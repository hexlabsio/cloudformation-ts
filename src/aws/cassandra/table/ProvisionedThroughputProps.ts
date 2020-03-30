import { Value } from '../../../kloudformation/Value';

export function provisionedThroughputProps(provisionedThroughputPropsProps: ProvisionedThroughputProps): ProvisionedThroughputProps { return (provisionedThroughputPropsProps) as unknown as ProvisionedThroughputProps }

export interface ProvisionedThroughputProps {
    readCapacityUnits: Value<number>;
    writeCapacityUnits: Value<number>;
}