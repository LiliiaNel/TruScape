export const getCountById = <T extends string, I extends Record<T, string | null>>(
    items: I[],
    idKey: T,
) =>
    items.reduce(
        (counts, { [idKey]: id }) => {
            if (!id) return counts;  // skip null/empty
            if (!counts[id]) counts[id] = 0;
            counts[id] += 1;
            return counts;
        },
        {} as Record<string, number>,
    );