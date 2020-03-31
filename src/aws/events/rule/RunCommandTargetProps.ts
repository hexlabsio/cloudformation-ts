import { Value } from '../../../kloudformation/Value';

export function runCommandTargetProps(runCommandTargetPropsProps: RunCommandTargetProps): RunCommandTargetProps { return (runCommandTargetPropsProps) }

export interface RunCommandTargetProps {
    key: Value<string>;
    values: Value<Value<string>[]>;
}