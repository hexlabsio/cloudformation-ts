import { Value } from '../../../kloudformation/Value';

export function multiplexProgramChannelDestinationSettingsProps(multiplexProgramChannelDestinationSettingsPropsProps: MultiplexProgramChannelDestinationSettingsProps): MultiplexProgramChannelDestinationSettingsProps { return (multiplexProgramChannelDestinationSettingsPropsProps) as unknown as MultiplexProgramChannelDestinationSettingsProps }

export interface MultiplexProgramChannelDestinationSettingsProps {
    multiplexId?: Value<string>;
    programName?: Value<string>;
}