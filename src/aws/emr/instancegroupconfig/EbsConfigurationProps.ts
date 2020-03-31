import { EbsBlockDeviceConfigProps } from './EbsBlockDeviceConfigProps';
import { Value } from '../../../kloudformation/Value';

export function ebsConfigurationProps(ebsConfigurationPropsProps: EbsConfigurationProps): EbsConfigurationProps { return (ebsConfigurationPropsProps) }

export interface EbsConfigurationProps {
    ebsBlockDeviceConfigs?: EbsBlockDeviceConfigProps[];
    ebsOptimized?: Value<boolean>;
}