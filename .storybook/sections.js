/**
 * Combine the given name with a separator
 *
 * @param name
 * @param separator
 * @returns {String}
 */
function withSeparator(name, separator = '->') {
  return name + separator;
}

export const COMPONENTS = withSeparator('Components');
export const FORM = withSeparator('Form');
export const GRID = withSeparator('Grid');
export const TYPOGRAPHY = withSeparator('Typography');
export const ICONS = withSeparator('Icons');
export const COMPOSITION = withSeparator('Composition');
export const GRAPH = withSeparator('Graph');
