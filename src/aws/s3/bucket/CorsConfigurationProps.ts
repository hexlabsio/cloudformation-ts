import { CorsRuleProps } from './CorsRuleProps';

export function corsConfigurationProps(corsConfigurationPropsProps: CorsConfigurationProps): CorsConfigurationProps { return (corsConfigurationPropsProps) as unknown as CorsConfigurationProps }

export interface CorsConfigurationProps {
    corsRules: CorsRuleProps[];
}