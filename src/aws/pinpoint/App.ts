import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function app(appProps: App & { logicalName?: string }): App { return ({ ...appProps, _logicalType: 'AWS::Pinpoint::App' }) as unknown as App }

export interface App extends KloudResource {
    name: Value<string>;
    tags?: Value<any>;
}