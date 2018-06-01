const storybookOptions = {
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: '🐦 Logistics Cardinal UI',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/foodora/logistics-cardinal-ui',
  /**
   * Inner section separator e.g: MyComponent/WithSomething
   * It will translate to:
   *
   * [...]
   *   MyComponent
   *    WithSomething
   */
  hierarchySeparator: /\//,
  /**
   * Section separator e.g: FORM->Checkbox
   * It will translate to:
   *
   * [FORM]
   *   Checkbox
   *    [...]
   */
  hierarchyRootSeparator: /\-\>/,
};

export default storybookOptions;
