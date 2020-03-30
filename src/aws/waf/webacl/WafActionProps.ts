import { Value } from '../../../kloudformation/Value';

export function wafActionProps(wafActionPropsProps: WafActionProps): WafActionProps { return (wafActionPropsProps) as unknown as WafActionProps }

export interface WafActionProps {
    type: Value<string>;
}