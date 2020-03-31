import { HiveJsonSerDeProps } from './HiveJsonSerDeProps';
import { OpenXJsonSerDeProps } from './OpenXJsonSerDeProps';

export function deserializerProps(deserializerPropsProps: DeserializerProps): DeserializerProps { return (deserializerPropsProps) }

export interface DeserializerProps {
    hiveJsonSerDe?: HiveJsonSerDeProps;
    openXJsonSerDe?: OpenXJsonSerDeProps;
}