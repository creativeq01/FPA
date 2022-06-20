// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logosvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logosvg2Icon(props: Logosvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 239 44"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M166.093 43.658h-2.299l-.582-1.745h-3.22l-.582 1.745h-2.3l3.423-9.471h2.138l3.422 9.471zm-3.367-3.572l-1.123-3.49-1.123 3.49h2.246zm14.164-1.177c0 2.908-1.935 4.749-4.952 4.749h-3.274v-9.471h3.274c3.017.001 4.952 1.828 4.952 4.722m-2.205 0c0-1.854-1.083-2.895-2.949-2.895h-.894v5.816h.894c1.839.001 2.949-1.067 2.949-2.921m12.933-4.721l-3.355 9.471h-2.057l-3.355-9.471h2.301l2.084 6.494 2.082-6.494h2.3zm2.57 0h2.178v9.471h-2.178v-9.471zm8.875 3.748c1.447.365 3.273.757 3.273 2.841 0 1.922-1.569 3.017-3.559 3.017-1.894 0-3.232-1.001-3.625-2.57l2.016-.353c.135.57.689 1.057 1.691 1.057.865 0 1.365-.365 1.365-.961 0-.717-.73-1.001-1.637-1.245-1.434-.405-3.287-.771-3.287-2.732 0-1.907 1.759-2.936 3.369-2.936 1.406 0 3.003.798 3.422 2.503l-1.975.352c-.244-.69-.812-1.001-1.475-1.001-.758 0-1.231.392-1.231.919.002.649.746.879 1.653 1.109m15.463.987c0 2.828-1.989 4.87-4.83 4.87-2.828 0-4.83-2.042-4.83-4.87 0-2.827 2.002-4.87 4.83-4.87 2.841 0 4.83 2.043 4.83 4.87m-2.178 0c0-1.678-.96-3.044-2.651-3.044s-2.652 1.366-2.652 3.044.961 3.044 2.652 3.044 2.651-1.366 2.651-3.044m12.256-1.596c0 1.299-.649 2.285-1.718 2.772l1.948 3.559h-2.422l-1.515-3.22h-1.354v3.22h-2.179v-9.471h3.816c2.059.001 3.424 1.232 3.424 3.14m-2.218-.014c0-.826-.568-1.299-1.542-1.299h-1.299v2.584h1.299c.973.001 1.542-.474 1.542-1.285m8.658.623c1.448.365 3.274.757 3.274 2.841 0 1.922-1.569 3.017-3.558 3.017-1.895 0-3.234-1.001-3.626-2.57l2.016-.353c.136.57.69 1.057 1.69 1.057.866 0 1.367-.365 1.367-.961 0-.717-.73-1.001-1.637-1.245-1.435-.405-3.288-.771-3.288-2.732 0-1.907 1.759-2.936 3.369-2.936 1.407 0 3.003.798 3.423 2.503l-1.976.352c-.243-.69-.812-1.001-1.475-1.001-.757 0-1.231.392-1.231.919.002.649.746.879 1.652 1.109M6.785 6.673v6.976H17.64v5.134H6.785v10.032H.475V1.383h18.732v5.291H6.785zM21.038 21.37V8.907h6.113v11.052c0 2.195.628 4.115 3.175 4.115 2.9 0 3.605-2.508 3.605-4.978V8.907h6.074v19.908h-6.074v-2.586c-1.45 1.96-3.409 2.979-5.839 2.979-4.624 0-7.054-3.487-7.054-7.838m30.047-7.407v6.858c0 2.234.47 2.979 2.547 2.979.588 0 1.215-.157 1.803-.353v5.526c-.783.156-2.115.234-2.86.234-4.507 0-7.564-1.567-7.564-6.663v-8.583h-3.174V8.907h3.253V3.5l5.957-1.019v6.427h4.35v5.056h-4.312zm6.245 7.407V8.907h6.114v11.052c0 2.195.626 4.115 3.174 4.115 2.9 0 3.605-2.508 3.605-4.978V8.907h6.074v19.908h-6.074v-2.586c-1.45 1.96-3.409 2.979-5.839 2.979-4.624 0-7.054-3.487-7.054-7.838m34.357-7.446a7.78 7.78 0 00-1.646-.157c-2.743 0-5.408 1.372-5.408 5.722v9.327h-6.075V8.907h6.075v3.214c1.842-2.979 3.762-3.606 7.054-3.606v5.409zm19.83 6.662H97.448c.274 2.391 2.155 3.802 4.468 3.802 1.606 0 2.979-.628 3.724-2.116l5.485 1.019c-1.646 4.037-5.212 5.918-9.287 5.918-5.996 0-10.189-4.351-10.189-10.386 0-5.957 4.114-10.307 10.071-10.307 6.035 0 9.915 4.507 9.915 10.464a10.6 10.6 0 01-.118 1.606m-5.839-4.115c-.234-2.156-2.037-3.41-3.997-3.41-1.959 0-3.723 1.254-4.075 3.41h8.072zm22.295-1.254l-8.821 13.834h-6.689l8.85-13.834-8.85-13.834h6.689l8.821 13.834zm11.303 0l-8.822 13.834h-6.689l8.787-13.834-8.787-13.834h6.689l8.822 13.834zm24.262-4.742c0 5.447-3.92 9.014-9.838 9.014h-4.82v9.327h-6.309V1.383h11.051c5.957 0 9.916 3.566 9.916 9.092m-6.428-.039c0-2.391-1.646-3.762-4.468-3.762h-3.763v7.486h3.763c2.822-.001 4.468-1.373 4.468-3.724m21.723 3.488a7.786 7.786 0 00-1.646-.157c-2.743 0-5.408 1.372-5.408 5.722v9.327h-6.074V8.907h6.074v3.214c1.842-2.979 3.762-3.606 7.055-3.606v5.409zm21.887 4.938c0 6.388-4.271 10.346-10.503 10.346-6.153 0-10.425-3.997-10.425-10.346 0-6.31 4.312-10.347 10.425-10.347 6.192 0 10.503 4.037 10.503 10.347m-6.114 0c0-2.861-1.411-5.251-4.39-5.251-2.86 0-4.311 2.43-4.311 5.251 0 2.782 1.45 5.251 4.311 5.251 2.979 0 4.39-2.43 4.39-5.251m29.058 0c0 6.388-4.271 10.346-10.503 10.346-6.152 0-10.424-3.997-10.424-10.346 0-6.31 4.311-10.347 10.424-10.347 6.192 0 10.503 4.037 10.503 10.347m-6.113 0c0-2.861-1.411-5.251-4.39-5.251-2.861 0-4.311 2.43-4.311 5.251 0 2.782 1.449 5.251 4.311 5.251 2.979 0 4.39-2.43 4.39-5.251m20.934-4.899h-4.312v14.853H228.1V13.963h-3.135V8.907h3.135V7.379c0-4.859 1.882-7.172 7.211-7.172 1.137 0 2.234.079 3.214.235v5.251c-.51-.196-1.333-.313-2.077-.274-1.96.04-2.273.784-2.273 2.704v.784h4.312v5.056z"
        }
      ></path>
    </svg>
  );
}

export default Logosvg2Icon;
/* prettier-ignore-end */