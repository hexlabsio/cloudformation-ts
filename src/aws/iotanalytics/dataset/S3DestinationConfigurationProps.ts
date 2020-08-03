import { GlueConfigurationProps } from './GlueConfigurationProps';
import { Value } from '../../../kloudformation/Value';

export interface S3DestinationConfigurationProps {
  glueConfiguration?: GlueConfigurationProps
  bucket: Value<string>
  key: Value<string>
  roleArn: Value<string>
}