import React from "react";
import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props: any) =>
    props.direction ? props.direction : "column"};
  justify-content: ${(props: any) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props: any) =>
    props.alignItems ? props.alignItems : "center"};
  width: ${(props: any) => (props.width ? props.width : "")};
  height: ${(props: any) => (props.height ? props.height : "")};
  min-height: ${(props: any) => (props.minHeight ? props.minHeight : "")};
  min-width: ${(props: any) => (props.minWidth ? props.minWidth : "")};
  max-width: ${(props: any) => (props.maxWidth ? props.maxWidth : "")};
  margin: ${(props: any) => (props.margin ? props.margin : "")};
  background: ${(props: any) => (props.background ? props.background : "")};
  padding: ${(props: any) => (props.padding ? props.padding : "")};
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : "")};
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : "")};
  flex: ${(props: any) => (props.flex ? props.flex : "")};
  flex-wrap: ${(props: any) => (props.flexWrap ? props.flexWrap : "")};
  overflow: ${(props: any) => (props.overflow ? props.overflow : "")};
  border-radius: ${(props: any) =>
    props.borderRadius ? props.borderRadius : ""};
  position: ${(props: any) => (props.position ? props.position : "")};
  bottom: ${(props: any) => (props.bottom ? props.bottom : "")};
  box-shadow: ${(props: any) => (props.boxShadow ? props.boxShadow : "")};
`;
