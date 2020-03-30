import { Value } from '../../../kloudformation/Value';

export function vPCProps(vPCPropsProps: VPCProps): VPCProps { return (vPCPropsProps) as unknown as VPCProps }

export interface VPCProps {
    vPCId: Value<string>;
    vPCRegion: Value<string>;
}