import { Value } from '../../../kloudformation/Value';

export function sourceBundleProps(sourceBundlePropsProps: SourceBundleProps): SourceBundleProps { return (sourceBundlePropsProps) as unknown as SourceBundleProps }

export interface SourceBundleProps {
    s3Bucket: Value<string>;
    s3Key: Value<string>;
}