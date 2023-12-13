import classNames from "classnames";
import { ReactNode } from "react";
import './Grid.scss';
import React from "react";

export interface IGridRow {
    children: ReactNode;
    customStyle?: string;
}

const GridRow: React.FC<IGridRow> = ({
    children,
    customStyle
}) => (
    <div className={classNames(
        `grid-row`,
    )}
    >
        {children}
    </div>
);

export interface IGridCol {
    area?: string;
    children: ReactNode;
    customStyle?: string;
    desktop?: number;
    mobile?: number;
    narrow?: number;
    tablet?: number;
    tv?: number;
    wide?: number;
}

export const GridCol: React.FC<IGridCol> = ({
    area,
    children,
    customStyle,
    desktop,
    mobile,
    narrow,
    tablet,
    tv,
    wide,
}) => (
    <div className={classNames(
        `grid-col`,
        `grid-col__${area}`,
        customStyle && customStyle,
        mobile && `mobile__${mobile}`,
        tablet && `tablet__${tablet}`,
        narrow && `narrow__${narrow}`,
        desktop && `desktop__${desktop}`,
        wide && `wide__${wide}`,
        tv && `tv__${tv}`
    )}
    >
        {children}
    </div>
);

export default GridRow;