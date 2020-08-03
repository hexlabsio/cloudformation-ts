import { LoggingProps } from './LoggingProps';
import { Value } from '../../../kloudformation/Value';
import { S3OriginProps } from './S3OriginProps';
import { TrustedSignersProps } from './TrustedSignersProps';

export interface StreamingDistributionConfigProps {
  logging?: LoggingProps
  comment: Value<string>
  priceClass?: Value<string>
  s3Origin: S3OriginProps
  enabled: Value<boolean>
  aliases?: Value<Value<string>[]>
  trustedSigners: TrustedSignersProps
}