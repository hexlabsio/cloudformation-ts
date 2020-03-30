import { Value } from '../../../kloudformation/Value';

export function defaultActionProps(defaultActionPropsProps: DefaultActionProps): DefaultActionProps { return (defaultActionPropsProps) as unknown as DefaultActionProps }

export interface DefaultActionProps {
    allow?: Value<any>;
    block?: Value<any>;
}