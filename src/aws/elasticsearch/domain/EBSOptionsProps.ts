import { Value } from '../../../kloudformation/Value';

export function eBSOptionsProps(eBSOptionsPropsProps: EBSOptionsProps): EBSOptionsProps { return (eBSOptionsPropsProps) }

export interface EBSOptionsProps {
    eBSEnabled?: Value<boolean>;
    iops?: Value<number>;
    volumeSize?: Value<number>;
    volumeType?: Value<string>;
}