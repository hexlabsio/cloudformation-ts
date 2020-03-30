import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function config(configProps: Config & { logicalName?: string }): Config { return ({ ...configProps, _logicalType: 'AWS::GroundStation::Config' }) as unknown as Config }

export interface Config extends KloudResource {
    name: Value<string>;
    configData: Value<any>;
    tags?: Tag[];
}