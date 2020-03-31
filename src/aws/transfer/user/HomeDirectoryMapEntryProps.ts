import { Value } from '../../../kloudformation/Value';

export function homeDirectoryMapEntryProps(homeDirectoryMapEntryPropsProps: HomeDirectoryMapEntryProps): HomeDirectoryMapEntryProps { return (homeDirectoryMapEntryPropsProps) }

export interface HomeDirectoryMapEntryProps {
    entry: Value<string>;
    target: Value<string>;
}