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
    position:string
    
  
}