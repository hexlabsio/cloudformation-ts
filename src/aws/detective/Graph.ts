import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type GraphAttributes = { Arn: Attribute<string> }
export function graph(graphProps: Graph): Graph & {attributes: GraphAttributes} { return ({ ...graphProps, _logicalType: 'AWS::Detective::Graph', attributes: { Arn: 'Arn' } }) }
   
export interface Graph extends KloudResource {
  
}