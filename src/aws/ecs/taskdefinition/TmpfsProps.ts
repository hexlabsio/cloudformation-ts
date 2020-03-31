import { Value } from '../../../kloudformation/Value';

export function tmpfsProps(tmpfsPropsProps: TmpfsProps): TmpfsProps { return (tmpfsPropsProps) }

export interface TmpfsProps {
    size: Value<number>;
    containerPath?: Value<string>;
    mountOptions?: Value<Value<string>[]>;
}