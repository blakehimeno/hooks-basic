// useFilteredList — memoize a filtered list with useMemo.
// Goal: return the subset of `items` whose `name` includes `query`
// (case-insensitive), without re-filtering on every unrelated render.
//
// TODO 1: import useMemo from "react"
// TODO 2: wrap the filtering logic in useMemo, with [items, query] as dependencies
// TODO 3: filter `items`, keeping entries whose `.name` includes `query`
//         hint: item.name.toLowerCase().includes(query.toLowerCase())
// TODO 4: return the filtered array
//
// Used by: src/components/FilteredListDemo.jsx
// Key idea: without useMemo, this filter would re-run on every render of the
// parent — even ones caused by state that has nothing to do with the list.

export function useFilteredList(items, query) {
  return items;
}
