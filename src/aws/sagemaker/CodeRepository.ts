import { Value } from '../../kloudformation/Value';
import { GitConfigProps } from './codeRepository/GitConfigProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CodeRepositoryAttributes = { CodeRepositoryName: Attribute<string> }
export function codeRepository(codeRepositoryProps: CodeRepository): CodeRepository & {attributes: CodeRepositoryAttributes} { return ({ ...codeRepositoryProps, _logicalType: 'AWS::SageMaker::CodeRepository', attributes: { CodeRepositoryName: 'CodeRepositoryName' } }) }
   
export interface CodeRepository extends KloudResource {
  codeRepositoryName?: Value<string>
  gitConfig: GitConfigProps
}