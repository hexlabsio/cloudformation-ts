import { Value } from '../../../kloudformation/Value';

export function wafActionProps(wafActionPropsProps: WafActionProps): WafActionProps { return (wafActionPropsProps) }

export interface WafActionProps {
    type: Value<string>;
}