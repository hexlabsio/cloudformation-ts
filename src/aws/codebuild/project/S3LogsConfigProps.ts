import { Value } from '../../../kloudformation/Value';

export function s3LogsConfigProps(s3LogsConfigPropsProps: S3LogsConfigProps): S3LogsConfigProps { return (s3LogsConfigPropsProps) as unknown as S3LogsConfigProps }

export interface S3LogsConfigProps {
    status: Value<string>;
    encryptionDisabled?: Value<boolean>;
    location?: Value<string>;
}