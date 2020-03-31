import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type GraphQLSchemaAttributes = {  }
export function graphQLSchema(graphQLSchemaProps: GraphQLSchema): GraphQLSchema & { attributes: GraphQLSchemaAttributes } { return ({ ...graphQLSchemaProps, _logicalType: 'AWS::AppSync::GraphQLSchema', attributes: {  } }) }

export interface GraphQLSchema extends KloudResource {
    apiId: Value<string>;
    definition?: Value<string>;
    definitionS3Location?: Value<string>;
}