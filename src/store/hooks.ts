import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatcher, AppSelection } from "./store";

type UseAppDispatcher = () => AppDispatcher;

export const useAppSelector: TypedUseSelectorHook<AppSelection> = useSelector;
export const useAppDispatcher: UseAppDispatcher = useDispatch;
