import { Value } from '../../../kloudformation/Value';

export function sourceDetailProps(sourceDetailPropsProps: SourceDetailProps): SourceDetailProps { return (sourceDetailPropsProps) }

export interface SourceDetailProps {
    eventSource: Value<string>;
    messageType: Value<string>;
    maximumExecutionFrequency?: Value<string>;
}