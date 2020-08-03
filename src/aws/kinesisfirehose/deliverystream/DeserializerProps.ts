import { HiveJsonSerDeProps } from './HiveJsonSerDeProps';
import { OpenXJsonSerDeProps } from './OpenXJsonSerDeProps';

export interface DeserializerProps {
  hiveJsonSerDe?: HiveJsonSerDeProps
  openXJsonSerDe?: OpenXJsonSerDeProps
}