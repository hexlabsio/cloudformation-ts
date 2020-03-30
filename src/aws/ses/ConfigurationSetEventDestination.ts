import { Value } from '../../kloudformation/Value';
import { EventDestinationProps } from './configurationseteventdestination/EventDestinationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configurationSetEventDestination(configurationSetEventDestinationProps: ConfigurationSetEventDestination & { logicalName?: string }): ConfigurationSetEventDestination { return ({ ...configurationSetEventDestinationProps, _logicalType: 'AWS::SES::ConfigurationSetEventDestination' }) as unknown as ConfigurationSetEventDestination }

export interface ConfigurationSetEventDestination extends KloudResource {
    configurationSetName: Value<string>;
    eventDestination: EventDestinationProps;
}