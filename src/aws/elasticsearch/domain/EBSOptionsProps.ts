import { Value } from '../../../kloudformation/Value';

export function eBSOptionsProps(eBSOptionsPropsProps: EBSOptionsProps): EBSOptionsProps { return (eBSOptionsPropsProps) as unknown as EBSOptionsProps }

export interface EBSOptionsProps {
    eBSEnabled?: Value<boolean>;
    iops?: Value<number>;
    volumeSize?: Value<number>;
    volumeType?: Value<string>;
}