import { Value } from '../../../kloudformation/Value';

export function runAsProps(runAsPropsProps: RunAsProps): RunAsProps { return (runAsPropsProps) }

export interface RunAsProps {
    uid?: Value<number>;
    gid?: Value<number>;
}