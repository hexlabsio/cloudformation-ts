import { Value } from '../../../kloudformation/Value';

export function cognitoStreamsProps(cognitoStreamsPropsProps: CognitoStreamsProps): CognitoStreamsProps { return (cognitoStreamsPropsProps) }

export interface CognitoStreamsProps {
    streamingStatus?: Value<string>;
    streamName?: Value<string>;
    roleArn?: Value<string>;
}