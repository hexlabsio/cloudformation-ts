import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function graphQLSchema(graphQLSchemaProps: GraphQLSchema & { logicalName?: string }): GraphQLSchema { return ({ ...graphQLSchemaProps, _logicalType: 'AWS::AppSync::GraphQLSchema' }) as unknown as GraphQLSchema }

export interface GraphQLSchema extends KloudResource {
    apiId: Value<string>;
    definition?: Value<string>;
    definitionS3Location?: Value<string>;
}