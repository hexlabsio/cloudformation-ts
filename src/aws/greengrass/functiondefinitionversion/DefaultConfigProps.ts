import { ExecutionProps } from './ExecutionProps';

export function defaultConfigProps(defaultConfigPropsProps: DefaultConfigProps): DefaultConfigProps { return (defaultConfigPropsProps) as unknown as DefaultConfigProps }

export interface DefaultConfigProps {
    execution: ExecutionProps;
}