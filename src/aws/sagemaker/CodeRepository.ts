import { GitConfigProps } from './coderepository/GitConfigProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function codeRepository(codeRepositoryProps: CodeRepository & { logicalName?: string }): CodeRepository { return ({ ...codeRepositoryProps, _logicalType: 'AWS::SageMaker::CodeRepository' }) as unknown as CodeRepository }

export interface CodeRepository extends KloudResource {
    gitConfig: GitConfigProps;
    codeRepositoryName?: Value<string>;
}