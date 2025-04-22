export function useMeta() {
  function titleAuthor(title?: string) {
    document.title = title + ' - Piotr Siegoczyński';
  }

  return {
    titleAuthor,
  };
}
