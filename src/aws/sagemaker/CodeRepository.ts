import { GitConfigProps } from './coderepository/GitConfigProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type CodeRepositoryAttributes = { CodeRepositoryName: Attribute<string> }
export function codeRepository(codeRepositoryProps: CodeRepository): CodeRepository & { attributes: CodeRepositoryAttributes } { return ({ ...codeRepositoryProps, _logicalType: 'AWS::SageMaker::CodeRepository', attributes: { CodeRepositoryName: 'CodeRepositoryName' } }) }

export interface CodeRepository extends KloudResource {
    gitConfig: GitConfigProps;
    codeRepositoryName?: Value<string>;
}