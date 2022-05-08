import { useNumber } from "./use-number";
import { act, renderHook } from "@testing-library/react";

test("it should default to zero, defaultValue or minumum", () => {
    const hook1 = renderHook(() => useNumber({}));
    const hook2 = renderHook(() => useNumber({ min: 2 }));
    const hook3 = renderHook(() => useNumber({ min: 2, defaultValue: 4 }));
    expect(hook1.result.current.value).toBe(0);
    expect(hook2.result.current.value).toBe(2);
    expect(hook3.result.current.value).toBe(4);
});

test("it should increment", () => {
    const hook = renderHook(() => useNumber({ defaultValue: 2 }));
    act(() => {
        hook.result.current.increment();
    });
    expect(hook.result.current.value).toBe(3);
});

test("it should decrement", () => {
    const hook = renderHook(() => useNumber({ defaultValue: 2 }));
    act(() => {
        hook.result.current.decrement();
    });
    expect(hook.result.current.value).toBe(1);
});

test("it should not increment past maximum", () => {
    const hook = renderHook(() => useNumber({ defaultValue: 2, max: 4 }));
    act(() => {
        hook.result.current.increment();
        hook.result.current.increment();
        hook.result.current.increment();
    });
    expect(hook.result.current.value).toBe(4);
});

test("it should not decrement past minimum", () => {
    const hook = renderHook(() => useNumber({ defaultValue: 2, min: 0 }));
    act(() => {
        hook.result.current.decrement();
        hook.result.current.decrement();
        hook.result.current.decrement();
    });
    expect(hook.result.current.value).toBe(0);
});
