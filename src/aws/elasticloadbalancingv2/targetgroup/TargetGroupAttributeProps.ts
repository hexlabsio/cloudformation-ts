import { Value } from '../../../kloudformation/Value';

export function targetGroupAttributeProps(targetGroupAttributePropsProps: TargetGroupAttributeProps): TargetGroupAttributeProps { return (targetGroupAttributePropsProps) as unknown as TargetGroupAttributeProps }

export interface TargetGroupAttributeProps {
    key?: Value<string>;
    value?: Value<string>;
}