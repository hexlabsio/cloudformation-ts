import { Value } from '../../kloudformation/Value';
import { GenerateSecretStringProps } from './secret/GenerateSecretStringProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function secret(secretProps: Secret & { logicalName?: string }): Secret { return ({ ...secretProps, _logicalType: 'AWS::SecretsManager::Secret' }) as unknown as Secret }

export interface Secret extends KloudResource {
    description?: Value<string>;
    kmsKeyId?: Value<string>;
    secretString?: Value<string>;
    generateSecretString?: GenerateSecretStringProps;
    tags?: Tag[];
    name?: Value<string>;
}