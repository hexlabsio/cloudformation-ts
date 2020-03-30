import { Value } from '../../../kloudformation/Value';

export function scte27SourceSettingsProps(scte27SourceSettingsPropsProps: Scte27SourceSettingsProps): Scte27SourceSettingsProps { return (scte27SourceSettingsPropsProps) as unknown as Scte27SourceSettingsProps }

export interface Scte27SourceSettingsProps {
    pid?: Value<number>;
}