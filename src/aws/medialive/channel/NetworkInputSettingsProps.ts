import { Value } from '../../../kloudformation/Value';
import { HlsInputSettingsProps } from './HlsInputSettingsProps';

export function networkInputSettingsProps(networkInputSettingsPropsProps: NetworkInputSettingsProps): NetworkInputSettingsProps { return (networkInputSettingsPropsProps) }

export interface NetworkInputSettingsProps {
    serverValidation?: Value<string>;
    hlsInputSettings?: HlsInputSettingsProps;
}