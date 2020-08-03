import { Value } from '../../../kloudformation/Value';

export interface S3OriginProps {
  domainName: Value<string>
  originAccessIdentity: Value<string>
}