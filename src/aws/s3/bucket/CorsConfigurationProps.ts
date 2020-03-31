import { CorsRuleProps } from './CorsRuleProps';

export function corsConfigurationProps(corsConfigurationPropsProps: CorsConfigurationProps): CorsConfigurationProps { return (corsConfigurationPropsProps) }

export interface CorsConfigurationProps {
    corsRules: CorsRuleProps[];
}