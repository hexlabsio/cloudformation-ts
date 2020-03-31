import { Value } from '../../kloudformation/Value';
import { ArchiveRuleProps } from './analyzer/ArchiveRuleProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type AnalyzerAttributes = { Arn: Attribute<string> }
export function analyzer(analyzerProps: Analyzer): Analyzer & { attributes: AnalyzerAttributes } { return ({ ...analyzerProps, _logicalType: 'AWS::AccessAnalyzer::Analyzer', attributes: { Arn: 'Arn' } }) }

export interface Analyzer extends KloudResource {
    type: Value<string>;
    analyzerName?: Value<string>;
    archiveRules?: ArchiveRuleProps[];
    tags?: Tag[];
}