import { Value } from '../../../kloudformation/Value';

export interface CognitoStreamsProps {
  streamingStatus?: Value<string>
  streamName?: Value<string>
  roleArn?: Value<string>
}