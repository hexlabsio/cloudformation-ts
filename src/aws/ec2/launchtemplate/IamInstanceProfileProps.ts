import { Value } from '../../../kloudformation/Value';

export function iamInstanceProfileProps(iamInstanceProfilePropsProps: IamInstanceProfileProps): IamInstanceProfileProps { return (iamInstanceProfilePropsProps) }

export interface IamInstanceProfileProps {
    arn?: Value<string>;
    name?: Value<string>;
}