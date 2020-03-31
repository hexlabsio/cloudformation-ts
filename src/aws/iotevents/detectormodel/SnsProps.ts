import { Value } from '../../../kloudformation/Value';

export function snsProps(snsPropsProps: SnsProps): SnsProps { return (snsPropsProps) }

export interface SnsProps {
    targetArn?: Value<string>;
}