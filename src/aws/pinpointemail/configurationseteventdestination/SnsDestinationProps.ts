import { Value } from '../../../kloudformation/Value';

export function snsDestinationProps(snsDestinationPropsProps: SnsDestinationProps): SnsDestinationProps { return (snsDestinationPropsProps) as unknown as SnsDestinationProps }

export interface SnsDestinationProps {
    topicArn: Value<string>;
}