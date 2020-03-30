import { Value } from '../../../kloudformation/Value';

export function hlsInputSettingsProps(hlsInputSettingsPropsProps: HlsInputSettingsProps): HlsInputSettingsProps { return (hlsInputSettingsPropsProps) as unknown as HlsInputSettingsProps }

export interface HlsInputSettingsProps {
    bufferSegments?: Value<number>;
    retries?: Value<number>;
    bandwidth?: Value<number>;
    retryInterval?: Value<number>;
}