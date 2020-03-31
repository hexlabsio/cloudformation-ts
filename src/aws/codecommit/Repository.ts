import { Value } from '../../kloudformation/Value';
import { RepositoryTriggerProps } from './repository/RepositoryTriggerProps';
import { CodeProps } from './repository/CodeProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type RepositoryAttributes = { CloneUrlHttp: Attribute<string>; CloneUrlSsh: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function repository(repositoryProps: Repository): Repository & { attributes: RepositoryAttributes } { return ({ ...repositoryProps, _logicalType: 'AWS::CodeCommit::Repository', attributes: { CloneUrlHttp: 'CloneUrlHttp', CloneUrlSsh: 'CloneUrlSsh', Arn: 'Arn', Name: 'Name' } }) }

export interface Repository extends KloudResource {
    repositoryName: Value<string>;
    triggers?: RepositoryTriggerProps[];
    code?: CodeProps;
    repositoryDescription?: Value<string>;
    tags?: Tag[];
}