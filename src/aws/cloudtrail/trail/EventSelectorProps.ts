import { DataResourceProps } from './DataResourceProps';
import { Value } from '../../../kloudformation/Value';

export function eventSelectorProps(eventSelectorPropsProps: EventSelectorProps): EventSelectorProps { return (eventSelectorPropsProps) }

export interface EventSelectorProps {
    dataResources?: DataResourceProps[];
    includeManagementEvents?: Value<boolean>;
    readWriteType?: Value<string>;
}