import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function graphQLSchema(graphQLSchemaProps: GraphQLSchema): GraphQLSchema { return ({ ...graphQLSchemaProps, _logicalType: '' }) }
  
export interface GraphQLSchema extends KloudResource {
  definition?: Value<string>
  definitionS3Location?: Value<string>
  apiId: Value<string>
}