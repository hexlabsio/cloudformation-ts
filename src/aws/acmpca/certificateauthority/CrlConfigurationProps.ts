import { Value } from '../../../kloudformation/Value';

export function crlConfigurationProps(crlConfigurationPropsProps: CrlConfigurationProps): CrlConfigurationProps { return (crlConfigurationPropsProps) as unknown as CrlConfigurationProps }

export interface CrlConfigurationProps {
    enabled?: Value<boolean>;
    expirationInDays?: Value<number>;
    customCname?: Value<string>;
    s3BucketName?: Value<string>;
}