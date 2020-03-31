import { Value } from '../../../kloudformation/Value';
import { SourceDetailProps } from './SourceDetailProps';

export function sourceProps(sourcePropsProps: SourceProps): SourceProps { return (sourcePropsProps) }

export interface SourceProps {
    owner: Value<string>;
    sourceIdentifier: Value<string>;
    sourceDetails?: SourceDetailProps[];
}