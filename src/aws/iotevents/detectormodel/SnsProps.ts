import { Value } from '../../../kloudformation/Value';

export function snsProps(snsPropsProps: SnsProps): SnsProps { return (snsPropsProps) as unknown as SnsProps }

export interface SnsProps {
    targetArn?: Value<string>;
}