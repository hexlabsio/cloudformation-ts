import { Value } from '../../../kloudformation/Value';

export function elasticFileSystemTagProps(elasticFileSystemTagPropsProps: ElasticFileSystemTagProps): ElasticFileSystemTagProps { return (elasticFileSystemTagPropsProps) }

export interface ElasticFileSystemTagProps {
    key: Value<string>;
    value: Value<string>;
}