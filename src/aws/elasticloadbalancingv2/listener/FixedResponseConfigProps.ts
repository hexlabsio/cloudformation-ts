import { Value } from '../../../kloudformation/Value';

export function fixedResponseConfigProps(fixedResponseConfigPropsProps: FixedResponseConfigProps): FixedResponseConfigProps { return (fixedResponseConfigPropsProps) as unknown as FixedResponseConfigProps }

export interface FixedResponseConfigProps {
    statusCode: Value<string>;
    contentType?: Value<string>;
    messageBody?: Value<string>;
}