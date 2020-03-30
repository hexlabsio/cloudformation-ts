import { Value } from '../../../kloudformation/Value';

export function dvbSubSourceSettingsProps(dvbSubSourceSettingsPropsProps: DvbSubSourceSettingsProps): DvbSubSourceSettingsProps { return (dvbSubSourceSettingsPropsProps) as unknown as DvbSubSourceSettingsProps }

export interface DvbSubSourceSettingsProps {
    pid?: Value<number>;
}