/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useCurrentPath } from "./hooks";

const Breadcrumbs = ({ children }) => {
  return (
    <Wrapper aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 16px;
  border: 1px solid gray;
  margin: 8px 0;
`;

const Crumb = ({ href, children }) => {
  const current = useCurrentPath(href);
  return (
    <CrumbWrapper>
      <CrumbLink
        href={href}
        aria-current={areaCurrent(current)}
        isCurrentPage={current}
      >
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );

  function areaCurrent(current) {
    return current ? "page" : undefined;
  }
};
const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

// nesting은 자기 자신만 책임지도록 한다.
const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);
    &::before {
      content: "";
      display: inline-block;
      margin: 0 0.25em;
      transform: rotate(15deg);
      border-right: 0.1em solid currentColor;
      height: 0.8em;
      margin-right: var(--spacing);
    }
  }
`;
const CrumbLink = styled.a`
  color: ${(p) => (p?.isCurrentPage ? "hotpink" : "inherit")};
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;
export default function BreadCrumbs() {
  return (
    <Breadcrumbs>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/living">Living Room</Crumb>
      <Crumb href="/living/couch">Couches</Crumb>
      <Crumb href="/living/couch/sectional">Sectionals</Crumb>
    </Breadcrumbs>
  );
}
