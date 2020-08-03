import { GitHubLocationProps } from './GitHubLocationProps';
import { Value } from '../../../kloudformation/Value';
import { S3LocationProps } from './S3LocationProps';

export interface RevisionLocationProps {
  gitHubLocation?: GitHubLocationProps
  revisionType?: Value<string>
  s3Location?: S3LocationProps
}