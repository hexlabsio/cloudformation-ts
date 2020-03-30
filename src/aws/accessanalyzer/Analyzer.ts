import { Value } from '../../kloudformation/Value';
import { ArchiveRuleProps } from './analyzer/ArchiveRuleProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function analyzer(analyzerProps: Analyzer & { logicalName?: string }): Analyzer { return ({ ...analyzerProps, _logicalType: 'AWS::AccessAnalyzer::Analyzer' }) as unknown as Analyzer }

export interface Analyzer extends KloudResource {
    type: Value<string>;
    analyzerName?: Value<string>;
    archiveRules?: ArchiveRuleProps[];
    tags?: Tag[];
}