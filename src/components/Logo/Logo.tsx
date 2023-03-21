import React from "react";
import logo from "public/Paramount.svg"

interface SVGRProps {
    title?: string;
}

export const pLogo = (props: React.SVGProps<SVGSVGElement> & SVGRProps) => <img src={logo}/>;