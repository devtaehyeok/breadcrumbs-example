/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
export default function AreaExamlpe() {
  return (
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <a href="https://www.w3.org/TR/wai-aria-practices">
            WAI-ARIA Authoring Practices
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/wai-aria-practices/#aria_ex">
            Design Patterns
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">
            Breadcrumb Pattern
          </a>
        </li>
        <li>
          <a href="./index.html" aria-current="page">
            Breadcrumb 공식 Example
          </a>
        </li>
      </ol>
    </nav>
  );
}
