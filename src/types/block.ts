export type IBlock = {
  id: string,
  color: string,
  isActive: boolean,
  isHover: boolean,
  name?: string,
    mainSuccess?: boolean,
    background?: 'message' | 
    'kion' |
    'handle' |
    'darts' |
    'volt' |
    'shape',
    left: boolean,
    right: boolean,
    up: boolean,
    down: boolean,
    colorLine: string,
    position:string,
    succesCombo?:{id:string}[]
  
}

export type IBrendList = {
  kion: boolean,
  mts: boolean,
  darts: boolean,
  handle: boolean,
  volt: boolean,
  shape: boolean,
}