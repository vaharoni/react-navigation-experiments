# Overview

This repo experiments with basic react-navigation lifecycle under various scenarios.

The results of the experiments are documented in the [experiments](experiments/) folder.

The following effects are tested:

- `useEffect`
- `useLayoutEffect`
- `useFocusEffect`

These are tested with and without a dependency array.
See [lib/use-debug.ts](lib/use-debug.ts) for how these are used.

In addition, subscribing to a global store via Zustand is tested with and without the `freezeOnBlur` option.
See [App.tsx](App.tsx) for how this is set up.

# Conclusions

- `useFocusEffect` behaves similarly to `useEffect` on the web. It is always
  responding to the screen shown.
- When we do not use an empty dependency array, even state changes (e.g. clicking on Internal) causes
  all effects to be unmounted and mounted. Nothing new here, this is the same as on the web.
- `useLayoutEffect` and `useEffect` are called for the newly visible screen, but their "unmount" callback
  does not get called for the previous screen. They only get "unmounted" when popping (clicking on Back or going back by navigating to a screen earlier in the stack that effectively pops multiple screens).
- Re-rendering does not always rerun when clicking on back. It does correctly get rendered in
  a `frozenOnBlur: true` scenario when an external state was updated (e.g. via Zustand).
- Calling navigate to the same screen with different params does not trigger animation. It behaves
  like a state change.
- Calling navigate with params relies on referential stability. If we have a stable object using `useMemo`
  and call navigate with it, nothing happens. If we generate a new object that has the same values, it behaves
  just as if the params were different.
- When screens are not frozen, when an external state that is watched by all screens gets updated
  from some screen (e.g. via Zustand), re-rendering happens on all screens in memory even if they
  are not visible. This is somewhat unexpected.
- When screens are marked as `frozenOnBlur`, updating an external state behaves as expected
  and only impacts visible screens.
- Remember to wrap the callback sent to `useFocusEffect` with `useCallback(() => {...}, [])` - this is the
  way to mimic an empty dependency array. Without it, every state change (e.g. clicking on Internal)
  causes the `useFocusEffect` to "unmount" and "mount".
