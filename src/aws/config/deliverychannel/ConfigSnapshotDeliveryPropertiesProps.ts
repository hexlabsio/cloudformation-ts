import { Value } from '../../../kloudformation/Value';

export function configSnapshotDeliveryPropertiesProps(configSnapshotDeliveryPropertiesPropsProps: ConfigSnapshotDeliveryPropertiesProps): ConfigSnapshotDeliveryPropertiesProps { return (configSnapshotDeliveryPropertiesPropsProps) as unknown as ConfigSnapshotDeliveryPropertiesProps }

export interface ConfigSnapshotDeliveryPropertiesProps {
    deliveryFrequency?: Value<string>;
}