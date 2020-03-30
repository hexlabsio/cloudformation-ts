import { Value } from '../../../kloudformation/Value';

export function teletextSourceSettingsProps(teletextSourceSettingsPropsProps: TeletextSourceSettingsProps): TeletextSourceSettingsProps { return (teletextSourceSettingsPropsProps) as unknown as TeletextSourceSettingsProps }

export interface TeletextSourceSettingsProps {
    pageNumber?: Value<string>;
}