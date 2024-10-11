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

export const startBlocks = (brendsLevel:IBlock[]) :IBlock[]=> {

    const blocks:IBlock[] = []
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            blocks.push({
            id: `${i}-${j}`,
            color: 'rgba(255,255,255,0.5)',
            isActive: false,
            isHover: false,
            mainSuccess: false,
            left: false,
            right: false,
            up: false,
            down: false,
            colorLine: '',
            position: '',
      
          })
        }
      }

      brendsLevel.forEach(block => {
        const index = blocks.findIndex(el => el.id === block.id)  
      
        if (index !== -1) {
            blocks.splice(index, 1, block)
        }
      })
    

    return blocks
}
