import { CSSProperties, FC, useMemo } from 'react';
import React from 'react';

/**
 * A **VERY** simple Markdown parser.
 *
 * Supports _non-cascading_ bold, italics, and links using a Github flavored
 * Markdown subset.
 *
 * @param md the markdown you want to parse
 */
export const VerySimpleMD: FC<A> = ({ md }) => {
  const ast = useMemo<AST>(() => parseSimpleMD(md), [md]);

  return (
    <>
      {ast.map((n, i) => (
        <p key={i}>
          {Array.isArray(n)
            ? n.map((l, j) => {
                const style: CSSProperties = {};
                if (l.style?.bold) style.fontWeight = 'bold';
                if (l.style?.italic) style.fontStyle = 'italic';

                if (l.url != null) {
                  return (
                    <a key={j} href={l.url} style={style}>
                      {l.text}
                    </a>
                  );
                } else {
                  return (
                    <span key={j} style={style}>
                      {l.text}
                    </span>
                  );
                }
              })
            : n.text}
        </p>
      ))}
    </>
  );
};

export function parseSimpleMD(md: string): AST {
  const ast: AST = [];
  const paragraphs = md.split('\n\n');
  for (const p of paragraphs) {
    const branch: ASTNode[] = [];

    let p_sub = p;

    let i = 0;
    while (i < p_sub.length) {
      if (p_sub[i] === '*' && p_sub[i + 1] === '*') {
        let j = i + 2;
        for (; j < p_sub.length; j++) {
          if (p_sub[j] === '*' && p_sub[j + 1] === '*') {
            break;
          }
        }
        if (j < p_sub.length) {
          // we found a matching ** set

          if (i > 1) branch.push({ text: p_sub.slice(0, i) });
          branch.push({
            text: p_sub.slice(i + 2, j),
            style: { bold: true },
          });

          // remove section from our haystack
          p_sub = p_sub.slice(j + 2);
          i = 0;
        }
      } else if (p_sub[i] === '_') {
        let j = i + 1;
        for (; j < p_sub.length; j++) {
          if (p_sub[j] === '_') {
            break;
          }
        }
        if (j < p_sub.length) {
          // we found a matching _

          if (i > 1) branch.push({ text: p_sub.slice(0, i) });
          branch.push({
            text: p_sub.slice(i + 1, j),
            style: { italic: true },
          });

          // remove section from our haystack
          p_sub = p_sub.slice(j + 1);
          i = 0;
        }
      } else if (p_sub[i] === '[') {
        let j = i + 1;
        for (; j < p_sub.length; j++) {
          if (p_sub[j] === ')') {
            break;
          }
        }
        if (j < p_sub.length) {
          // we found a closing )

          if (i > 1) branch.push({ text: p_sub.slice(0, i) });

          const [text, url] = p_sub.slice(i + 1, j).split('](');
          branch.push({ text, url });

          // remove section from our haystack
          p_sub = p_sub.slice(j + 1);
          i = 0;
        }
      } else {
        i++;
      }
    }

    branch.push({ text: p_sub });

    ast.push(branch);
  }
  return ast;
}

export interface A {
  md: string;
}

type AST = (ASTNode | ASTNode[])[];
interface ASTNode {
  text: string;
  style?: {
    bold?: boolean;
    italic?: boolean;
  };
  url?: string;
}
