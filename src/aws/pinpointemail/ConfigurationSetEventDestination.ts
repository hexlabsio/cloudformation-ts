import { Value } from '../../kloudformation/Value';
import { EventDestinationProps } from '../ses/configurationseteventdestination/EventDestinationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configurationSetEventDestination(configurationSetEventDestinationProps: ConfigurationSetEventDestination & { logicalName?: string }): ConfigurationSetEventDestination { return ({ ...configurationSetEventDestinationProps, _logicalType: 'AWS::PinpointEmail::ConfigurationSetEventDestination' }) as unknown as ConfigurationSetEventDestination }

export interface ConfigurationSetEventDestination extends KloudResource {
    eventDestinationName: Value<string>;
    configurationSetName: Value<string>;
    eventDestination?: EventDestinationProps;
}