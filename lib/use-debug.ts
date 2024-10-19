import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useLayoutEffect } from "react";

// Choose the method of debugging you want to use
export const useDebug = useDebugEmptyDepArray;
// export const useDebug = useDebugNoDepArray;

// ==============================

function useDebugEmptyDepArray(name: string, route?: any) {
  useEffect(() => {
    console.log(">".repeat(50));
    console.log({ where: `+useEffect ${name} mounted`, params: route?.params });
    return () => {
      console.log("<".repeat(50));
      console.log({
        where: `-useEffect ${name} unmounted`,
        params: route?.params,
      });
    };
  }, []);

  useLayoutEffect(() => {
    console.log(">".repeat(50));
    console.log({
      where: `+useLayoutEffect ${name} mounted`,
      params: route?.params,
    });
    return () => {
      console.log("<".repeat(50));
      console.log({
        where: `-useLayoutEffect ${name} unmounted`,
        params: route?.params,
      });
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log(">".repeat(50));
      console.log({
        where: `+useFocusEffect ${name} mounted`,
        params: route?.params,
      });
      return () => {
        console.log("<".repeat(50));
        console.log({
          where: `-useFocusEffect ${name} unmounted`,
          params: route?.params,
        });
      };
    }, [])
  );
}

function useDebugNoDepArray(name: string, route?: any) {
  useEffect(() => {
    console.log(">".repeat(50));
    console.log({ where: `+useEffect ${name} mounted`, params: route?.params });
    return () => {
      console.log("<".repeat(50));
      console.log({
        where: `-useEffect ${name} unmounted`,
        params: route?.params,
      });
    };
  });

  useLayoutEffect(() => {
    console.log(">".repeat(50));
    console.log({
      where: `+useLayoutEffect ${name} mounted`,
      params: route?.params,
    });
    return () => {
      console.log("<".repeat(50));
      console.log({
        where: `-useLayoutEffect ${name} unmounted`,
        params: route?.params,
      });
    };
  });

  useFocusEffect(() => {
    console.log(">".repeat(50));
    console.log({
      where: `+useFocusEffect ${name} mounted`,
      params: route?.params,
    });
    return () => {
      console.log("<".repeat(50));
      console.log({
        where: `-useFocusEffect ${name} unmounted`,
        params: route?.params,
      });
    };
  });
}
