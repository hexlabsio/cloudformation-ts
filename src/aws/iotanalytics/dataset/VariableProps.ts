import { Value } from '../../../kloudformation/Value';
import { DatasetContentVersionValueProps } from './DatasetContentVersionValueProps';
import { OutputFileUriValueProps } from './OutputFileUriValueProps';

export function variableProps(variablePropsProps: VariableProps): VariableProps { return (variablePropsProps) }

export interface VariableProps {
    variableName: Value<string>;
    datasetContentVersionValue?: DatasetContentVersionValueProps;
    doubleValue?: Value<number>;
    outputFileUriValue?: OutputFileUriValueProps;
    stringValue?: Value<string>;
}