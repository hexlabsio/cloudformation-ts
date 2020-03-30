import { Value } from '../../../kloudformation/Value';
import { HostHeaderConfigProps } from './HostHeaderConfigProps';
import { HttpHeaderConfigProps } from './HttpHeaderConfigProps';
import { HttpRequestMethodConfigProps } from './HttpRequestMethodConfigProps';
import { PathPatternConfigProps } from './PathPatternConfigProps';
import { QueryStringConfigProps } from './QueryStringConfigProps';
import { SourceIpConfigProps } from './SourceIpConfigProps';

export function ruleConditionProps(ruleConditionPropsProps: RuleConditionProps): RuleConditionProps { return (ruleConditionPropsProps) as unknown as RuleConditionProps }

export interface RuleConditionProps {
    field?: Value<string>;
    hostHeaderConfig?: HostHeaderConfigProps;
    httpHeaderConfig?: HttpHeaderConfigProps;
    httpRequestMethodConfig?: HttpRequestMethodConfigProps;
    pathPatternConfig?: PathPatternConfigProps;
    queryStringConfig?: QueryStringConfigProps;
    sourceIpConfig?: SourceIpConfigProps;
    values?: Value<Value<string>[]>;
}