import { Value } from '../../../kloudformation/Value';

export function iPSetDescriptorProps(iPSetDescriptorPropsProps: IPSetDescriptorProps): IPSetDescriptorProps { return (iPSetDescriptorPropsProps) }

export interface IPSetDescriptorProps {
    type: Value<string>;
    value: Value<string>;
}