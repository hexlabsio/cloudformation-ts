import { Value } from '../../../kloudformation/Value';

export function outputDestinationSettingsProps(outputDestinationSettingsPropsProps: OutputDestinationSettingsProps): OutputDestinationSettingsProps { return (outputDestinationSettingsPropsProps) as unknown as OutputDestinationSettingsProps }

export interface OutputDestinationSettingsProps {
    streamName?: Value<string>;
    username?: Value<string>;
    passwordParam?: Value<string>;
    url?: Value<string>;
}