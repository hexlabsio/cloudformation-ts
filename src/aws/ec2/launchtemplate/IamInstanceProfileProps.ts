import { Value } from '../../../kloudformation/Value';

export function iamInstanceProfileProps(iamInstanceProfilePropsProps: IamInstanceProfileProps): IamInstanceProfileProps { return (iamInstanceProfilePropsProps) as unknown as IamInstanceProfileProps }

export interface IamInstanceProfileProps {
    arn?: Value<string>;
    name?: Value<string>;
}