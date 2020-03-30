import { InputProps } from './application/InputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function application(applicationProps: Application & { logicalName?: string }): Application { return ({ ...applicationProps, _logicalType: 'AWS::KinesisAnalytics::Application' }) as unknown as Application }

export interface Application extends KloudResource {
    inputs: InputProps[];
    applicationName?: Value<string>;
    applicationDescription?: Value<string>;
    applicationCode?: Value<string>;
}