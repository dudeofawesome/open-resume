import {
  VerySimpleMD,
  parseSimpleMD,
} from '../components/very-simple-markdown';

describe('parseSimpleMD', () => {
  test('parse string with **bold** text', () => {
    expect(parseSimpleMD('string with **bold** text')).toStrictEqual([
      [
        { text: 'string with ' },
        { text: 'bold', style: { bold: true } },
        { text: ' text' },
      ],
    ]);
  });

  test('parse string with _italic_ text', () => {
    expect(parseSimpleMD('string with _italic_ text')).toStrictEqual([
      [
        { text: 'string with ' },
        { text: 'italic', style: { italic: true } },
        { text: ' text' },
      ],
    ]);
  });

  test('parse string with [a link](https://to.somewhere) text', () => {
    expect(
      parseSimpleMD('string with [a link](https://to.somewhere) text'),
    ).toStrictEqual([
      [
        { text: 'string with ' },
        { text: 'a link', url: 'https://to.somewhere' },
        { text: ' text' },
      ],
    ]);
  });

  test('parse string with _italics_, **bold** [and a link](https://to.somewhere) text', () => {
    expect(
      parseSimpleMD(
        'string with _italics_, **bold** [and a link](https://to.somewhere) text',
      ),
    ).toStrictEqual([
      [
        { text: 'string with ' },
        { text: 'italics', style: { italic: true } },
        { text: ', ' },
        { text: 'bold', style: { bold: true } },
        { text: 'and a link', url: 'https://to.somewhere' },
        { text: ' text' },
      ],
    ]);
  });
});
