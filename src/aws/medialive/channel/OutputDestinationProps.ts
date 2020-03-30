import { MultiplexProgramChannelDestinationSettingsProps } from './MultiplexProgramChannelDestinationSettingsProps';
import { Value } from '../../../kloudformation/Value';
import { OutputDestinationSettingsProps } from './OutputDestinationSettingsProps';
import { MediaPackageOutputDestinationSettingsProps } from './MediaPackageOutputDestinationSettingsProps';

export function outputDestinationProps(outputDestinationPropsProps: OutputDestinationProps): OutputDestinationProps { return (outputDestinationPropsProps) as unknown as OutputDestinationProps }

export interface OutputDestinationProps {
    multiplexSettings?: MultiplexProgramChannelDestinationSettingsProps;
    id?: Value<string>;
    settings?: OutputDestinationSettingsProps[];
    mediaPackageSettings?: MediaPackageOutputDestinationSettingsProps[];
}