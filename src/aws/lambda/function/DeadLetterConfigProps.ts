import { Value } from '../../../kloudformation/Value';

export function deadLetterConfigProps(deadLetterConfigPropsProps: DeadLetterConfigProps): DeadLetterConfigProps { return (deadLetterConfigPropsProps) }

export interface DeadLetterConfigProps {
    targetArn?: Value<string>;
}