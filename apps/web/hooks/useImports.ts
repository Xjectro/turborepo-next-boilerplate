import {
  useAppStore,
  useAppDispatch,
  useAppSelector,
} from "@repo/utils/lib/redux";
import { useParams } from "next/navigation";

export const useImports = () => {
  const store = useAppStore();
  const params = useParams();
  const dispatch = useAppDispatch();

  return { store, params, dispatch, useAppSelector };
};
