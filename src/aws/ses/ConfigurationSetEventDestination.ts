import { Value } from '../../kloudformation/Value';
import { EventDestinationProps } from './configurationseteventdestination/EventDestinationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConfigurationSetEventDestinationAttributes = {  }
export function configurationSetEventDestination(configurationSetEventDestinationProps: ConfigurationSetEventDestination): ConfigurationSetEventDestination & { attributes: ConfigurationSetEventDestinationAttributes } { return ({ ...configurationSetEventDestinationProps, _logicalType: 'AWS::SES::ConfigurationSetEventDestination', attributes: {  } }) }

export interface ConfigurationSetEventDestination extends KloudResource {
    configurationSetName: Value<string>;
    eventDestination: EventDestinationProps;
}