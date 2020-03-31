import { Value } from '../../../kloudformation/Value';

export function snsDestinationProps(snsDestinationPropsProps: SnsDestinationProps): SnsDestinationProps { return (snsDestinationPropsProps) }

export interface SnsDestinationProps {
    topicArn: Value<string>;
}