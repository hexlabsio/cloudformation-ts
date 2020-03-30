import { Value } from '../../kloudformation/Value';
import { RepositoryTriggerProps } from './repository/RepositoryTriggerProps';
import { CodeProps } from './repository/CodeProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function repository(repositoryProps: Repository & { logicalName?: string }): Repository { return ({ ...repositoryProps, _logicalType: 'AWS::CodeCommit::Repository' }) as unknown as Repository }

export interface Repository extends KloudResource {
    repositoryName: Value<string>;
    triggers?: RepositoryTriggerProps[];
    code?: CodeProps;
    repositoryDescription?: Value<string>;
    tags?: Tag[];
}