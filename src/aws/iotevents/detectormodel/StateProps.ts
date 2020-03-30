import { OnInputProps } from './OnInputProps';
import { OnExitProps } from './OnExitProps';
import { Value } from '../../../kloudformation/Value';
import { OnEnterProps } from './OnEnterProps';

export function stateProps(statePropsProps: StateProps): StateProps { return (statePropsProps) as unknown as StateProps }

export interface StateProps {
    onInput?: OnInputProps;
    onExit?: OnExitProps;
    stateName?: Value<string>;
    onEnter?: OnEnterProps;
}