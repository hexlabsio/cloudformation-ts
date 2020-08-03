import { Value } from '../../../kloudformation/Value';

export interface SigV4AuthorizationProps {
  roleArn: Value<string>
  serviceName: Value<string>
  signingRegion: Value<string>
}