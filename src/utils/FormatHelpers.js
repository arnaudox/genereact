export function capitalize(string) {
  if (string && typeof string === 'string') {
    return string.toString().split(' ').map(str => (
      `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
    )).join(' ');
  }
  return '';
}

export function humanize(string) {
  return capitalize(string
    .replace(/^[\s_]+|[\s_]+$/g, '')
    .replace(/[._–/\\s]+/g, ' '));
}

const FormatHelpers = {
  capitalize,
  humanize,
};

export default FormatHelpers;
