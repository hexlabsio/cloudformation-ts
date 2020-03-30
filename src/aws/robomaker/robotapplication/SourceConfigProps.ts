import { Value } from '../../../kloudformation/Value';

export function sourceConfigProps(sourceConfigPropsProps: SourceConfigProps): SourceConfigProps { return (sourceConfigPropsProps) as unknown as SourceConfigProps }

export interface SourceConfigProps {
    s3Bucket: Value<string>;
    architecture: Value<string>;
    s3Key: Value<string>;
}