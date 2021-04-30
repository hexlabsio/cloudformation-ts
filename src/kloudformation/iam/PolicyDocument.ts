import {Value} from "../Value";
export type Principal = '*' | { AWS: Value<string>[] } | { Federated: Value<string>[] } | { Service: Value<string>[] }
export interface PolicyDocument {
  id?: string;
  version?: '2008-10-17' | '2012-10-17' | string;
  statement: PolicyStatement[];
}

export interface PolicyStatement {
  action?: Value<string> | Value<string[]>| Value<string>[];
  notAction?: Value<string> | Value<string[]>| Value<string>[];
  effect: 'Allow' | 'Deny';
  resource?: Value<string> | Value<string[]> | Value<string>[];
  notResource?: Value<string> | Value<string[]>| Value<string>[];
  sid?: Value<string>;
  principal?: Principal;
  notPrincipal?: Principal;
  condition?: any;
}

export function iamPolicy(policyDocument: PolicyDocument): PolicyDocument { return policyDocument }
