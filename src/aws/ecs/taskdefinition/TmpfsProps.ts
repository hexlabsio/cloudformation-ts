import { Value } from '../../../kloudformation/Value';

export function tmpfsProps(tmpfsPropsProps: TmpfsProps): TmpfsProps { return (tmpfsPropsProps) as unknown as TmpfsProps }

export interface TmpfsProps {
    size: Value<number>;
    containerPath?: Value<string>;
    mountOptions?: Value<Value<string>[]>;
}