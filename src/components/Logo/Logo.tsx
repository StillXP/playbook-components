import classNames from "classnames";
import React from "react";
import './Logo.scss';

export interface Props {
    size?: '100' | '125' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '600' | '1200' |  '2200';
}

export const CBSSports = (props: React.SVGProps<SVGSVGElement> & Props) => <svg viewBox="0 0 103 13" fill="currentColor" {...props}>
<g clip-path="url(#clip0_4635_106099)">
<path d="M12.0488 6.65813C12.0488 8.32012 11.4631 9.73806 10.2917 10.9095C9.12021 12.0809 7.7096 12.6667 6.05737 12.6667C4.40514 12.6667 2.98965 12.0809 1.81332 10.9095C0.636992 9.73806 0.0488281 8.32256 0.0488281 6.65813C0.0488281 5.0059 0.636992 3.59529 1.81332 2.42384C2.98965 1.25239 4.40514 0.666672 6.05737 0.666672C7.7096 0.666672 9.12021 1.25239 10.2917 2.42384C11.4631 3.59529 12.0488 5.0059 12.0488 6.65813ZM11.6876 6.66789C11.2166 5.63067 10.4893 4.78626 9.50337 4.13708C8.4686 3.43421 7.31667 3.08278 6.05005 3.08278C4.78342 3.08278 3.62662 3.43421 2.5772 4.13708C1.60343 4.78626 0.881043 5.63067 0.410024 6.66789C0.881043 7.70511 1.60343 8.55441 2.5772 9.21579C3.62418 9.90645 4.78098 10.253 6.05005 10.253C7.31912 10.253 8.4686 9.90645 9.50581 9.21579C10.4893 8.55441 11.2166 7.70511 11.6876 6.66789ZM9.24224 6.65813C9.24224 7.53671 8.92985 8.28595 8.30996 8.90828C7.68763 9.53061 6.9384 9.84056 6.05981 9.84056C5.18123 9.84056 4.43199 9.53061 3.80966 8.90828C3.18733 8.28595 2.87738 7.53671 2.87738 6.65813C2.87738 5.77955 3.18733 5.03275 3.80966 4.4153C4.43199 3.79785 5.18123 3.49034 6.05981 3.49034C6.9384 3.49034 7.68763 3.79785 8.30996 4.4153C8.92985 5.03275 9.24224 5.77955 9.24224 6.65813Z" fill="currentColor"/>
<path d="M13.1178 6.66789C13.1178 3.56844 15.673 1.01322 19.0043 1.01322C22.0257 1.01322 23.5754 3.18284 23.5754 3.18284L22.0257 4.73256C22.0257 4.73256 20.9421 3.18284 19.0043 3.18284C17.0665 3.18284 15.5193 4.73256 15.5193 6.66789C15.5193 8.60322 17.069 10.1529 19.0043 10.1529C21.0177 10.1529 22.1038 8.60322 22.1038 8.60322L23.6535 10.1529C23.6535 10.1529 22.1038 12.3226 19.0068 12.3226C15.673 12.3226 13.1178 9.7649 13.1178 6.66789Z" fill="currentColor"/>
<path d="M24.5199 1.24507H29.091C31.2606 1.24507 32.576 2.56295 32.576 4.11023C32.576 5.81371 31.1044 6.3555 31.1044 6.3555C31.1044 6.3555 33.1178 6.8973 33.1178 8.98882C33.1178 10.6923 31.7243 12.0883 29.4009 12.0883H24.5199V1.24507ZM28.9348 5.42811C29.7084 5.42811 30.1746 4.96441 30.1746 4.34452C30.1746 3.72463 29.7109 3.26093 28.9348 3.26093H26.8433V5.43055H28.9348V5.42811ZM29.2447 10.0748C30.1746 10.0748 30.7164 9.53305 30.7164 8.75697C30.7164 7.98089 30.1746 7.43909 29.2447 7.43909H26.8433V10.0724H29.2447V10.0748Z" fill="currentColor"/>
<path d="M33.396 10.6166L34.9457 9.06691C34.9457 9.06691 35.8756 10.2286 37.5009 10.2286C38.7407 10.2286 39.2825 9.6868 39.2825 8.98882C39.2825 7.12914 33.8597 7.98088 33.8597 4.18589C33.8597 2.48241 35.3313 1.01078 37.8109 1.01078C40.2123 1.01078 41.4521 2.48241 41.4521 2.48241L39.9024 4.03213C39.9024 4.03213 39.1288 3.1023 37.889 3.1023C36.7273 3.1023 36.2612 3.566 36.2612 4.18589C36.2612 6.04556 41.684 5.19382 41.684 8.98882C41.684 10.7704 40.1343 12.3201 37.579 12.3201C34.7895 12.3226 33.396 10.6166 33.396 10.6166Z" fill="currentColor"/>
<path d="M45.0153 10.6166L46.565 9.06691C46.565 9.06691 47.4949 10.2286 49.1203 10.2286C50.36 10.2286 50.9018 9.6868 50.9018 8.98882C50.9018 7.12914 45.479 7.98088 45.479 4.18589C45.479 2.48241 46.9506 1.01078 49.4302 1.01078C51.8317 1.01078 53.0715 2.48241 53.0715 2.48241L51.5217 4.03213C51.5217 4.03213 50.7481 3.1023 49.5083 3.1023C48.3466 3.1023 47.8805 3.566 47.8805 4.18589C47.8805 6.04556 53.3033 5.19382 53.3033 8.98882C53.3033 10.7704 51.7536 12.3201 49.1984 12.3201C46.4089 12.3226 45.0153 10.6166 45.0153 10.6166Z" fill="currentColor"/>
<path d="M54.4015 1.24507H58.9726C61.2959 1.24507 62.8457 2.7948 62.8457 4.88632C62.8457 6.97784 61.2959 8.52756 58.9726 8.52756H56.7273V12.0907H54.4039V1.24507H54.4015ZM58.8945 6.35795C59.8243 6.35795 60.4442 5.73806 60.4442 4.88632C60.4442 4.03458 59.8243 3.41469 58.8945 3.41469H56.7249V6.35795H58.8945Z" fill="currentColor"/>
<path d="M63.6047 6.66789C63.6047 3.56844 66.1599 1.01322 69.4912 1.01322C72.8225 1.01322 75.3777 3.56844 75.3777 6.66789C75.3777 9.76734 72.8225 12.3226 69.4912 12.3226C66.1599 12.3226 63.6047 9.7649 63.6047 6.66789ZM72.9762 6.66789C72.9762 4.73256 71.4265 3.18284 69.4912 3.18284C67.5559 3.18284 66.0061 4.73256 66.0061 6.66789C66.0061 8.60322 67.5559 10.1529 69.4912 10.1529C71.4265 10.1529 72.9762 8.60322 72.9762 6.66789Z" fill="currentColor"/>
<path d="M76.6004 1.24507H81.4033C83.7267 1.24507 85.1983 2.7167 85.1983 4.88632C85.1983 7.36588 83.3387 8.06142 83.3387 8.06142L85.5839 12.0883H83.0287L81.0934 8.52512H78.9238V12.0883H76.6004V1.24507ZM81.3252 6.35795C82.177 6.35795 82.7969 5.73806 82.7969 4.88632C82.7969 4.03458 82.177 3.41469 81.3252 3.41469H78.9238V6.35795H81.3252Z" fill="currentColor"/>
<path d="M89.0714 3.41469H85.9719V1.24507H94.4918V3.41469H91.3923V12.0883H89.0689V3.41469H89.0714Z" fill="currentColor"/>
<path d="M94.7114 10.6166L96.2612 9.06691C96.2612 9.06691 97.191 10.2286 98.8164 10.2286C100.056 10.2286 100.598 9.6868 100.598 8.98882C100.598 7.12914 95.1751 7.98088 95.1751 4.18589C95.1751 2.48241 96.6468 1.01078 99.1263 1.01078C101.528 1.01078 102.768 2.48241 102.768 2.48241L101.218 4.03213C101.218 4.03213 100.444 3.1023 99.2044 3.1023C98.0427 3.1023 97.5766 3.566 97.5766 4.18589C97.5766 6.04556 102.999 5.19382 102.999 8.98882C102.999 10.7704 101.45 12.3201 98.8945 12.3201C96.105 12.3226 94.7114 10.6166 94.7114 10.6166Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_4635_106099">
<rect width="102.951" height="12" fill="currentColor" transform="translate(0.0488281 0.666672)"/>
</clipPath>
</defs>
</svg>

export const Logo = ({
    size
}: Props) => {
    const logoClasses = classNames(
        `logo__${size}`
    )
    let content = (
        <CBSSports
            className={logoClasses}
        />
    )
    return content;
}