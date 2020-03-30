import { Value } from '../../../kloudformation/Value';
import { HlsInputSettingsProps } from './HlsInputSettingsProps';

export function networkInputSettingsProps(networkInputSettingsPropsProps: NetworkInputSettingsProps): NetworkInputSettingsProps { return (networkInputSettingsPropsProps) as unknown as NetworkInputSettingsProps }

export interface NetworkInputSettingsProps {
    serverValidation?: Value<string>;
    hlsInputSettings?: HlsInputSettingsProps;
}