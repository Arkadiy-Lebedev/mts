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
    'shape' |
    'goat' |
    'prize' |
    'arrow' |
    'cube' |
    'people'|
    'book' |
    'pixel'|
    'l'|
    'heart'|
    'gourd'|
    'sun'|
    'bol'
    left: boolean,
    right: boolean,
    up: boolean,
    down: boolean,
    colorLine: string,
    position:string,
    succesCombo?:{id:string}[]
  
}

export type IBrendListLevel1 = {
  kion: boolean,
  mts: boolean,
  darts: boolean,
  handle: boolean,
  volt: boolean,
  shape: boolean,

}

export type IBrendListLevel2 = {
  goat: boolean,
  prize: boolean,
  arrow: boolean,
  cube: boolean,
  people: boolean,
  book: boolean,

}

export type IBrendListLevel3 = {
  pixel:boolean
  l:boolean
  heart:boolean
  gourd:boolean
  sun:boolean
  bol:boolean

}