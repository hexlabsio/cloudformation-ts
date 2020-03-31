import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';
import { Value } from '../../../kloudformation/Value';

export function resultConfigurationProps(resultConfigurationPropsProps: ResultConfigurationProps): ResultConfigurationProps { return (resultConfigurationPropsProps) }

export interface ResultConfigurationProps {
    encryptionConfiguration?: EncryptionConfigurationProps;
    outputLocation?: Value<string>;
}