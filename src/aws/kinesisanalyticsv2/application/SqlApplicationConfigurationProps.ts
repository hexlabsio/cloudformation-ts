import { InputProps } from '../../kinesisanalytics/application/InputProps';

export function sqlApplicationConfigurationProps(sqlApplicationConfigurationPropsProps: SqlApplicationConfigurationProps): SqlApplicationConfigurationProps { return (sqlApplicationConfigurationPropsProps) }

export interface SqlApplicationConfigurationProps {
    inputs?: InputProps[];
}