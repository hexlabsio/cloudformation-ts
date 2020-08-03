import { Value } from '../../kloudformation/Value';
import { ArchiveRuleProps } from './analyzer/ArchiveRuleProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type AnalyzerAttributes = { Arn: Attribute<string> }
export function analyzer(analyzerProps: Analyzer): Analyzer & {attributes: AnalyzerAttributes} { return ({ ...analyzerProps, _logicalType: 'AWS::AccessAnalyzer::Analyzer', attributes: { Arn: 'Arn' } }) }
   
export interface Analyzer extends KloudResource {
  analyzerName?: Value<string>
  archiveRules?: ArchiveRuleProps[]
  tags?: Tag[]
  type: Value<string>
}