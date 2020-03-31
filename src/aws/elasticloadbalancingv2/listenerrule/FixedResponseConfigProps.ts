import { Value } from '../../../kloudformation/Value';

export function fixedResponseConfigProps(fixedResponseConfigPropsProps: FixedResponseConfigProps): FixedResponseConfigProps { return (fixedResponseConfigPropsProps) }

export interface FixedResponseConfigProps {
    statusCode: Value<string>;
    contentType?: Value<string>;
    messageBody?: Value<string>;
}