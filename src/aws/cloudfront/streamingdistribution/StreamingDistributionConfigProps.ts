import { Value } from '../../../kloudformation/Value';
import { S3OriginProps } from './S3OriginProps';
import { TrustedSignersProps } from './TrustedSignersProps';
import { LoggingProps } from './LoggingProps';

export function streamingDistributionConfigProps(streamingDistributionConfigPropsProps: StreamingDistributionConfigProps): StreamingDistributionConfigProps { return (streamingDistributionConfigPropsProps) }

export interface StreamingDistributionConfigProps {
    comment: Value<string>;
    s3Origin: S3OriginProps;
    enabled: Value<boolean>;
    trustedSigners: TrustedSignersProps;
    logging?: LoggingProps;
    priceClass?: Value<string>;
    aliases?: Value<Value<string>[]>;
}