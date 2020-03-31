import { InputProps } from './application/InputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationAttributes = {  }
export function application(applicationProps: Application): Application & { attributes: ApplicationAttributes } { return ({ ...applicationProps, _logicalType: 'AWS::KinesisAnalytics::Application', attributes: {  } }) }

export interface Application extends KloudResource {
    inputs: InputProps[];
    applicationName?: Value<string>;
    applicationDescription?: Value<string>;
    applicationCode?: Value<string>;
}