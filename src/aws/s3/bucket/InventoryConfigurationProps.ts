import { DestinationProps } from './DestinationProps';
import { Value } from '../../../kloudformation/Value';

export function inventoryConfigurationProps(inventoryConfigurationPropsProps: InventoryConfigurationProps): InventoryConfigurationProps { return (inventoryConfigurationPropsProps) as unknown as InventoryConfigurationProps }

export interface InventoryConfigurationProps {
    destination: DestinationProps;
    enabled: Value<boolean>;
    id: Value<string>;
    includedObjectVersions: Value<string>;
    scheduleFrequency: Value<string>;
    optionalFields?: Value<Value<string>[]>;
    prefix?: Value<string>;
}