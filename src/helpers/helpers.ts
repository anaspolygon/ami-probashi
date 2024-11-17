export const getFirstSentences = (str: string, sentenceCount = 3) => {
  const sentences = str.match(/[^.!?]+[.!?]+/g) || [];
  const selectedSentences = sentences.slice(0, sentenceCount);
  return selectedSentences.join(" ");
};

export const removeHtmlTags = (str: string) => {
  return str?.replace(/<\/?[^>]+(>|$)/g, "");
};

export function removeTagsAndNewlinesAndEllipsis(text: string) {
  // Remove HTML tags
  let strippedText = text
    .replace(/<[^>]*>/g, "") // Removes all HTML tags
    .replace(/\n/g, "") // Removes newlines
    .replace(/\./g, "") // Removes multiple dots (ellipsis);
    .replace(/&#8230;/g, ""); // Removes HTML entity for ellipsis

  let textArea = document.createElement("textarea");
  textArea.innerHTML = strippedText;
  let decodedText = textArea.value;

  return decodedText;
}

export function extractFirstBnThreeSentences(text: string, sentenceCount = 3) {
  const sentences = text.split(/(?<=[।\.])\s*/);
  const firstThree = sentences.slice(0, sentenceCount).join(" ");
  return firstThree.trim();
}

export const getImageUrl = (url: string, path: string) => {
  return url + "/" + path;
};
