export type Sizes = 'large' | 'medium' | 'small';
export type Styles = 'primary' | 'secondary' | 'tertiary';
export type Width = 'hug' | 'full-width';
export type Themes = 'light' | 'dark';
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