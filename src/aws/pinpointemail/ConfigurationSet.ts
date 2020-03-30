import { Value } from '../../kloudformation/Value';
import { SendingOptionsProps } from './configurationset/SendingOptionsProps';
import { TrackingOptionsProps } from './configurationset/TrackingOptionsProps';
import { ReputationOptionsProps } from './configurationset/ReputationOptionsProps';
import { DeliveryOptionsProps } from './configurationset/DeliveryOptionsProps';
import { TagsProps } from './configurationset/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configurationSet(configurationSetProps: ConfigurationSet & { logicalName?: string }): ConfigurationSet { return ({ ...configurationSetProps, _logicalType: 'AWS::PinpointEmail::ConfigurationSet' }) as unknown as ConfigurationSet }

export interface ConfigurationSet extends KloudResource {
    name: Value<string>;
    sendingOptions?: SendingOptionsProps;
    trackingOptions?: TrackingOptionsProps;
    reputationOptions?: ReputationOptionsProps;
    deliveryOptions?: DeliveryOptionsProps;
    tags?: TagsProps[];
}