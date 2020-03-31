import { ExecutionProps } from './ExecutionProps';

export function defaultConfigProps(defaultConfigPropsProps: DefaultConfigProps): DefaultConfigProps { return (defaultConfigPropsProps) }

export interface DefaultConfigProps {
    execution: ExecutionProps;
}