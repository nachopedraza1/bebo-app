
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';

export const useCustomDispatch: () => AppDispatch = useDispatch
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector