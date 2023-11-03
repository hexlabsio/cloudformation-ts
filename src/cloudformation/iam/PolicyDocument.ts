import { PolicyProps } from '../../aws/iam/role/PolicyProps';
import {Value} from "../Value";
import {Action} from "./iamActions";
export type Principal = '*' | { AWS: Value<string> | Value<string>[] } | { Federated: Value<string> | Value<string>[] } | { Service: Value<string> | Value<string>[] }
export interface PolicyDocument {
  id?: string;
  version?: '2008-10-17' | '2012-10-17' | string;
  statement: PolicyStatement[];
}

export interface PolicyStatement {
  action?: Value<string> | Value<string[]>| Value<string>[] | Action | Action[];
  notAction?: Value<string> | Value<string[]>| Value<string>[] | Action | Action[];
  effect: 'Allow' | 'Deny';
  resource?: Value<string> | Value<string[]> | Value<string>[];
  notResource?: Value<string> | Value<string[]>| Value<string>[];
  sid?: Value<string>;
  principal?: Principal;
  notPrincipal?: Principal;
  condition?: any;
}

export function iamPolicy(policyDocument: PolicyDocument): PolicyDocument { return policyDocument }


export class Policy {
  private constructor(readonly document: PolicyDocument = {statement: [], version: "2012-10-17"}) { }
  
  grant(
    action: Action | Action[],
    effect: PolicyStatement['effect'],
    onResource: PolicyStatement['resource'],
    statement?: Omit<PolicyStatement, 'resource' | 'action' | 'effect'>
  ): this {
    this.document.statement = [
      ...(this.document.statement ?? []),
      {  action, effect, resource: onResource, ...statement }
    ]
    return this;
  }
  
  allow(action: Action | Action[], onResource: PolicyStatement['resource'], statement?: Omit<PolicyStatement, 'resource' | 'action' | 'effect'>): this {
    return this.grant(action, 'Allow', onResource, statement)
  }
  
  deny(action: Action | Action[], onResource: PolicyStatement['resource'], statement?: Omit<PolicyStatement, 'resource' | 'action' | 'effect'>): this {
    return this.grant(action, 'Deny', onResource, statement)
  }
  
  static allow(action: Action | Action[], onResource: PolicyStatement['resource'], statement?: Omit<PolicyStatement, 'resource' | 'action' | 'effect'>): Policy {
    return new Policy().allow(action, onResource, statement);
  }
  
  static deny(action: Action | Action[], onResource: PolicyStatement['resource'], statement?: Omit<PolicyStatement, 'resource' | 'action' | 'effect'>): Policy {
    return new Policy().deny(action, onResource, statement);
  }
}

export class Iam<T extends {properties: { assumeRolePolicyDocument?: Value<PolicyDocument>, managedPolicyArns?: Value<Value<string>[]>, policies?: PolicyProps[]}}> {
  private constructor(private roleLike: T) { }
  
  add(policyName: string, policy: Policy): this {
    this.roleLike.properties.policies = [
      ...(this.roleLike.properties.policies ?? []),
      {policyName, policyDocument: policy.document}
    ]
    return this;
  }
  withAssumeRolePolicyStatement(action: Action | Action[], effect: PolicyStatement['effect'], rest: Omit<PolicyStatement, 'action' | 'effect'>): this {
    const current: PolicyDocument = this.roleLike.properties.assumeRolePolicyDocument as PolicyDocument ?? { version: "2012-10-17", statement: []};
    this.roleLike.properties.assumeRolePolicyDocument = {
      ...current,
      statement: [...current.statement, {  action, effect, ...rest }]
    }
    return this;
  }
  withManagedPolicies(...arns: Value<string>[]): this {
    this.roleLike.properties.managedPolicyArns = arns;
    return this;
  }

  static policy(creator: () => Policy): Policy {
    return creator();
  }
  
  static from<T extends {properties: { managedPolicyArns?: Value<Value<string>[]>, policies?: PolicyProps[]}}>(roleLike: T) {
    return new Iam(roleLike);
  }
}
