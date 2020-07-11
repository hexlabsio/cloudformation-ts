import {Value} from "../Value";
export type Principal = '*' | { AWS: Value<string>[] } | { Federated: Value<string>[] } | { Service: Value<string>[] }
export interface PolicyDocument {
  id?: string;
  version?: '2008-10-17' | '2012-10-17' | string;
  statement: PolicyStatement[];
}

export interface PolicyStatement {
  action?: string | string[],
  notAction?: string | string[],
  effect: 'Allow' | 'Deny',
  resource?: string | string[],
  notResource?: string | string[],
  sid?: string,
  principal?: Principal
  notPrincipal?: Principal,
  condition?: any;
}

export function iamPolicy(policyDocument: PolicyDocument): PolicyDocument { return policyDocument }
