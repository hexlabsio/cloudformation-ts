import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type AppAttributes = { Arn: Attribute<string> }
export function app(appProps: App): App & { attributes: AppAttributes } { return ({ ...appProps, _logicalType: 'AWS::Pinpoint::App', attributes: { Arn: 'Arn' } }) }

export interface App extends KloudResource {
    name: Value<string>;
    tags?: Value<any>;
}