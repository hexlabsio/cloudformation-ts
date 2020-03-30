import { Value } from '../../kloudformation/Value';
import { CorsRuleProps } from './container/CorsRuleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function container(containerProps: Container & { logicalName?: string }): Container { return ({ ...containerProps, _logicalType: 'AWS::MediaStore::Container' }) as unknown as Container }

export interface Container extends KloudResource {
    containerName: Value<string>;
    policy?: Value<string>;
    corsPolicy?: CorsRuleProps[];
    lifecyclePolicy?: Value<string>;
    accessLoggingEnabled?: Value<boolean>;
}