export type Sizes = 'large' | 'medium' | 'small';
export type Styles = 'primary' | 'secondary' | 'tertiary';
export type Width = 'hug' | 'full-width';
export enum Themes {
    'light' = 'light',
    'dark'='dark',
    'dynamic' = 'dynamic'
}
export type Radius = '0' | '2' | '4' | '6' | '8' | '12' | 'full';
export type States = 'default' | 'active' | 'error';
export interface Item {
    id: number,
    iconLeft: boolean,
    iconRight: boolean,
    logo: boolean,
    title: string,
    description: string | null ,
    selected: boolean,
    key: string
}
export type DropdownSizes = 'large' | 'medium';

export enum IconSizes {
    'size100' = 100,
    'size125' = 125,
    'size150' = 150,
    'size200' = 200,
    'size250' = 250,
    'size300' = 300,
    'size400' = 400,
    'size450' = 450,
    'size500' = 500,
    'size600' = 600,
    'size1200' = 1200,
    'size2200' = 2200,
}