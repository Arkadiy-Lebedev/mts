import type { IBlock } from '@/types/block'

export const  checkIdsMatch = (arr1:IBlock[], arr2:{id:string}[]) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const ids1 = new Set(arr1.map(item => item.id));
    const ids2 = new Set(arr2.map(item => item.id));

    if (ids1.size !== ids2.size) {
        return false;
    }

    for (const id of ids1) {
        if (!ids2.has(id)) {
            return false;
        }
    }

    return true;
}