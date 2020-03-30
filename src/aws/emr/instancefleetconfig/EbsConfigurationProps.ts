import { EbsBlockDeviceConfigProps } from './EbsBlockDeviceConfigProps';
import { Value } from '../../../kloudformation/Value';

export function ebsConfigurationProps(ebsConfigurationPropsProps: EbsConfigurationProps): EbsConfigurationProps { return (ebsConfigurationPropsProps) as unknown as EbsConfigurationProps }

export interface EbsConfigurationProps {
    ebsBlockDeviceConfigs?: EbsBlockDeviceConfigProps[];
    ebsOptimized?: Value<boolean>;
}