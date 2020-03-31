import { Value } from '../../../kloudformation/Value';

export function openXJsonSerDeProps(openXJsonSerDePropsProps: OpenXJsonSerDeProps): OpenXJsonSerDeProps { return (openXJsonSerDePropsProps) }

export interface OpenXJsonSerDeProps {
    caseInsensitive?: Value<boolean>;
    columnToJsonKeyMappings?: { [key: string]: Value<string> };
    convertDotsInJsonKeysToUnderscores?: Value<boolean>;
}