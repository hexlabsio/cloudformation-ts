import { Value } from '../../../kloudformation/Value';

export function defaultActionProps(defaultActionPropsProps: DefaultActionProps): DefaultActionProps { return (defaultActionPropsProps) }

export interface DefaultActionProps {
    allow?: Value<any>;
    block?: Value<any>;
}