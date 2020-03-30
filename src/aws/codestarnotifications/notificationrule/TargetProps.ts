import { Value } from '../../../kloudformation/Value';

export function targetProps(targetPropsProps: TargetProps): TargetProps { return (targetPropsProps) as unknown as TargetProps }

export interface TargetProps {
    targetType?: Value<string>;
    targetAddress?: Value<string>;
}