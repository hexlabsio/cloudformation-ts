import { Value } from '../../../kloudformation/Value';

export function deadLetterConfigProps(deadLetterConfigPropsProps: DeadLetterConfigProps): DeadLetterConfigProps { return (deadLetterConfigPropsProps) as unknown as DeadLetterConfigProps }

export interface DeadLetterConfigProps {
    targetArn?: Value<string>;
}