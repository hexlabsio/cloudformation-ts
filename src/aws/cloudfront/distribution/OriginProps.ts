import { Value } from '../../../kloudformation/Value';
import { OriginCustomHeaderProps } from './OriginCustomHeaderProps';
import { S3OriginConfigProps } from './S3OriginConfigProps';
import { CustomOriginConfigProps } from './CustomOriginConfigProps';

export interface OriginProps {
  connectionTimeout?: Value<number>
  originCustomHeaders?: OriginCustomHeaderProps[]
  connectionAttempts?: Value<number>
  domainName: Value<string>
  s3OriginConfig?: S3OriginConfigProps
  originPath?: Value<string>
  id: Value<string>
  customOriginConfig?: CustomOriginConfigProps
}