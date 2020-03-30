import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';
import { Value } from '../../../kloudformation/Value';

export function resultConfigurationUpdatesProps(resultConfigurationUpdatesPropsProps: ResultConfigurationUpdatesProps): ResultConfigurationUpdatesProps { return (resultConfigurationUpdatesPropsProps) as unknown as ResultConfigurationUpdatesProps }

export interface ResultConfigurationUpdatesProps {
    encryptionConfiguration?: EncryptionConfigurationProps;
    outputLocation?: Value<string>;
    removeEncryptionConfiguration?: Value<boolean>;
    removeOutputLocation?: Value<boolean>;
}