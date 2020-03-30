import { Value } from '../../../kloudformation/Value';

export function inputVpcRequestProps(inputVpcRequestPropsProps: InputVpcRequestProps): InputVpcRequestProps { return (inputVpcRequestPropsProps) as unknown as InputVpcRequestProps }

export interface InputVpcRequestProps {
    securityGroupIds?: Value<Value<string>[]>;
    subnetIds?: Value<Value<string>[]>;
}