import { Value } from '../../../kloudformation/Value';

export function iamInstanceProfileSpecificationProps(iamInstanceProfileSpecificationPropsProps: IamInstanceProfileSpecificationProps): IamInstanceProfileSpecificationProps { return (iamInstanceProfileSpecificationPropsProps) as unknown as IamInstanceProfileSpecificationProps }

export interface IamInstanceProfileSpecificationProps {
    arn?: Value<string>;
}